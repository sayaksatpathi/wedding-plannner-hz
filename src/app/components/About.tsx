import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function About() {
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

  const miniStats = [
    { number: '500+', label: 'Events' },
    { number: '12', label: 'Years' },
    { number: '30', label: 'Planners' },
    { number: '50', label: 'Cities' },
  ];

  return (
    <section 
      id="about"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-ivory)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1769038934831-da8d059508c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3ZWRkaW5nJTIwcGxhbm5lciUyMHBvcnRyYWl0JTIwZWxlZ2FudHxlbnwxfHx8fDE3NzM4NTI0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Aurélie Fontaine - Founder"
                className="w-full h-full object-cover"
              />
              
              {/* Decorative Gold Frame Corners */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 pointer-events-none" style={{ borderColor: 'var(--gold-primary)' }} />
              <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 pointer-events-none" style={{ borderColor: 'var(--gold-primary)' }} />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 pointer-events-none" style={{ borderColor: 'var(--gold-primary)' }} />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 pointer-events-none" style={{ borderColor: 'var(--gold-primary)' }} />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div 
              className="uppercase text-[11px] tracking-[0.15em] mb-4"
              style={{
                fontFamily: 'var(--font-poppins)',
                color: 'var(--gold-primary)',
                fontWeight: 500
              }}
            >
              Our Story
            </div>
            
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--text-primary)',
                fontWeight: 400,
                lineHeight: 1.3
              }}
            >
              Born from a Passion <br />
              for Perfect Moments
            </h2>

            <div className="space-y-4 mb-8">
              <p 
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  fontWeight: 300,
                  lineHeight: 1.75
                }}
              >
                For over a decade, Aurélie Weddings has been the trusted name in luxury wedding planning. 
                Our journey began with a simple belief: every couple deserves a wedding that's as unique 
                as their love story.
              </p>

              <p 
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  fontWeight: 300,
                  lineHeight: 1.75
                }}
              >
                From intimate garden ceremonies to grand destination celebrations, we've orchestrated 
                over 500 weddings across 50 cities worldwide. Each event is crafted with meticulous 
                attention to detail and an unwavering commitment to excellence.
              </p>

              <p 
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  fontWeight: 300,
                  lineHeight: 1.75
                }}
              >
                Our team of 30 dedicated planners works tirelessly to transform your vision into reality, 
                ensuring every moment of your special day is nothing short of magical.
              </p>
            </div>

            {/* Signature */}
            <div 
              className="mb-8 text-2xl"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                fontWeight: 300
              }}
            >
              — Aurélie Fontaine, Founder
            </div>

            {/* Mini Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {miniStats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
                  style={{ border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <div 
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '28px',
                      color: 'var(--gold-primary)',
                      fontWeight: 300
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="uppercase text-[11px] tracking-[0.1em]"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 group/link"
              style={{
                fontFamily: 'var(--font-poppins)',
                color: 'var(--gold-primary)',
                fontWeight: 500,
                fontSize: '14px'
              }}
            >
              Meet The Team
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
