import {useState} from "react"
type Props = {
    firstFieldTitle: string
    firstFieldItems: string[]
    secondFieldTitle: string
    secondFieldItems: string[]
    thirdFieldTitle: string
    thirdFieldItems: string[]
    fourthFieldTitle: string
    fourthFieldItems: string[]
    durationTitle: string
    initialDuration?: number
}
export const ShortForm = ({
                              firstFieldTitle,
                              firstFieldItems,
                              secondFieldTitle,
                              secondFieldItems,
                              thirdFieldTitle,
                              thirdFieldItems,
                              fourthFieldTitle,
                              fourthFieldItems,
                              durationTitle,
                              initialDuration = 60
                          }: Props) => {
    const [duration, setDuration] = useState(initialDuration)
    const formatter = new Intl.NumberFormat("en-US")


    return (
        <div className="w-full max-w-5xl rounded-[26px] border border-[#175361] bg-[#0C232B]/90 px-8 py-7 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center">
                <SelectField title={firstFieldTitle} items={firstFieldItems}/>
                <SelectField title={secondFieldTitle} items={secondFieldItems}/>
                <SelectField title={thirdFieldTitle} items={thirdFieldItems}/>
                <SelectField title={fourthFieldTitle} items={fourthFieldItems}/>
            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:max-w-[70%]">
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#D9E6ED]">
                        <span>{durationTitle}</span>
                        <span className="text-[#5C7C88]">(seconds)</span>
                    </div>
                    <input
                        type="range"
                        min={5}
                        max={120}
                        value={duration}
                        onChange={(event) => setDuration(Number(event.target.value))}
                        onWheel={(event) => {
                            ;(event.currentTarget as HTMLInputElement).blur()
                        }}
                        className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-[#122b35]"
                        style={{
                            background: `linear-gradient(90deg, #1AD1BC ${((duration - 5) / 115) * 100}%, #16353F ${((duration - 5) / 115) * 100}%)`
                        }}
                    />
                    <div className="mt-2 inline-flex rounded-md bg-[#0F2D37] px-3 py-1 text-xs font-medium text-[#A9C1CB] shadow-inner shadow-[#0a1f26]">
                        {formatter.format(duration)} seconds
                    </div>
                </div>
                <button className="h-11 w-full rounded-lg bg-linear-to-r from-[#1AD1BC] to-[#0989A5] px-6 text-sm font-semibold text-white shadow-[0_10px_25px_-12px_rgba(26,209,188,0.8)] transition hover:brightness-110 md:w-auto">
                    Estimate Your Project
                </button>
            </div>

            <style>{`
                input[type='range']::-webkit-slider-thumb {
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    background: #5acfb3;
                    border-radius: 999px;
                    border: 2px solid #0f2d37;
                    margin-top: 0;
                    box-shadow: 0 0 0 4px rgba(90, 207, 179, 0.2);
                }
                input[type='range']::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    background: #5acfb3;
                    border-radius: 999px;
                    border: 2px solid #0f2d37;
                    box-shadow: 0 0 0 4px rgba(90, 207, 179, 0.2);
                }
            `}</style>
        </div>
    )
}

type SelectFieldProps = {
    title: string
    items: string[]
}

const SelectField = ({title, items}: SelectFieldProps) => (
    <div className="flex flex-col gap-2 text-white">
        <p className="text-sm font-semibold text-[#D9E6ED]">{title}</p>
        <select
            onWheel={(event) => {
                ;(event.currentTarget as HTMLSelectElement).blur()
            }}
            className="h-11 rounded-lg border border-[#1A4C59] bg-[#0F2D37] px-3 text-sm font-medium text-[#D9E6ED] shadow-inner shadow-[#0a1f26] outline-none transition focus:border-[#2AB0A2] focus:shadow-[0_0_0_3px_rgba(42,176,162,0.2)]"
        >
            {items.map((item, idx) => (
                <option key={idx}>{item}</option>
            ))}
        </select>
    </div>
)
