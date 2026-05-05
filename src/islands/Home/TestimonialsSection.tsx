'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const [stars, setStars] = useState<Array<{ top: string; left: string }>>([]);

  // Generate stars only on client side to prevent hydration mismatch
  useEffect(() => {
    const newStars = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(newStars);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Emma R.',
      role: 'Brand Manager, Nova Studio',
      avatar: '/person1.png',
      text: 'We needed a quick turnaround, and they delivered exceptional quality ahead of schedule. Truly professional team.',
      stars: 5,
    },
    {
      id: 2,
      name: 'David L.',
      role: 'Creative Director, Pixel Inc.',
      avatar: 'person2.jpg',
      text: 'We needed a quick turnaround, and they delivered exceptional quality ahead of schedule. Truly professional team.',
      stars: 4,
    },
    {
      id: 3,
      name: 'Sarah M.',
      role: 'Marketing Lead, TechFlow',
      avatar: '/person1.png',
      text: 'We needed a quick turnaround, and they delivered exceptional quality ahead of schedule. Truly professional team.',
      stars: 5,
    },
    {
      id: 4,
      name: 'James K.',
      role: 'CEO, StartupX',
      avatar: 'person2.jpg',
      text: 'Their understanding of our brand voice was spot on. The final product exceeded our expectations in every way.',
      stars: 5,
    },
    {
      id: 5,
      name: 'Olivia P.',
      role: 'Product Owner, Appify',
      avatar: '/person1.png',
      text: 'From concept to execution, everything was handled with precision. A fantastic partner for our creative strategy.',
      stars: 5,
    },
    {
      id: 6,
      name: 'Michael B.',
      role: 'Founder, NextGen',
      avatar: 'person2.jpg',
      text: 'Innovative, reliable, and incredibly talented. They brought our vision to life better than we could have imagined.',
      stars: 4,
    },
    {
      id: 7,
      name: 'Jessica T.',
      role: 'Art Director, Visionary',
      avatar: '/person1.png',
      text: 'A seamless workflow and stunning results. I look forward to working with them on future projects.',
      stars: 5,
    },
  ];

  return (
    <section className="relative py-24  ">
      


      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            What our <span className=" text-[#21AFAF] ">clients</span> say about
            <br />
            working with us
          </h2>
          
          <p className="text-gray-400 text-xs max-w-3xl mx-auto leading-relaxed">
            We collaborate with teams of every size, from startups to global brands. Most clients come to us for motion and product-focused visuals that support their marketing efforts.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#0f172a]/50 rounded-[40px] border border-white/5 backdrop-blur-sm -z-10" />

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-8 py-12 lg:px-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-3 lg:-left-6 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center text-white hover:bg-foreground hover:border-foreground transition-all duration-300 shadow-lg cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute top-1/2 -right-3 lg:-right-6 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0f172a] border border-white/10 flex items-center justify-center text-white hover:bg-foreground hover:border-foreground transition-all duration-300 shadow-lg cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
