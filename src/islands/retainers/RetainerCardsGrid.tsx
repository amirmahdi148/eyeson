"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Clapperboard,
  Package,
  Megaphone,
  Palette,
  Rocket,
  Wand2,
  Repeat,
  LayoutGrid,
  Zap,
  BadgeCheck,
  CalendarClock,
  TrendingUp,
  FlaskConical,
  Users,
  Lightbulb,
  PenLine,
  LayoutPanelTop,
  Scissors,
  MonitorPlay,
  AudioWaveform,
  Copy,
  PackageCheck,
  Cloud,
  Sprout,
  Target,
  Briefcase,
  ShoppingCart,
  Building2,
  Eye,
  MousePointerClick,
  GraduationCap,
  Compass,
  Layers,
  HeartHandshake,
  SlidersHorizontal,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

type RetainerCard = {
  id: number;
  title: string;
  description: string;
};

type RetainerCardsGridProps = {
  eyebrow?: string;
  beforeTitle?: string;
  highlight?: string;
  afterTitle?: string;
  intro?: string;
  cards: RetainerCard[];
};

const iconMap: { keywords: string[]; icon: LucideIcon }[] = [
  { keywords: ["short-form", "video", "film"], icon: Clapperboard },
  { keywords: ["product video", "product content"], icon: Package },
  { keywords: ["ad creatives", "paid"], icon: Megaphone },
  { keywords: ["brand content", "brand story"], icon: Palette },
  { keywords: ["launch"], icon: Rocket },
  { keywords: ["motion graphic", "motion design", "motion"], icon: Wand2 },
  { keywords: ["repurpos", "adaptation", "reuse"], icon: Repeat },
  { keywords: ["static", "graphic"], icon: LayoutGrid },
  { keywords: ["faster", "speed"], icon: Zap },
  { keywords: ["consistent quality", "consistent"], icon: BadgeCheck },
  { keywords: ["predictable", "calendar"], icon: CalendarClock },
  { keywords: ["better over time", "growth", "scale"], icon: TrendingUp },
  { keywords: ["creative testing", "test", "experiment"], icon: FlaskConical },
  { keywords: ["less management", "management", "team"], icon: Users },
  { keywords: ["strategy", "concepts", "concept"], icon: Lightbulb },
  { keywords: ["script"], icon: PenLine },
  { keywords: ["storyboard"], icon: LayoutPanelTop },
  { keywords: ["editing", "edit"], icon: Scissors },
  { keywords: ["ui animation", "ui"], icon: MonitorPlay },
  { keywords: ["sound"], icon: AudioWaveform },
  { keywords: ["variation"], icon: Copy },
  { keywords: ["final delivery", "delivery"], icon: PackageCheck },
  { keywords: ["saas", "ai"], icon: Cloud },
  { keywords: ["startup"], icon: Sprout },
  { keywords: ["marketing team", "marketing"], icon: Target },
  { keywords: ["agenc"], icon: Briefcase },
  { keywords: ["ecommerce", "consumer", "commerce"], icon: ShoppingCart },
  { keywords: ["established", "brand"], icon: Building2 },
  { keywords: ["attention", "awareness"], icon: Eye },
  { keywords: ["acquisition"], icon: MousePointerClick },
  { keywords: ["education"], icon: GraduationCap },
  { keywords: ["conversion"], icon: TrendingUp },
  { keywords: ["retention"], icon: Repeat },
  { keywords: ["direction"], icon: Compass },
  { keywords: ["multi-disciplinary", "multi"], icon: Layers },
  { keywords: ["familiarity", "relationship"], icon: HeartHandshake },
  { keywords: ["flexible"], icon: SlidersHorizontal },
  { keywords: ["communication", "message"], icon: MessageSquare },
];

const DEFAULT_ICON: LucideIcon = ArrowUpRight;

function iconForTitle(title: string): LucideIcon {
  const normalized = title.toLowerCase();
  const match = iconMap.find(({ keywords }) =>
    keywords.some((keyword) => normalized.includes(keyword)),
  );
  return match?.icon ?? DEFAULT_ICON;
}

export default function RetainerCardsGrid({
  eyebrow = "",
  beforeTitle = "",
  highlight = "",
  afterTitle = "",
  intro = "",
  cards = [],
}: RetainerCardsGridProps) {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1ed7d8]/30 bg-[#1ed7d8]/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#35e4d8]">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[44px]">
            {beforeTitle}
            {highlight ? (
              <>
                <br />
                <span className="bg-linear-to-r from-[#35e4d8] to-[#00A9BD] bg-clip-text text-transparent">
                  {highlight}
                </span>
              </>
            ) : null}
            {afterTitle ? <> {afterTitle}</> : null}
          </h2>
          {intro ? (
            <p className="mt-5 text-sm leading-7 text-[#c3d4de] md:text-base md:leading-8">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = iconForTitle(card.title);

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0A1D29]/60 p-7 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-[#1ed7d8]/40 hover:shadow-[0_20px_60px_-20px_rgba(35,216,220,0.25)]"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(circle_at_top_right,rgba(35,216,220,0.12),transparent_60%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#1ed7d8]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1ed7d8]/25 bg-linear-to-br from-[#1ed7d8]/15 to-transparent text-[#35e4d8] shadow-[inset_0_0_12px_rgba(35,216,220,0.08)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#c4d6df]">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
