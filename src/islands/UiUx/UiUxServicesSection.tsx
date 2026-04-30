"use client";

// آدرس عکس‌های هر کارت رو اینجا قرار بده
const services = [
  {
    id: 1,
    title: "Web UI Design",
    description: "Craft visually sharp, responsive web interfaces that elevate user experience and create meaningful engagement across every device.",
    imageUrl: "/uiux/card1.png", 
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    description: "Design intuitive and visually compelling mobile app interfaces built for seamless interaction on both iOS and Android platforms.",
    imageUrl: "/uiux/card2.jpg", 
  },
  {
    id: 3,
    title: "Dashboard UI Design",
    description: "Develop clean, data-focused dashboards that simplify complexity and support smarter, faster decision-making for modern digital products.",
    imageUrl: "/uiux/card3.jpg", 
  },
  {
    id: 4,
    title: "UI Style Guide Creation",
    description: "Build scalable design systems and component libraries that keep your product consistent, cohesive, and ready to grow without losing its visual identity.",
    imageUrl: "/uiux/card4.jpg", 
  },
  {
    id: 5,
    title: "Prototype Development",
    description: "Create interactive prototypes using Figma for simple flows and Protopie for advanced interactions, helping you validate ideas and optimize user journeys before development begins.",
    imageUrl: "/uiux/card5.jpg", 
  },
  {
    id: 6,
    title: "UI Redesign & Optimization",
    description: "Upgrade existing interfaces to improve usability, accessibility, and overall performance, resulting in higher engagement and better business outcomes.",
    imageUrl: "/uiux/card6.jpg", 
  }
];

export default function UiUxServicesSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">



      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* هدر بخش */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <h2 className="text-[36px] font-black tracking-tight text-[#32c9b4] sm:text-[44px] lg:text-[50px]">
            UI/UX design
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-gray-300 sm:text-[16px] lg:text-[17px]">
            Explore powerful short-form video formats designed to highlight your product, boost engagement, 
            and connect with your audience across every platform.
          </p>
        </div>

        {/* گرید سرویس‌ها */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col"
            >
              {/* کادر عکس */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/5 bg-[#0a1820] shadow-lg transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-cyan-500/20 group-hover:shadow-[0_15px_40px_rgba(17,169,157,0.15)]">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* متن‌های زیر عکس */}
              <div className="mt-6 flex flex-col px-1">
                <h3 className="text-[22px] font-bold tracking-tight text-white lg:text-[24px]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}