const formatter = new Intl.NumberFormat("en-US")

type Package = {
    title: string
    price: number
    includes: string[]
}

type Props = {
    packages: Package[]
}

export const PackageCards = ({ packages }: Props) => (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((pkg, idx) => {
            const isMiddle = idx === 1
            return (
                <div
                    key={idx}
                    className={`relative rounded-[26px] border px-7 py-8 flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ${
                        isMiddle
                            ? "border-[#1AD1BC] bg-[#0F2D37] shadow-[0_0_30px_-10px_rgba(26,209,188,0.25)]"
                            : "border-[#175361] bg-[#0C232B]/90 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.55)] backdrop-blur-md"
                    }`}
                >
                    {isMiddle && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#1AD1BC] px-5 py-1 text-xs font-bold uppercase tracking-wider text-[#0B1F2A]">
                            Most Popular
                        </div>
                    )}

                    <div className="flex flex-col items-start">
                        <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-sm font-medium text-[#A9C1CB]">Starting at</span>
                            <span className="text-4xl font-black text-[#1AD1BC]">
                                ${formatter.format(pkg.price)}
                            </span>
                        </div>
                    </div>

                    <hr className="my-6 border-[#175361]" />

                    <p className="text-xs font-semibold uppercase tracking-widest text-[#6A9BA8] mb-4">
                        What's Included
                    </p>

                    <ul className="flex flex-col gap-3 text-sm text-[#C8DCE6] flex-1">
                        {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <svg
                                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1AD1BC]"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="3 8 6 11 13 4" />
                                </svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        })}
    </div>
)
