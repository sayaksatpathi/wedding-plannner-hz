import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(253,250,246,0.85)] dark:bg-[rgba(19,16,14,0.85)] backdrop-blur-[24px] shadow-lg'
            : 'bg-[rgba(253,250,246,0.75)] dark:bg-[rgba(19,16,14,0.75)] backdrop-blur-[24px]'
        }`}
        style={{ 
          borderBottom: '1px solid rgba(201,168,76,0.2)',
          height: '72px'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span 
              className="text-3xl italic"
              style={{ 
                fontFamily: 'var(--font-cormorant)',
                color: 'var(--gold-primary)'
              }}
            >
              AW
            </span>
            <span 
              className="text-lg"
              style={{ 
                fontFamily: 'var(--font-cormorant)',
                color: 'var(--gold-primary)',
                fontWeight: 300
              }}
            >
              Aurélie
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group uppercase text-xs tracking-[0.15em]"
                style={{ 
                  fontFamily: 'var(--font-poppins)',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.3s ease'
                }}
              >
                {link.name}
                <span 
                  className="absolute bottom-[-4px] left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--gold-primary)' }}
                />
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Book Consultation Button - Desktop */}
            <a
              href="#contact"
              className="hidden lg:block px-8 py-3 rounded-full text-white text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
                fontFamily: 'var(--font-poppins)',
                fontWeight: 500
              }}
            >
              Book Consultation
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          backgroundColor: 'var(--blush-pink)',
          paddingTop: '72px'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl uppercase tracking-[0.2em] opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
              style={{
                fontFamily: 'var(--font-poppins)',
                color: 'var(--text-primary)',
                fontWeight: 300,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-10 py-4 rounded-full text-white text-base tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500
            }}
          >
            Book Consultation
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}