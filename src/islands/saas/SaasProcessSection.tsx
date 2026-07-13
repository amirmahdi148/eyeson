import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive into your product, audience, and goals to find the story that matters most.",
    image: "/pricing/svg/process/1.svg",
  },
  {
    number: "02",
    title: "Concept",
    description: "We shape a clear creative direction with visual references, storyboards, and messaging.",
    image: "/pricing/svg/process/2.svg",
  },
  {
    number: "03",
    title: "Produce",
    description: "We create polished assets — from explainer videos to campaign creatives — ready for every channel.",
    image: "/pricing/svg/process/3.svg",
  },
  {
    number: "04",
    title: "Deliver",
    description: "We hand off final files optimized for web, social, ads, and your internal platforms.",
    image: "/pricing/svg/process/4.svg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const SaasProcessSection = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:py-20 sm:px-6 lg:py-28 lg:px-16 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#42D1D1] uppercase">
            HOW WE WORK
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            A focused process for faster launches.
          </h2>
        </div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={stepVariants}
              className="group min-w-0 rounded-2xl border border-white/10 bg-[#071925]/70 p-6 transition hover:border-[#42D1D1]/40"
            >
              <img
                src={step.image}
                alt=""
                aria-hidden="true"
                className="mb-8 h-16 w-16 object-contain"
                loading="lazy"
              />
              <p className="text-sm font-semibold text-[#42D1D1]">{step.number}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};
