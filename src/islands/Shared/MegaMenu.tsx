import { useState, useEffect, useRef } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICE_GROUPS = [
    {
        title: "Content Services",
        description: "Production systems for brands that need consistent content output.",
        items: [
            { title: "Content Production", description: "Tailored content creation aligned with your brand voice and goals.", image: "/home/service-section.png", accent: "#17d6d4" },
            { title: "Short-Form Content", description: "Fast-turn edits built for TikTok, Reels, and YouTube Shorts.", image: "/videoEditing.png", accent: "#4bc7ff" },
            { title: "Video Editing", description: "Clean, modern edits focused on retention and engagement.", image: "/animation-section/video.jpg", accent: "#7ee6ff" },
            { title: "Ad Creatives", description: "Conversion-focused creatives for paid social campaigns.", image: "/video-pieces/Featured-One.png", accent: "#66f2c5" },
            { title: "Monthly Retainers", description: "A steady content plan with production and delivery built in.", image: "/home/frame-special.png", accent: "#ffd56a" },
        ],
        href: "/video",
    },
    {
        title: "Creative & Motion Services",
        description: "Motion-first storytelling and animation work.",
        items: [
            { title: "Motion Design", description: "Advanced motion systems and visual effects.", image: "/motion.jpg", accent: "#8eefff" },
            { title: "2D/3D Animation", description: "High-end animation work for brands.", image: "/animation.jpg", accent: "#5ee8ff" },
        ],
        href: "/animation",
    },
    {
        title: "Design Services",
        description: "Brand and digital systems built for clarity.",
        items: [
            { title: "UI/UX Design", description: "Clean interface systems built for clarity.", image: "/ui.jpg", accent: "#ffd56a" },
            { title: "Brand Identity", description: "Full branding systems from scratch.", image: "/brand.jpg", accent: "#ffee99" },
        ],
        href: "/branding",
    },
];

const MENU_ITEMS = [
    { id: "1", title: "Home", path: "/" },
    { id: "2", title: "Portfolio", path: "/portfolio" },
    { id: "3", title: "Pricing", path: "/pricing" },
    { id: "4", title: "About", path: "/about" },
    { id: "5", title: "Contact", path: "/contact" },
];

// ─── Desktop Mega Menu ────────────────────────────────────────────────────────

