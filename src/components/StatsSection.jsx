import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaTags, FaBoxOpen, FaTrophy } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { label: "Years of Experience", value: 23, suffix: "+", icon: FaCalendarAlt },
  { label: "Brands", value: 18, suffix: "+", icon: FaTags },
  { label: "Available Products", value: 150, suffix: "+", icon: FaBoxOpen },
  { label: "Awards & Recognitions", value: 15, suffix: "+", icon: FaTrophy },
];

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-black">
      <div className="top-container-1 mb-0 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} variant="fade-up" delay={i * 120} className="h-full">
              <div className="h-full flex flex-col items-center text-center rounded-xl border border-white/10 bg-white/5
                               p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FFF200]/40">
                <div className="w-12 h-12 rounded-full bg-[#FFF200]/15 text-[#FFF200] text-xl flex items-center justify-center mb-3">
                  <stat.icon />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-[#FFF200]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs md:text-sm text-gray-300 our-font">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
