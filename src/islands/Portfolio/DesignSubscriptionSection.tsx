export const DesignSubscriptionSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-3xl border border-[#00A9BD]/20 bg-[#041522]/60 p-5 backdrop-blur-sm md:grid-cols-2 md:gap-12 md:p-10">
        <div className="order-2 md:order-1">
          <img
            src="/portfolio/design-subscription/main-visual.png"
            alt="Design subscription workspace preview"
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl border border-white/10 object-cover shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          />
        </div>

        <div className="order-1 space-y-4 text-left md:order-2">
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            What is a{" "}
            <span className="bg-linear-to-r from-[#46B6A0] to-[#2EBACA] bg-clip-text text-transparent">
              design subscription
            </span>{" "}
            service?
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            A design subscription gives your team ongoing access to a dedicated
            creative team for a simple monthly fee. Instead of hiring in-house or
            coordinating multiple freelancers, you work with one team that handles
            design, motion, and visual needs as they arise.
          </p>
          <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            You can request new revisions, or iterations at any time within your
            plan. This makes it easy to scale output, stay consistent, and keep your
            brand visuals moving without long contracts or overhead.
          </p>
          <p className="max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            It&apos;s a practical way to support continuous growth, evolving campaigns,
            and fast-moving teams without slowing down.
          </p>
        </div>
      </div>
    </section>
  );
};