export const MegaMenu = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="w-[min(1060px,calc(100vw-2rem))] rounded-[34px] border border-[#2bb7c2]/35 bg-[#081721]/96 p-3 shadow-[0_0_40px_rgba(25,189,202,0.24)] backdrop-blur-xl">
            <div className="grid gap-4 lg:grid-cols-[290px_minmax(0,1fr)]">

                {/* LEFT — Service Groups */}
                <aside className="rounded-[28px] border border-[#2bb7c2]/20 bg-[#071520] p-5">
                    <p className="text-sm text-white/45">Our Services</p>
                    <div className="mt-6 space-y-2">
                        {SERVICE_GROUPS.map((group, index) => (
                            <button
                                key={group.title}
                                onMouseEnter={() => setActive(index)}
                                className={`w-full rounded-[20px] px-4 py-4 text-left transition ${
                                    active === index
                                        ? "bg-[#0a2b31] text-[#22d7de] shadow-[inset_0_0_0_1px_rgba(42,215,222,0.45)]"
                                        : "text-white hover:bg-white/5"
                                }`}
                            >
                                <div className="text-[22px] font-semibold leading-tight">{group.title}</div>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* RIGHT — Service Cards */}
                <section className="rounded-[28px] bg-[#06141d] p-3">
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                        {SERVICE_GROUPS[active].items.map((card) => (
                            <a
                                key={card.title}
                                href={SERVICE_GROUPS[active].href}
                                className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition hover:border-white/10 hover:bg-white/5"
                            >
                                <div
                                    className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#04131b]"
                                    style={{ boxShadow: `0 0 0 1px ${card.accent}22` }}
                                >
                                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-base font-semibold text-white transition group-hover:text-[#e9ffff]">{card.title}</h3>
                                    <p className="mt-1 text-[11px] leading-4 text-white/55">{card.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

// ─── Mobile: Single Service Group Accordion ───────────────────────────────────

interface MobileServiceGroupProps {
    group: (typeof SERVICE_GROUPS)[number];
    onClose: () => void;
}

const MobileServiceGroup = ({ group, onClose }: MobileServiceGroupProps) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    // Measure real height for smooth animation
    useEffect(() => {
        if (contentRef.current) {
            setHeight(open ? contentRef.current.scrollHeight : 0);
        }
    }, [open]);

    return (
        <div
            className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                open
                    ? "border-[#2bd6de]/25 bg-[#071e2b]"
                    : "border-white/[0.07] bg-white/[0.03]"
            }`}
        >
            {/* Group Header */}
            <button
                onClick={() => setOpen((p) => !p)}
                className="flex w-full items-center justify-between px-4 py-3.5 text-left"
            >
                <div className="flex items-center gap-3">
                    <span
                        className="h-2 w-2 rounded-full shrink-0"
                        style={{
                            background: group.items[0].accent,
                            boxShadow: `0 0 8px ${group.items[0].accent}`,
                        }}
                    />
                    <span className="text-[15px] font-semibold text-white">{group.title}</span>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href={group.href}
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="text-[11px] text-[#86f5ff]/50 hover:text-[#86f5ff] transition"
                    >
                        View all ↗
                    </a>
                    <span
                        className={`text-[10px] text-[#86f5ff] transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                        }`}
                    >
                        ▾
                    </span>
                </div>
            </button>

            {/* Animated Cube Cards */}
            <div
                style={{ maxHeight: `${height}px`, opacity: open ? 1 : 0 }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div ref={contentRef} className="px-3 pb-3">
                    <div className="grid grid-cols-3 gap-2">
                        {group.items.map((card) => (
                            <a
                                key={card.title}
                                href={group.href}
                                onClick={onClose}
                                className="group flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.06] bg-[#04131b] p-2 text-center transition hover:border-[#2bd6de]/30 hover:bg-[#071f2b]"
                            >
                                {/* Image Cube */}
                                <div
                                    className="h-10 w-10 rounded-xl overflow-hidden border border-white/10 shrink-0"
                                    style={{ boxShadow: `0 0 0 1px ${card.accent}33, 0 0 12px ${card.accent}22` }}
                                >
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                {/* Label */}
                                <p className="text-[10px] leading-tight text-white/60 group-hover:text-white/90 transition line-clamp-2">
                                    {card.title}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─── Mobile Menu Panel ────────────────────────────────────────────────────────

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    useEffect(() => {
        if (!open) setServicesOpen(false);
    }, [open]);

    return (
        <div
            className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
                open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/55" onClick={onClose} />

            {/* Slide-in Panel */}
            <div
                className={`absolute right-0 top-0 h-screen w-[92%] max-w-[380px] border-l border-[#3AAFC8]/25 bg-[#020915] backdrop-blur-xl transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex h-full flex-col px-4 pb-5 pt-6 overflow-y-auto">

                    {/* Header */}
                    <div className="mb-8 flex items-center justify-between">
                        <a href="/" onClick={onClose}>
                            <img src="/logo.png" className="h-10 object-contain" alt="EyesOn logo" />
                        </a>
                        <button
                            onClick={onClose}
                            className="h-10 w-10 rounded-full border border-[#3AAFC8]/40 bg-[#071D29] text-[#45D4E8] text-2xl leading-none flex items-center justify-center"
                        >
                            ×
                        </button>
                    </div>

                    {/* Nav */}
                    <div className="space-y-2">

                        {/* Services top-level toggle */}
                        <button
                            onClick={() => setServicesOpen((p) => !p)}
                            className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                                servicesOpen
                                    ? "border-[#2bd6de]/35 bg-[#0a2330] text-white"
                                    : "border-white/[0.08] bg-white/[0.04] text-white hover:border-[#2bd6de]/20 hover:bg-[#0a2330]"
                            }`}
                        >
                            <span className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-[#2bd6de] shadow-[0_0_10px_rgba(43,214,222,0.7)]" />
                                <span className="text-[15px] font-semibold">Services</span>
                            </span>
                            <span
                                className={`text-xs text-[#86f5ff] transition-transform duration-300 ${
                                    servicesOpen ? "rotate-180" : ""
                                }`}
                            >
                                ▾
                            </span>
                        </button>

                        {/* Services accordion — each group expands independently */}
                        {servicesOpen && (
                            <div className="rounded-3xl border border-[#2bb7c2]/[0.18] bg-[#06141d]/90 p-2.5 shadow-[0_0_30px_rgba(25,189,202,0.16)] space-y-2">
                                <p className="px-2 pt-1 pb-1.5 text-[10px] uppercase tracking-[0.25em] text-white/30">
                                    Our Services
                                </p>
                                {SERVICE_GROUPS.map((group) => (
                                    <MobileServiceGroup
                                        key={group.title}
                                        group={group}
                                        onClose={onClose}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Divider */}
                        <div className="h-px bg-white/[0.06] mx-1" />

                        {/* Regular nav items */}
                        {MENU_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href={item.path}
                                onClick={onClose}
                                className="block rounded-2xl px-4 py-3 text-[15px] font-semibold text-white/75 transition hover:bg-white/[0.04] hover:text-white"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                        <button className="rounded-full border border-[#3AAFC8]/45 bg-[#041827] px-3 py-3 text-sm font-semibold text-white">
                            Book a call
                        </button>
                        <button className="rounded-full bg-gradient-to-r from-[#00A9BD] to-[#1D553A] px-3 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,169,189,0.35)]">
                            Get free sample
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

// ─── Full Header ──────────────────────────────────────────────────────────────

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className="fixed z-50 w-full top-0">
                <div className="relative px-4 sm:px-6 lg:px-10 max-sm:py-1.5 sm:py-2 lg:py-5">

                    {/* Scroll background */}
                    <div
                        className={`pointer-events-none absolute inset-x-0 top-0 h-full transition-all duration-300 ${
                            scrolled ? "bg-[#061520]/85 backdrop-blur-xl" : ""
                        }`}
                    />

                    {/* Desktop Header */}
                    <div className="relative mx-auto max-w-[1200px] hidden lg:flex items-center justify-between gap-3">
                        <a href="/" className="relative z-50">
                            <img src="/logo.png" className="h-12 sm:h-14 lg:h-18 object-contain" alt="EyesOn logo" />
                        </a>

                        <nav className="hidden lg:flex items-center gap-7">
                            <div className="group relative">
                                <a href="/video#services" className="text-white/90 hover:text-white transition inline-flex items-center gap-1">
                                    Services
                                    <span className="text-xs transition-transform duration-200 group-hover:translate-y-0.5">▾</span>
                                </a>
                                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(1060px,calc(100vw-2rem))] -translate-x-1/2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                                    <div className="h-4 w-full" aria-hidden="true" />
                                    <MegaMenu />
                                </div>
                            </div>
                            {MENU_ITEMS.map((item) => (
                                <a key={item.id} href={item.path} className="text-white/90 hover:text-white transition">
                                    {item.title}
                                </a>
                            ))}
                        </nav>

                        <button className="hidden lg:block px-8 py-3 rounded-full text-white font-semibold bg-[#0B1F2A] border border-cyan-300/70 shadow-[0_0_50px_rgba(45,220,255,0.35)]">
                            Book a Call
                        </button>
                    </div>

                    {/* Mobile / Compact Header */}
                    <div className="relative mx-auto max-w-[1200px] flex lg:hidden items-center justify-between rounded-full border border-[#3AAFC8]/35 bg-[#03111C]/90 px-4 py-3 shadow-[0_0_28px_rgba(18,172,181,0.2)] backdrop-blur-xl sm:px-6">
                        <a href="/" className="relative z-50">
                            <img src="/logo.png" className="h-10 sm:h-11 object-contain" alt="EyesOn logo" />
                        </a>
                        <button className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#00A9BD] to-[#1D553A] shadow-[0_0_22px_rgba(0,169,189,0.45)] sm:px-7 sm:py-2.5">
                            Get free sample
                        </button>
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="h-10 w-10 rounded-full border border-[#3AAFC8]/40 bg-[#07202B] flex flex-col justify-center items-center gap-1.5"
                            aria-label="Open menu"
                        >
                            <span className="w-4 h-0.5 bg-[#45D4E8]" />
                            <span className="w-5 h-0.5 bg-[#45D4E8]" />
                            <span className="w-4 h-0.5 bg-[#45D4E8]" />
                        </button>
                    </div>

                </div>
            </header>

            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
};

export default Header;