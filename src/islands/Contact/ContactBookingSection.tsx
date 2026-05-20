import { useState } from "react";
import { DayPicker } from "react-day-picker";

const durations = ["15 min", "30 min", "1 hour"];
const timeSlots = ["4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm"];
const budgetRanges = ["< $10k", "$10k - $25k", "$25k - $50k", "$50k +"];

export const ContactBookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDuration, setSelectedDuration] = useState("15 min");
  const [selectedTime, setSelectedTime] = useState("4:00 pm");
  const [selectedBudget, setSelectedBudget] = useState("< $10k");

  return (
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 font-sans tracking-tight">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1DAFD3]" />
            Contact
          </div>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Let's Build Your Next
            <br />
            <span className="bg-gradient-to-r from-[#4BCDBB] to-[#1DAFD3] bg-clip-text font-bold text-transparent">
            Visual Story
          </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50 sm:text-[15px]">
            Share your project vision with us and get expert advice on strategy,
            style, scope, and pricing. A 15–20 minute call that helps us understand
            your goals and deliver the perfect solution.
          </p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Form Card */}
          <div className="rounded-[32px] border border-white/10 bg-[#05151d]/80 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">First Name</label>
                <input className="h-12 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 text-sm text-white outline-none focus:border-[#1DAFD3]/50" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Last Name</label>
                <input className="h-12 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 text-sm text-white outline-none focus:border-[#1DAFD3]/50" placeholder="Georgian" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Email</label>
                <input className="h-12 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 text-sm text-white outline-none focus:border-[#1DAFD3]/50" placeholder="Example@gmail.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90">Phone (Optional)</label>
                <input className="h-12 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 text-sm text-white outline-none focus:border-[#1DAFD3]/50" placeholder="+097243763446" />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-white/90">Company Name</label>
              <input className="h-12 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 text-sm text-white outline-none" placeholder="Your company.." />
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-white/90">Project Type</label>
              <div className="relative cursor-pointer h-12 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 text-sm text-white/60 flex items-center justify-between">
                <span>2D/3D animation</span>
                <span className="text-white/30 text-lg">⌄</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-white/90">Budget Range</label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {budgetRanges.map((range) => (
                    <button
                        key={range}
                        onClick={() => setSelectedBudget(range)}
                        className={`h-11 rounded-xl border transition-all text-xs font-medium ${
                            selectedBudget === range
                                ? "border-[#1DAFD3] bg-[#0d3644] text-white"
                                : "border-white/5 bg-white/5 text-white/40 hover:bg-white/10"
                        }`}
                    >
                      {range}
                    </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-white/90">Project Details</label>
              <textarea
                  className="min-h-32 w-full rounded-xl border border-white/10 bg-[#0a232e]/50 px-4 py-4 text-sm text-white outline-none"
                  placeholder="Tell us about your project..."
              />
            </div>

            <button className="group mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#4BCDBB] to-[#1DAFD3] text-[15px] font-bold text-white shadow-lg shadow-[#1DAFD3]/20 transition-transform hover:scale-[1.01] active:scale-[0.99]">
              <span className="text-xl">✦</span> Get Sample
            </button>
          </div>

          {/* Right Scheduler Card */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Schedule Your Call</h3>
              <div className="rounded-3xl border border-white/10 bg-[#05151d]/50 p-6">
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    month={selectedDate}
                    onSelect={setSelectedDate}
                    className="mx-auto"
                    classNames={{
                      month_caption: "hidden",

                      weekday: "text-white/40 font-medium text-xs uppercase pb-4",
                      day_button: "h-10 w-10 text-sm text-white/70 hover:bg-white/10 rounded-lg transition-colors",
                      selected: "!bg-[#1DAFD3] !text-white font-bold",
                      today: "text-[#1DAFD3] font-bold underline underline-offset-4",
                      outside: "opacity-20"
                    }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">How long do you need?</h4>
              <div className="flex rounded-full border border-white/10 bg-[#05151d] p-1.5">
                {durations.map((duration) => (
                    <button
                        key={duration}
                        onClick={() => setSelectedDuration(duration)}
                        className={`h-11 flex-1 rounded-full text-sm font-medium transition-all ${
                            selectedDuration === duration
                                ? "bg-[#0d3644] text-white ring-1 ring-[#1DAFD3]/50"
                                : "text-white/50 hover:text-white"
                        }`}
                    >
                      {duration}
                    </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What time works best?</h4>
              <div className="grid gap-3">
                {timeSlots.map((time) => (
                    <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`h-14 w-full rounded-full border transition-all text-base font-medium ${
                            selectedTime === time
                                ? "border-[#1DAFD3] bg-gradient-to-r from-[#0d3644] to-[#071d26] text-white"
                                : "border-white/10 bg-transparent text-white/70 hover:border-white/20"
                        }`}
                    >
                      {time}
                    </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="h-14 w-full max-w-xl rounded-2xl bg-gradient-to-r from-[#4BCDBB] to-[#1DAFD3] text-base font-bold text-white shadow-xl transition-all hover:brightness-110 active:scale-95">
            Confirm Booking
          </button>
        </div>
      </section>
  );
};