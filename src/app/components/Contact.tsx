import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    vision: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', date: '', guests: '', vision: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      text: '123 Wedding Lane, Luxury District, Mumbai 400001'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+91 98765 43210'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'hello@aurelie-weddings.com'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Mon–Sat: 10AM–7PM'
    }
  ];

  return (
    <section 
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#1E1612' }}
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
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#F0E8DF',
              fontWeight: 300,
              lineHeight: 1.3
            }}
          >
            Let's Begin Your Story
          </h2>
          
          <p 
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '17px',
              color: 'rgba(240,232,223,0.6)',
              fontWeight: 300
            }}
          >
            Tell us about your dream day
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent pb-3 outline-none peer transition-colors duration-300"
                  style={{
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    color: '#F0E8DF',
                    fontWeight: 300
                  }}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-xs pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: formData.name ? '11px' : '15px',
                    color: formData.name ? 'var(--gold-primary)' : 'rgba(240,232,223,0.5)',
                    fontWeight: 300,
                    transform: formData.name ? 'translateY(-24px)' : 'translateY(0)'
                  }}
                >
                  Full Name
                </label>
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent pb-3 outline-none peer transition-colors duration-300"
                  style={{
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    color: '#F0E8DF',
                    fontWeight: 300
                  }}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-0 transition-all duration-300 pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: formData.email ? '11px' : '15px',
                    color: formData.email ? 'var(--gold-primary)' : 'rgba(240,232,223,0.5)',
                    fontWeight: 300,
                    transform: formData.email ? 'translateY(-24px)' : 'translateY(0)'
                  }}
                >
                  Email Address
                </label>
              </div>

              {/* Wedding Date */}
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full bg-transparent pb-3 outline-none peer transition-colors duration-300"
                  style={{
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    color: '#F0E8DF',
                    fontWeight: 300,
                    colorScheme: 'dark'
                  }}
                />
                <label
                  htmlFor="date"
                  className="absolute left-0 pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '11px',
                    color: formData.date ? 'var(--gold-primary)' : 'rgba(240,232,223,0.5)',
                    fontWeight: 300,
                    transform: 'translateY(-24px)'
                  }}
                >
                  Wedding Date
                </label>
              </div>

              {/* Expected Guest Count */}
              <div className="relative">
                <input
                  type="number"
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                  className="w-full bg-transparent pb-3 outline-none peer transition-colors duration-300"
                  style={{
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    color: '#F0E8DF',
                    fontWeight: 300
                  }}
                  placeholder=" "
                />
                <label
                  htmlFor="guests"
                  className="absolute left-0 top-0 transition-all duration-300 pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: formData.guests ? '11px' : '15px',
                    color: formData.guests ? 'var(--gold-primary)' : 'rgba(240,232,223,0.5)',
                    fontWeight: 300,
                    transform: formData.guests ? 'translateY(-24px)' : 'translateY(0)'
                  }}
                >
                  Expected Guest Count
                </label>
              </div>

              {/* Your Vision */}
              <div className="relative">
                <textarea
                  id="vision"
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent pb-3 outline-none peer transition-colors duration-300 resize-none"
                  style={{
                    borderBottom: '1px solid rgba(201,168,76,0.3)',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '15px',
                    color: '#F0E8DF',
                    fontWeight: 300
                  }}
                  placeholder=" "
                />
                <label
                  htmlFor="vision"
                  className="absolute left-0 transition-all duration-300 pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: formData.vision ? '11px' : '15px',
                    color: formData.vision ? 'var(--gold-primary)' : 'rgba(240,232,223,0.5)',
                    fontWeight: 300,
                    transform: formData.vision ? 'translateY(-24px)' : 'translateY(0)'
                  }}
                >
                  Your Vision
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  letterSpacing: '0.05em'
                }}
              >
                Send Your Enquiry ✦
              </button>
            </form>
          </motion.div>

          {/* Right: Map & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div 
              className="w-full h-64 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center"
              style={{ border: '1px solid rgba(201,168,76,0.2)' }}
            >
              <MapPin className="w-12 h-12" style={{ color: 'var(--gold-primary)' }} />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div style={{ color: 'var(--gold-primary)' }}>
                    {info.icon}
                  </div>
                  <p 
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '14px',
                      color: 'rgba(240,232,223,0.8)',
                      fontWeight: 300,
                      lineHeight: 1.6
                    }}
                  >
                    {info.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
