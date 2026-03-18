import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonStyle: 'outlined' | 'gold' | 'dark';
  delay: number;
}

function PricingCard({ name, subtitle, price, features, isPopular, buttonStyle, delay }: PricingCardProps) {
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

  const getButtonStyles = () => {
    switch (buttonStyle) {
      case 'gold':
        return {
          background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
          color: '#FFFFFF',
          border: 'none'
        };
      case 'dark':
        return {
          background: 'var(--text-primary)',
          color: 'var(--gold-primary)',
          border: 'none'
        };
      default:
        return {
          background: 'transparent',
          color: 'var(--gold-primary)',
          border: '1px solid var(--gold-primary)'
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative p-8 rounded-3xl transition-all duration-[350ms] flex flex-col ${isPopular ? 'lg:scale-105' : ''}`}
      style={{
        backgroundColor: isPopular 
          ? 'rgba(201,168,76,0.05)' 
          : '#FFFFFF',
        border: isPopular 
          ? '1.5px solid var(--gold-primary)' 
          : '1px solid rgba(201,168,76,0.2)',
        boxShadow: isPopular 
          ? '0 20px 60px rgba(201,168,76,0.25)' 
          : '0 8px 40px rgba(44,31,26,0.08)',
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full uppercase text-[10px] tracking-[0.15em]"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-poppins)',
            fontWeight: 500
          }}
        >
          Most Loved
        </div>
      )}

      {/* Package Name */}
      <h3 
        className="mb-2 mt-4"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '24px',
          color: 'var(--text-primary)',
          fontWeight: 500
        }}
      >
        {name}
      </h3>

      {/* Subtitle */}
      <p 
        className="mb-6"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: '14px',
          color: 'var(--text-secondary)',
          fontWeight: 300
        }}
      >
        {subtitle}
      </p>

      {/* Price */}
      <div 
        className="mb-6"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '48px',
          color: 'var(--gold-primary)',
          fontWeight: 300,
          lineHeight: 1
        }}
      >
        {price}
      </div>

      {/* Divider */}
      <div 
        className="w-full h-[1px] mb-6"
        style={{ backgroundColor: 'rgba(201,168,76,0.3)' }}
      />

      {/* Features List */}
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-start gap-3"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '14px',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              lineHeight: 1.6
            }}
          >
            <Check 
              className="w-4 h-4 mt-1 flex-shrink-0" 
              style={{ color: 'var(--gold-primary)' }}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
        className="block w-full py-4 rounded-full text-center transition-all duration-300 hover:scale-105 hover:shadow-lg mt-auto"
        style={{
          ...getButtonStyles(),
          fontFamily: 'var(--font-poppins)',
          fontWeight: 500,
          fontSize: '14px'
        }}
      >
        Get Started
      </a>
    </motion.div>
  );
}

export function Pricing() {
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

  const packages = [
    {
      name: 'Basic',
      subtitle: 'The Essentials',
      price: '₹2,50,000',
      features: [
        'Full wedding day coordination',
        'Vendor recommendations',
        'Timeline creation & management',
        'Guest coordination',
        'Basic décor consultation',
        'Day-of emergency kit'
      ],
      buttonStyle: 'outlined' as const
    },
    {
      name: 'Premium',
      subtitle: 'Most Popular',
      price: '₹5,00,000',
      features: [
        'Everything in Basic package',
        'Complete design & styling',
        'Custom floral arrangements',
        'Venue scouting & negotiation',
        'Photography coordination',
        'Rehearsal dinner planning',
        'Guest accommodation assistance',
        'Unlimited planning meetings'
      ],
      isPopular: true,
      buttonStyle: 'gold' as const
    },
    {
      name: 'Luxury',
      subtitle: 'The Complete Experience',
      price: '₹10,00,000',
      features: [
        'Everything in Premium package',
        'Destination wedding planning',
        'Multi-day event coordination',
        'Celebrity vendor partnerships',
        'Bespoke invitation design',
        'Guest travel & itinerary planning',
        'Post-wedding brunch coordination',
        'Honeymoon planning assistance'
      ],
      buttonStyle: 'dark' as const
    }
  ];

  return (
    <section 
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
            Investment
          </div>
          
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text-primary)',
              fontWeight: 400,
              lineHeight: 1.3
            }}
          >
            Choose Your Perfect Package
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <PricingCard
              key={index}
              name={pkg.name}
              subtitle={pkg.subtitle}
              price={pkg.price}
              features={pkg.features}
              isPopular={pkg.isPopular}
              buttonStyle={pkg.buttonStyle}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '13px',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            fontWeight: 300
          }}
        >
          All packages are fully customizable. Let's design yours together.
        </motion.p>
      </div>
    </section>
  );
}