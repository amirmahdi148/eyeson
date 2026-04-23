type Portfolio = {
    title: string;
    key: PortfolioKey;
};
type PortfolioKey = "Video" | "Animation" | "Industries";
const Portfolios: Portfolio[] = [
    {
        title: "Video types",
        key: "Video",
    },
    {
        title: "Animation Style",
        key: "Animation",
    },
    {
        title: "Industries",
        key: "Industries",
    },
];

type Props = {
    type : PortfolioKey,
    SetType : (next: PortfolioKey) => void,
}
export const Tabs = ({type , SetType} : Props) => {
    return (
        <>

            <div className="relative flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font-medium text-white sm:text-lg">




                {Portfolios.map((port, i) => (
                    <button
                        key={i}
                        onClick={() => SetType(port.key)}
                        className="relative cursor-pointer pb-2"
                    >
                        {port.title}

                        <span
                            className={`absolute left-0 bottom-0 h-0.5 w-full bg-linear-to-r from-transparent via-teal-400 to-transparent
                                                  transition-transform duration-300 ease-out  origin-center
                                                  ${type === port.key ? "scale-x-100" : "scale-x-0"}
                                             `}
                        />
                    </button>
                ))}


                <div className="absolute bottom-0 left-0 hidden h-0.5 w-full bg-white/20 md:block" />
            </div>

        </>
    )
}
