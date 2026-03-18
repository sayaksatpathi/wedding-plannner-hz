import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  date: string;
  avatar: string;
}

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials: Testimonial[] = [
    {
      quote: "Aurélie Weddings turned our dream into the most beautiful reality. Every detail was perfect, and the team's dedication was extraordinary. We couldn't have asked for a better wedding day!",
      name: "Sarah & Michael Chen",
      date: "Wedding: June 2025",
      avatar: "https://images.unsplash.com/photo-1747956895112-4b1ed4dc24fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGJyaWRlJTIwZ3Jvb20lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4NTI0MTB8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
    {
      quote: "From our first meeting to the last dance, the Aurélie team was with us every step of the way. Their creativity and professionalism made our wedding a truly unforgettable experience.",
      name: "Priya & Arjun Sharma",
      date: "Wedding: December 2024",
      avatar: "https://images.unsplash.com/photo-1747956895112-4b1ed4dc24fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGJyaWRlJTIwZ3Jvb20lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4NTI0MTB8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
    {
      quote: "Working with Aurélie Weddings was the best decision we made. They handled everything with such grace and elegance. Our guests are still talking about how magical the day was!",
      name: "Emma & James Wilson",
      date: "Wedding: September 2024",
      avatar: "https://images.unsplash.com/photo-1747956895112-4b1ed4dc24fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMGJyaWRlJTIwZ3Jvb20lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM4NTI0MTB8MA&ixlib=rb-4.1.0&q=80&w=300"
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ 
        backgroundColor: '#F5EFE8',
      }}
    >
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z' fill='%23C9A84C' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text-primary)',
              fontWeight: 400,
              lineHeight: 1.3
            }}
          >
            Words from Our Beloved Couples
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div 
                className="relative p-8 md:p-12 rounded-3xl mx-auto max-w-3xl"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                {/* Large Quote Mark Background */}
                <div 
                  className="absolute top-6 left-6 text-[120px] leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: 'rgba(201,168,76,0.15)',
                    fontWeight: 300
                  }}
                >
                  "
                </div>

                {/* Quote Text */}
                <p 
                  className="relative z-10 mb-8 text-center"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontSize: '20px',
                    color: 'var(--text-primary)',
                    fontWeight: 300,
                    lineHeight: 1.8
                  }}
                >
                  {testimonials[currentIndex].quote}
                </p>

                {/* Reviewer Info */}
                <div className="flex flex-col items-center gap-4">
                  {/* Avatar */}
                  <div 
                    className="w-20 h-20 rounded-full overflow-hidden"
                    style={{ border: '2px solid var(--gold-primary)' }}
                  >
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <div 
                    className="text-center"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '16px',
                      color: 'var(--text-primary)',
                      fontWeight: 500
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </div>

                  {/* Date */}
                  <div 
                    className="uppercase text-[11px] tracking-[0.1em]"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      color: 'var(--text-secondary)',
                      fontWeight: 400
                    }}
                  >
                    {testimonials[currentIndex].date}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4" 
                        fill="var(--gold-primary)"
                        stroke="var(--gold-primary)"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/80"
              style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: 'var(--gold-primary)' }} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="transition-all duration-300"
                  style={{
                    width: currentIndex === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentIndex === index ? 'var(--gold-primary)' : 'rgba(201,168,76,0.3)'
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full transition-all duration-300 hover:bg-white/80"
              style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" style={{ color: 'var(--gold-primary)' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
