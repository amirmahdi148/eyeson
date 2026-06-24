import { type Variants, motion } from "framer-motion";

const gradientsEntry: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};
const fadeInFromUp: Variants = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 1,
        },
    },
};
const fadeInFromDown: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 1,
        },
    },
};

export const Hero = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center">

            <div
                className="flex flex-col items-center justify-center bg-[#000E17] relative z-5 mb-10 min-h-screen"
                style={{
                    backgroundImage: "url('/About/AU-Hero-Back.svg')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    WebkitMaskImage:
                        "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
                    maskImage:
                        "linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%)",
                }}
            >
                <motion.div
                    variants={gradientsEntry}
                    initial="hidden"
                    animate="visible"
                    className="absolute z-1 -left-1 pointer-events-none w-60  h-180 bg-linear-to-b from-[#46B6A080] to-[#00374180] blur-[300px]"
                />
                <div className="flex items-center justify-center text-center flex-col w-195 gap-10 z-4">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <motion.h4 variants={fadeInFromUp} initial="hidden" animate="visible">
                            About us
                        </motion.h4>
                        <motion.h3
                            variants={fadeInFromUp}
                            initial="hidden"
                            animate="visible"
                            className=" font-bold text-xl sm:text-4xl w-75 sm:w-200 text-white "
                        >
                            <span className="text-[#38B6B3] ">EyesOn Studio</span> is a creative studio helping brands communicate through motion, design,
                            video, and visual storytelling.
                        </motion.h3>
                        <motion.h5
                            variants={fadeInFromDown}
                            initial="hidden"
                            animate="visible"
                            className="w-75 sm:w-200 text-white"
                        >
                            Our team brings together editors, motion designers, graphic designers, UI/UX designers,
                            and creative strategists working across different countries, with primary hubs in <b>Tbilisi</b> and {' '}
                             <b>Dubai</b>.
                            From product launches and SaaS explainers to brand identities and social content, we help
                            brands turn ideas into visual experiences people remember.
                        </motion.h5>
                    </div>
                    <motion.div
                        variants={fadeInFromDown}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="flex gap-10">

                            <button className="border-3 outline-0 border-[#00A9BD] text-white rounded-[36px] py-2 px-4 sm:py-4 sm:px-14 bg-linear-to-r from-[#00A9BD] to-[#1D553A] cursor-pointer shadow-[0px_2px_25px_#00A9BD] text-sm sm:text-xl  font-bold ">
                                Book a Call
                            </button>

                            <button className="border-3 outline-0 border-[#00A9BD] text-white rounded-[36px] py-4 px-4 bg-black sm:py-4 sm:px-14  cursor-pointer shadow-[0px_2px_25px_#00A9BD] text-sm sm:text-xl font-bold">
                                Explore Our Work
                            </button>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={gradientsEntry}
                    initial="hidden"
                    animate="visible"
                    className="absolute right-1  pointer-events-none w-60  h-180 bg-linear-to-b from-[#46B6A080] to-[#00374180] blur-[300px]"
                />
            </div>

        </div>
    );
};
