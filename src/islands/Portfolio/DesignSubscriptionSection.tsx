export const DesignSubscriptionSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-3xl  p-5 backdrop-blur-sm md:grid-cols-2 md:gap-12 md:p-10">
        <div className="order-2 md:order-1">
          <img
            src="/video-pieces/person.png"
            alt="Design subscription workspace preview"
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl   object-cover "
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
            A design subscription gives you ongoing access to a dedicated creative team for a simple monthly fee.<br/>  Instead of hiring in-house or coordinating multiple freelancers, you work with one team that handles your design, motion, and visual needs as they arise.
            You can request new work, revisions, or iterations at any time within your plan.  This makes it easy to scale output, stay consistent, and keep your brand visuals moving without long contracts or overhead.<br/>
            It’s a practical way to support continuous growth, evolving campaigns, and fast-moving teams without slowing down.
          </p>

        </div>
      </div>
    </section>
  );
};
