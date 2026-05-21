import { useEffect, useMemo, useState } from "react";
import { Edit2, Save, X, Loader2 } from "lucide-react";
import { httpService } from "@/utils/httpService.ts";

export type TabKey =
  | "client"
  | "industry"
  | "service"
  | "platforms"
  | "primaryGoal"
  | "ourRole"
  | "startingPoint";

export type TabItem = {
  key: TabKey;
  label: string;
  title: string;
  text: string;
};

const SLUG = "skylines-989762e9";

const DEFAULT_TABS: TabItem[] = [
  { key: "client", label: "Client", title: "CryptoZen", text: "CryptoZen is a crypto education brand focused on making blockchain content simple, engaging, and actionable." },
  { key: "industry", label: "Industry", title: "Crypto Education", text: "The industry needed short-form storytelling that could explain a complex topic without losing momentum." },
  { key: "service", label: "Service", title: "Video Strategy & Motion", text: "We combined scripting, motion design, and editing into one streamlined workflow." },
  { key: "platforms", label: "Platforms", title: "Instagram, TikTok, YouTube", text: "The content system was adapted for vertical social feeds and fast-scrolling viewers." },
  { key: "primaryGoal", label: "Primary Goal", title: "Membership Growth", text: "The main objective was to convert attention into action." },
  { key: "ourRole", label: "Our Role", title: "Creative Direction + Execution", text: "We handled the concept translation, motion system, visual pacing, and delivery structure." },
  { key: "startingPoint", label: "Starting Point", title: "Content Audit & Brief", text: "We started by reviewing the existing content style." },
];

export default function AdminCaseStudyTabsSection({
  tabsData: propTabsData,
  tabsError = null
}: {
  tabsData?: TabItem[];
  tabsError?: string | null;
}) {
  const tabsData = propTabsData && propTabsData.length > 0 ? propTabsData : DEFAULT_TABS;
  const tabs = tabsData as TabItem[];

  const [activeTab, setActiveTab] = useState<TabKey>("industry");
  const [displayedText, setDisplayedText] = useState("");
  const [editField, setEditField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const active = useMemo(
    () => tabs.find((tab) => tab.key === activeTab) ?? tabs[0],
    [activeTab, tabs],
  );

  useEffect(() => {
    if (editField) return;
    let i = 0;
    setDisplayedText("");
    const timer = window.setInterval(() => {
      i += 2;
      setDisplayedText(active.text.slice(0, i));
      if (i >= active.text.length) window.clearInterval(timer);
    }, 18);
    return () => window.clearInterval(timer);
  }, [activeTab, active.text, editField]);

  const startEdit = (field: string, value: string) => {
    setEditField(field);
    setEditValue(value);
    setSaveError(null);
  };

  const cancelEdit = () => {
    setEditField(null);
    setEditValue("");
    setSaveError(null);
  };

  const saveEdit = async () => {
    if (!editField || !editValue.trim()) return;
    setSaving(true);
    setSaveError(null);
    try {
      if (editField === "title") {
        await httpService.put(`/project/texts?slug=${SLUG}`, { title: editValue, section: active.label });
        setEditField(null);
        setEditValue("");
        window.location.reload();
      } else if (editField === "text") {
        await httpService.put(`/project/texts?slug=${SLUG}`, { description: editValue, section: active.label });
        setEditField(null);
        setEditValue("");
        window.location.reload();
      }
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : String(err));
      setSaving(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); saveEdit(); }
    if (e.key === "Escape") cancelEdit();
  };

  const EditBtn = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center w-7 h-7 rounded-md text-white/40 hover:text-cyan-300 hover:bg-white/10 transition-all shrink-0"
      aria-label="Edit"
    >
      <Edit2 className="h-3.5 w-3.5" />
    </button>
  );

  const InlineInput = ({ value, multiline = false }: { value: string; multiline?: boolean }) => (
    <div className="flex gap-2 items-start w-full">
      {multiline ? (
        <textarea
          value={value}
          onChange={e => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm leading-7 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-y"
          rows={3}
          autoFocus
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={e => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          autoFocus
        />
      )}
      <div className="flex gap-1 shrink-0">
        <button onClick={saveEdit} disabled={saving} className="p-2 rounded-lg bg-cyan-400/20 text-cyan-300 hover:bg-cyan-400/30 transition-colors" aria-label="Save">
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
        </button>
        <button onClick={cancelEdit} disabled={saving} className="p-2 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors" aria-label="Cancel">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  if (tabsError) {
    return (
      <section className="relative overflow-hidden lg:py-40">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-red-800">Failed to load tabs data</h3>
            <p className="text-red-600">{tabsError}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden lg:py-40">
      {saveError && (
        <div className="fixed top-4 right-4 z-50 rounded-lg bg-red-500/90 p-4 text-white text-sm shadow-lg">
          Save failed: {saveError}
          <button onClick={() => setSaveError(null)} className="ml-2 text-white/80 hover:text-white"><X className="h-3 w-3 inline" /></button>
        </div>
      )}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4 sm:gap-7">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onMouseEnter={() => setActiveTab(tab.key)}
                onFocus={() => setActiveTab(tab.key)}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  "relative shrink-0 text-sm font-medium transition-colors duration-200 sm:text-[15px] whitespace-nowrap",
                  isActive ? "text-cyan-300" : "text-white/35 hover:text-white/60",
                ].join(" ")}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.75)]" />
                )}
              </button>
            );
          })}
        </div>
        <div className="rounded-[26px] border border-white/5 bg-[#07181d]/95 px-5 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-7 sm:py-8 lg:px-8 lg:py-9">
          {/* Title */}
          <div className="mb-4">
            {editField === "title" ? (
              <InlineInput value={editValue} />
            ) : (
              <div className="flex items-start gap-1">
                <h2 className="text-[28px] font-black leading-tight tracking-tight text-white sm:text-[32px]">
                  {active.title}
                </h2>
                <EditBtn onClick={() => startEdit("title", active.title)} />
              </div>
            )}
          </div>
          {/* Text */}
          <div>
            {editField === "text" ? (
              <InlineInput value={editValue} multiline />
            ) : (
              <div className="flex items-start gap-1">
                <p className="max-w-5xl text-[15px] leading-7 text-white/80 sm:text-base">
                  {displayedText}
                  <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-cyan-300 align-middle animate-pulse" />
                </p>
                <EditBtn onClick={() => startEdit("text", active.text)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}