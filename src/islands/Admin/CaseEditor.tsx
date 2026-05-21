import React, { useState, useEffect } from "react";
import { Edit2, Save, X } from "lucide-react";
import { httpService } from "@/utils/httpService.ts";

interface CaseData {
  avatar?: string;
  title?: string;
  description?: string;
  tools?: { name: string; iconUrl?: string }[];
  projectType?: string;
  projectTimeline?: string;
}

interface TabData {
  key: any;
  label: string;
  title: string;
  text: string;
}

export default function CaseEditor() {
  const [caseData, setCaseData] = useState<CaseData>({});
  const [tabsData, setTabsData] = useState<TabData[]>([]);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [fieldValue, setFieldValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetchCaseData();
  }, []);

  const fetchCaseData = async () => {
    try {
      // Fetch hero data
      const heroRes = await httpService.get<CaseData>(
        `/project/details?slug=skylines-989762e9`
      );
      
      // Fetch tab data
      const textsRes = await httpService.get<any[]>(
        `/project/texts?slug=skylines-989762e9`
      );
      
      const processedTabs = textsRes.map((t) => ({
        key: t.section.replace(/\s+/g, "").toLowerCase(),
        label: t.section,
        title: t.title,
        text: t.description,
      }));
      
      setCaseData(heroRes);
      setTabsData(processedTabs);
    } catch (error) {
      console.error("[CaseEditor] Fetch failed:", error);
      setFetchError(error instanceof Error ? error.message : String(error));
    }
  };

  const startEditing = (field: string, initialValue: string) => {
    setEditingField(field);
    setFieldValue(initialValue);
  };

  const stopEditing = () => {
    setEditingField(null);
    setFieldValue("");
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFieldValue(e.target.value);
  };

  const saveField = async () => {
    if (!editingField || !fieldValue.trim()) return;
    
    setIsSaving(true);
    setSaveError(null);
    
    try {
      // Determine which endpoint to call based on field
      let endpoint = "";
      let payload: any = {};
      
      if (["title", "description", "avatar", "projectType", "projectTimeline"].includes(editingField)) {
        endpoint = `/project/details?slug=skylines-989762e9`;
        payload[editingField] = fieldValue;
        
        // Handle special case for avatar (might need file upload handling)
        if (editingField === "avatar") {
          // For now, treating as string URL
          payload[editingField] = fieldValue;
        }
      } else if (editingField === "tools") {
        // Handle tools array editing - convert comma-separated string to array of objects
        // Preserve existing iconUrls where possible, use defaults for new tools
        const toolNames = fieldValue.split(",").map(name => name.trim()).filter(name => name.length > 0);
        const newTools = toolNames.map((name, index) => {
          // Try to preserve existing iconUrl if tool name matches
          const existingTool = caseData.tools?.find(t => t.name.toLowerCase() === name.toLowerCase());
          return {
            name,
            iconUrl: existingTool?.iconUrl || `/case/${name.toLowerCase().replace(/\s+/g, '')}.png` // Default icon
          };
        });
        endpoint = `/project/details?slug=skylines-989762e9`;
        payload.tools = newTools;
      } else if (editingField.startsWith("tab")) {
        // Handle tab data editing
        const tabIndex = parseInt(editingField.split("-")[1]);
        const fieldName = editingField.split("-")[2]; // title or text
        
        if (!isNaN(tabIndex) && tabsData[tabIndex]) {
          endpoint = `/project/texts?slug=skylines-989762e9`;
          payload = {
            [fieldName]: fieldValue,
            section: tabsData[tabIndex].label // Keep original section
          };
          
          // Need to include ID if the API requires it for updates
          // This depends on your backend API structure
        }
      }
      
      if (endpoint) {
        await httpService.put(endpoint, payload);
        // Optimistically update the state
        if (["title", "description", "avatar", "projectType", "projectTimeline"].includes(editingField)) {
          setCaseData(prev => ({ ...prev, [editingField]: fieldValue }));
        } else if (editingField.startsWith("tab")) {
          const tabIndex = parseInt(editingField.split("-")[1]);
          const fieldName = editingField.split("-")[2];
          setTabsData(prev => {
            const newTabs = [...prev];
            if (newTabs[tabIndex]) {
              newTabs[tabIndex] = { ...newTabs[tabIndex], [fieldName]: fieldValue };
            }
            return newTabs;
          });
        }
      }
    } catch (error) {
      console.error("[CaseEditor] Save failed:", error);
      setSaveError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSaving(false);
      stopEditing();
    }
  };

  if (fetchError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <h3 className="text-red-800">Fetch Error:</h3>
        <p className="text-red-600">{fetchError}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(ellipse_at_top_right,#062428,#001219)] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-cyan-300">Case Editor</h1>
        
        {/* Hero Section Editor */}
        <section className="relative mb-8">
          <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
          
          {/* Title */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Title:</label>
            {editingField === "title" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={fieldValue}
                  onChange={handleFieldChange}
                  onBlur={saveField}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveField();
                    if (e.key === "Escape") stopEditing();
                  }}
                  className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  autoFocus
                />
                <button
                  onClick={saveField}
                  disabled={isSaving}
                  className="px-3 py-1 rounded-full transition-colors"
                  aria-label="Save"
                >
                  {isSaving ? (
                    <Save className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={stopEditing}
                  className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                  aria-label="Cancel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <p className="text-white/80">{caseData.title || "CryptoZen"}</p>
                <button
                  onClick={() => startEditing("title", caseData.title || "")}
                  className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                  aria-label="Edit title"
                >
                  <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                </button>
              </>
            )}
          </div>
          
          {/* Description */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Description:</label>
            {editingField === "description" ? (
              <div className="flex gap-2">
                <textarea
                  value={fieldValue}
                  onChange={handleFieldChange}
                  onBlur={saveField}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); saveField(); }
                    if (e.key === "Escape") stopEditing();
                  }}
                  className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  rows={3}
                  autoFocus
                />
                <button
                  onClick={saveField}
                  disabled={isSaving}
                  className="px-3 py-1 rounded-full transition-colors"
                  aria-label="Save"
                >
                  {isSaving ? (
                    <Save className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={stopEditing}
                  className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                  aria-label="Cancel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <p className="text-white/80">{caseData.description || "CryptoZen is a crypto education brand..."}</p>
                <button
                  onClick={() => startEditing("description", caseData.description || "")}
                  className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                  aria-label="Edit description"
                >
                  <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                </button>
              </>
            )}
          </div>
          
          {/* Tools */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Tools:</label>
            {editingField === "tools" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={fieldValue}
                  onChange={handleFieldChange}
                  onBlur={saveField}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveField();
                    if (e.key === "Escape") stopEditing();
                  }}
                  className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter tools as comma-separated values (e.g., Blender, Illustrator, Photoshop)"
                  autoFocus
                />
                <button
                  onClick={saveField}
                  disabled={isSaving}
                  className="px-3 py-1 rounded-full transition-colors"
                  aria-label="Save"
                >
                  {isSaving ? (
                    <Save className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={stopEditing}
                  className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                  aria-label="Cancel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap gap-2">
                  {(caseData.tools || []).map((tool, index) => (
                    <div key={index} className="flex h-10 items-center justify-center rounded-xl bg-white/10 px-3">
                      <span className="text-white/80 text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => startEditing("tools", (caseData.tools || []).map(t => t.name).join(", "))}
                  className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                  aria-label="Edit tools"
                >
                  <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                </button>
              </>
            )}
          </div>
          
          {/* Project Type */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Project Type:</label>
            {editingField === "projectType" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={fieldValue}
                  onChange={handleFieldChange}
                  onBlur={saveField}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveField();
                    if (e.key === "Escape") stopEditing();
                  }}
                  className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  autoFocus
                />
                <button
                  onClick={saveField}
                  disabled={isSaving}
                  className="px-3 py-1 rounded-full transition-colors"
                  aria-label="Save"
                >
                  {isSaving ? (
                    <Save className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={stopEditing}
                  className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                  aria-label="Cancel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <p className="text-white/80">{caseData.projectType || "Subscription"}</p>
                <button
                  onClick={() => startEditing("projectType", caseData.projectType || "")}
                  className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                  aria-label="Edit project type"
                >
                  <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                </button>
              </>
            )}
          </div>
          
          {/* Project Timeline */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Project Timeline:</label>
            {editingField === "projectTimeline" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={fieldValue}
                  onChange={handleFieldChange}
                  onBlur={saveField}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") saveField();
                    if (e.key === "Escape") stopEditing();
                  }}
                  className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  autoFocus
                />
                <button
                  onClick={saveField}
                  disabled={isSaving}
                  className="px-3 py-1 rounded-full transition-colors"
                  aria-label="Save"
                >
                  {isSaving ? (
                    <Save className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={stopEditing}
                  className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                  aria-label="Cancel"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <p className="text-white/80">{caseData.projectTimeline || "9 Months"}</p>
                <button
                  onClick={() => startEditing("projectTimeline", caseData.projectTimeline || "")}
                  className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                  aria-label="Edit project timeline"
                >
                  <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                </button>
              </>
            )}
          </div>
        </section>
        
        {/* Tabs Section Editor */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Tabs Sections</h2>
          {tabsData.length > 0 ? (
            tabsData.map((tab, index) => (
              <div key={tab.key} className="mb-6 p-4 border border-white/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{tab.label}</h3>
                
                {/* Tab Title */}
                <div className="mb-3 relative">
                  <label className="block text-sm font-medium mb-1">Title:</label>
                  {editingField === `tab-${index}-title` ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={fieldValue}
                        onChange={handleFieldChange}
                        onBlur={saveField}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveField();
                          if (e.key === "Escape") stopEditing();
                        }}
                        className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        autoFocus
                      />
                      <button
                        onClick={saveField}
                        disabled={isSaving}
                        className="px-3 py-1 rounded-full transition-colors"
                        aria-label="Save"
                      >
                        {isSaving ? (
                          <Save className="h-4 w-4 animate-spin" />
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={stopEditing}
                        className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                        aria-label="Cancel"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-white/80">{tab.title}</p>
                      <button
                        onClick={() => startEditing(`tab-${index}-title`, tab.title)}
                        className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                        aria-label="Edit title"
                      >
                        <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Tab Text/Description */}
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Description:</label>
                  {editingField === `tab-${index}-text` ? (
                    <div className="flex gap-2">
                      <textarea
                        value={fieldValue}
                        onChange={handleFieldChange}
                        onBlur={saveField}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); saveField(); }
                          if (e.key === "Escape") stopEditing();
                        }}
                        className="p-2 border border-white/30 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        rows={3}
                        autoFocus
                      />
                      <button
                        onClick={saveField}
                        disabled={isSaving}
                        className="px-3 py-1 rounded-full transition-colors"
                        aria-label="Save"
                      >
                        {isSaving ? (
                          <Save className="h-4 w-4 animate-spin" />
                        ) : (
                          <Save className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        onClick={stopEditing}
                        className="px-3 py-1 rounded-full text-white/60 hover:text-white transition-colors"
                        aria-label="Cancel"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-white/80">{tab.text}</p>
                      <button
                        onClick={() => startEditing(`tab-${index}-text`, tab.text)}
                        className="absolute top-0 right-0 text-white/60 hover:text-white transition-colors"
                        aria-label="Edit description"
                      >
                        <Edit2 className="h-4 w-4 hover:h-5 hover:w-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-white/80">No tab data available</p>
          )}
        </section>
        
        {/* Save Status */}
        {saveError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
            <h3 className="text-red-800">Save Error:</h3>
            <p className="text-red-600">{saveError}</p>
          </div>
        )}
        
        {/* Success message could go here */}
      </div>
    </div>
  );
}