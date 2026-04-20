


import {RealBlogs} from "./RealBlogs.tsx";
import StarBackground from "../StarBackground.tsx";

export const MainBlogs  = () => {

    return(
        <div className="relative min-h-screen w-full overflow-x-hidden">
            {/* Mobile-only hero background image */}

            <StarBackground/>

            <div className="relative z-10 mx-auto flex min-h-200 max-w-screen flex-col items-center justify-center px-3 py-10 text-center">

                <p className="text-[10px] font-thin uppercase tracking-[0.22em] text-white">Our thoughts, compiled</p>
                <h1 className="mt-2 text-2xl font-semibold sm:text-[40px] text-white">
                    Less Noise More Insight
                    <span className="mt-1 block bg-linear-to-r from-[#46B6A0] to-[#2EBACA] bg-clip-text text-lg font-bold text-transparent sm:text-3xl">
                        Blog & Articles
                    </span>
                </h1>
                <p className="mt-2 max-w-xl text-xs leading-5 sm:text-[13px] text-white tracking-[0.06em] ">
                    Stories, strategies, and experiments from inside the agency. Built to inspire better decisions,
                    not waste your time.
                </p>
                <div className="mt-5 flex w-full max-w-2xl flex-row flex-nowrap gap-2 sm:flex-row sm:gap-3">
                    <div className="flex h-14 w-full items-center gap-2 rounded-[10px]  bg-white/5 px-3 py-2">
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5 opacity-100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="M20 20l-3.5-3.5" />
                        </svg>
                        <input
                            className="w-full bg-transparent text-[12px] outline-none placeholder:text-white/80 text-white "
                            placeholder="Search ideas, not keywords..."
                            type="text"
                        />
                    </div>
                    <button className="shrink-0 h-14 min-w-40 text-white rounded-[10px] cursor-pointer  px-3 py-2 text-sm font-semibold bg-linear-to-r from-[#46B6A0] to-[#00A9BD]">
                        Discover articles
                    </button>
                </div>
            </div>
            <hr className="w-full bg-linear-to-r from-[#00222600] via-[#00A9BD] to-[#00222600] h-1 block sm:hidden" />

            <RealBlogs />
        </div>
    )
}
