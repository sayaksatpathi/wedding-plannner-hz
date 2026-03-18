import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Flower2, Camera, MapPin, UtensilsCrossed, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
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
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white rounded-[24px] p-8 transition-all duration-[350ms] hover:-translate-y-2 cursor-pointer"
      style={{
        boxShadow: '0 8px 40px rgba(44,31,26,0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(44,31,26,0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(44,31,26,0.08)';
      }}
    >
      {/* Hover Border Top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]"
        style={{ backgroundColor: 'var(--gold-primary)' }}
      />

      {/* Icon */}
      <div 
        className="mb-6 transition-transform duration-[350ms] group-hover:scale-110"
        style={{ color: 'var(--gold-primary)' }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 
        className="mb-3"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '22px',
          color: 'var(--text-primary)',
          fontWeight: 400
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        className="mb-6"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: '14px',
          color: 'var(--text-secondary)',
          fontWeight: 300,
          lineHeight: 1.75
        }}
      >
        {description}
      </p>

      {/* Learn More Link */}
      <a 
        href="#contact"
        className="inline-flex items-center gap-2 uppercase text-[11px] tracking-[0.15em] group/link"
        style={{
          fontFamily: 'var(--font-poppins)',
          color: 'var(--gold-primary)',
          fontWeight: 500
        }}
      >
        Learn More
        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
      </a>
    </motion.div>
  );
}

export function Services() {
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

  const services = [
    {
      icon: <Sparkles className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Wedding Planning',
      description: 'Full coordination & timeline management for your perfect day'
    },
    {
      icon: <Flower2 className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Floral & Decoration',
      description: 'Bespoke floral installations and elegant venue styling'
    },
    {
      icon: <MapPin className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Venue Selection',
      description: 'Curated venue partnerships at the most exclusive locations'
    },
    {
      icon: <Camera className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Photography',
      description: 'Fine art wedding photography capturing timeless moments'
    },
    {
      icon: <UtensilsCrossed className="w-10 h-10" strokeWidth={1.5} />,
      title: 'Catering & Menu',
      description: 'Michelin-inspired culinary curation and exquisite dining'
    },
  ];

  return (
    <section 
      id="services"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-ivory)' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div 
            className="uppercase text-[11px] tracking-[0.15em] mb-4"
            style={{
              fontFamily: 'var(--font-poppins)',
              color: 'var(--gold-primary)',
              fontWeight: 500
            }}
          >
            What We Offer
          </div>
          
          <h2 
            className="mx-auto max-w-2xl"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text-primary)',
              fontWeight: 400,
              lineHeight: 1.3
            }}
          >
            Services Tailored <br />
            to Your Love Story
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
