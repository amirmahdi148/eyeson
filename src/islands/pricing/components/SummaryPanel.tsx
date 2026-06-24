type SummaryLine = {
    title: string
    value: string
    price: number
}

type Props = {
    packageName: string
    lines: SummaryLine[]
    total: number
    duration?: number
    durationTitle?: string
    deliveryHint?: string
    onEdit?: () => void
}

export const SummaryPanel = ({ packageName, lines, total, duration, durationTitle, deliveryHint, onEdit }: Props) => {
    const formatter = new Intl.NumberFormat("en-US")
    const pricedLines = lines.filter(l => l.price > 0)

    return (
        <div className="w-full max-w-[1220px] mx-auto px-4 sm:px-6">
            <div className="rounded-[28px] bg-[#061B22] px-5 py-5 sm:px-7 sm:py-7 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
                <h2 className="text-center text-3xl sm:text-4xl font-black tracking-tight text-white">
                    <span className="text-[#1AD1BC]">Project</span> Summary &amp; Estimate
                </h2>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
                    <div className="rounded-[24px] border border-[#1A8F9E] bg-[#102936] px-6 py-6 sm:px-7 sm:py-7">
                        <h3 className="text-xl sm:text-[22px] font-light text-white">
                            Your Selected Package :{" "}
                            <span className="text-[#D9E6ED]">{packageName}</span>
                        </h3>

                        <p className="mt-8 text-lg sm:text-xl font-medium text-[#1AD1BC]">
                            Included in Your Selection
                        </p>

                        <div className="mt-4 space-y-6">
                            {lines.map((line, i) => (
                                <p key={i} className="text-lg sm:text-[21px] leading-[1.45] text-[#D1DEE5]">
                                    <span className="font-semibold text-white">{line.title}:</span>{" "}
                                    <span className="font-light">{line.value}</span>
                                </p>
                            ))}
                            {duration != null && durationTitle && (
                                <p className="text-lg sm:text-[21px] leading-[1.45] text-[#D1DEE5]">
                                    <span className="font-semibold text-white">{durationTitle}:</span>{" "}
                                    <span className="font-light">{formatter.format(duration)} seconds</span>
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-[24px] border border-[#15B8C9] bg-[linear-gradient(180deg,rgba(7,72,82,0.96)_0%,rgba(5,41,49,0.98)_100%)] px-6 py-6 sm:px-7 sm:py-7">
                        <p className="text-base sm:text-lg font-medium text-[#18AFC2]">
                            Estimated Investment
                        </p>

                        <div className="mt-9 space-y-6">
                            {pricedLines.map((line, i) => (
                                <div key={i} className="text-lg sm:text-[22px] leading-[1.45] text-white">
                                    <span className="font-light">{line.title}:</span>{" "}
                                    <span className="font-black">${formatter.format(line.price)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#16606C] to-transparent" />

                        <div className="rounded-2xl border border-[#15B8C9] bg-[#0E2D37] px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between gap-4">
                            <span className="text-base sm:text-[19px] font-medium text-[#F4FBFD]">
                                Total Estimated Cost:
                            </span>
                            <span className="text-2xl sm:text-[28px] font-black text-white">
                                ${formatter.format(total)}
                            </span>
                        </div>

                    {deliveryHint && (
                        <p className="mt-4 text-sm sm:text-[15px] text-[#9AB1BB]">
                            ({deliveryHint})
                        </p>
                    )}
                </div>
            </div>

            {onEdit && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={onEdit}
                        className="h-11 rounded-lg border border-[#15B8C9] bg-transparent px-8 text-sm font-semibold text-[#15B8C9] transition hover:bg-[#15B8C9] hover:text-[#0B1F2A]"
                    >
                        Edit Selection
                    </button>
                </div>
            )}
            </div>
        </div>
    )
}
