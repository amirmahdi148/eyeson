import { useState } from "react";
import { DayPicker } from "react-day-picker";

const durations = ["15 min", "30 min", "1 hour"];
const timeSlots = ["4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm"];
const budgetRanges = ["< $10k", "$10k - $25k", "$25k - $50k", "$50k +"];

export const ContactBookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [visibleMonth, setVisibleMonth] = useState<Date>(new Date());
  const [selectedDuration, setSelectedDuration] = useState("15 min");
  const [selectedTime, setSelectedTime] = useState("4:00 pm");
  const [selectedBudget, setSelectedBudget] = useState("< $10k");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-[#0F8C9B]/50 bg-[#031520] px-4 py-1 text-xs text-white/70">
          Contact
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-6xl">
          Let&apos;s Build Your Next
          <br />
          <span className="bg-linear-to-r from-[#4BCDBB] to-[#1DAFD3] bg-clip-text font-black text-transparent">
            Visual Story
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
          Share your project vision with us and get expert advice on strategy,
          style, scope, and pricing.
          <br />
          A 15-20 minute call that helps us understand your goals and deliver the
          perfect solution.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="rounded-3xl border border-[#0E6778]/55 bg-linear-to-b from-[#072234]/90 to-[#061A2B]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/85">First Name</label>
              <input className="h-11 w-full rounded-xl border border-[#107C8F] bg-[#0A3147]/70 px-4 text-sm text-white/90 outline-none" placeholder="Jane" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/85">Last Name</label>
              <input className="h-11 w-full rounded-xl border border-[#0E465C] bg-[#0A3147]/55 px-4 text-sm text-white/80 outline-none" placeholder="Georgian" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/85">Email</label>
              <input className="h-11 w-full rounded-xl border border-[#0E465C] bg-[#0A3147]/55 px-4 text-sm text-white/80 outline-none" placeholder="Example@gmail.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/85">Phone (Optional)</label>
              <input className="h-11 w-full rounded-xl border border-[#0E465C] bg-[#0A3147]/55 px-4 text-sm text-white/80 outline-none" placeholder="+097243763446" />
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/85">Company Name</label>
            <input className="h-11 w-full rounded-xl border border-[#0E465C] bg-[#0A3147]/55 px-4 text-sm text-white/80 outline-none" placeholder="Your company.." />
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/85">Project Type</label>
            <div className="h-11 w-full rounded-xl border border-[#0E465C] bg-[#0A3147]/55 px-4 text-sm text-white/70">
              <div className="flex h-full items-center justify-between">
                <span>2D/3D animation</span>
                <span className="text-white/40">⌄</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/85">Budget Range</label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedBudget(range)}
                  className={`h-10 rounded-xl border text-xs sm:text-sm ${
                    selectedBudget === range
                      ? "border-[#20CFD5] bg-[#0B3F58] text-white"
                      : "border-[#0E465C] bg-[#0A3147]/45 text-white/65"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/85">Project Details</label>
            <textarea
              className="min-h-28 w-full rounded-xl border border-[#0E465C] bg-[#0A3147]/45 px-4 py-3 text-sm text-white/80 outline-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button className="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-linear-to-r from-[#52D3C1] to-[#10B9D0] text-sm font-semibold text-white">
            ✦&nbsp;&nbsp;Get Sample
          </button>
        </div>

        <div className="space-y-5 rounded-3xl border border-[#0E6778]/45 bg-[#041523]/75 p-4 sm:p-6">
          <h3 className="text-3xl font-semibold text-white">Schedule Your Call</h3>
          <div className="rounded-2xl border border-[#0E6778] bg-[#081B2D] p-3">
            <DayPicker
              mode="single"
              month={visibleMonth}
              onMonthChange={setVisibleMonth}
              selected={selectedDate}
              onSelect={setSelectedDate}
              showOutsideDays
              captionLayout="dropdown"
              startMonth={new Date(2020, 0)}
              endMonth={new Date(2035, 11)}
              className="text-white"
              classNames={{
                month: "space-y-3 w-full",
                month_grid: "w-full border-separate border-spacing-y-1",
                weekdays: "grid grid-cols-7 text-center text-xs text-white/45",
                weekday: "font-normal uppercase",
                week: "grid grid-cols-7",
                day: "flex h-9 w-full items-center justify-center",
                day_button:
                  "flex h-9 w-9 items-center justify-center rounded-lg text-sm text-white/75 hover:bg-[#113047]",
                selected: "bg-[#16B6C8] text-white hover:bg-[#16B6C8]",
                today: "border border-[#16B6C8]",
                outside: "text-white/25",
                chevron: "fill-white/60",
                month_caption: "text-white/80 text-sm",
                dropdowns: "flex items-center gap-2",
                months_dropdown:
                  "rounded-md border border-[#0E6778] bg-[#071B2A] px-2 py-1 text-xs text-white",
                years_dropdown:
                  "rounded-md border border-[#0E6778] bg-[#071B2A] px-2 py-1 text-xs text-white",
              }}
            />
          </div>

          <div>
            <h4 className="mb-2 text-3xl font-semibold text-white">How long do you need?</h4>
            <div className="flex rounded-full border border-[#0E6778] bg-[#071B2A] p-1">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`h-11 flex-1 rounded-full text-lg ${
                    selectedDuration === duration
                      ? "bg-[#0DB8C8] font-semibold text-white"
                      : "text-white/85"
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-3xl font-semibold text-white">What time works best?</h4>
            <div className="space-y-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`h-12 w-full rounded-full border text-xl ${
                    selectedTime === time
                      ? "border-[#0FB4C5] bg-linear-to-r from-[#119FB5] to-[#0E8CA3] text-white"
                      : "border-[#0E6778] bg-[#071B2A] text-white/90"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="mx-auto mt-7 block h-12 w-full max-w-2xl rounded-xl bg-linear-to-r from-[#52D3C1] to-[#10B9D0] text-sm font-semibold text-white">
        Confirm Booking
      </button>
    </section>
  );
};
