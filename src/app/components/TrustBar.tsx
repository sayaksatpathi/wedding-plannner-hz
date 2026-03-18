import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface StatProps {
  number: string;
  label: string;
  delay: number;
}

function Stat({ number, label, delay }: StatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center px-6"
    >
      <div 
        className="mb-2"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(28px, 4vw, 36px)',
          color: 'var(--gold-primary)',
          fontWeight: 300
        }}
      >
        {number}
      </div>
      <div 
        className="uppercase text-[11px] tracking-[0.15em]"
        style={{
          fontFamily: 'var(--font-poppins)',
          color: 'var(--text-secondary)',
          fontWeight: 500
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function TrustBar() {
  const stats = [
    { number: '500+', label: 'Weddings Planned' },
    { number: '12', label: 'Years of Excellence' },
    { number: '50+', label: 'Cities Covered' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--bg-ivory)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <Stat 
                number={stat.number} 
                label={stat.label} 
                delay={index * 0.15}
              />
              {index < stats.length - 1 && (
                <div 
                  className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-12"
                  style={{ backgroundColor: 'rgba(201,168,76,0.3)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
