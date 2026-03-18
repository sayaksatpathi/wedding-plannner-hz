import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Wedding Planning',
    'Floral Design',
    'Venue Selection',
    'Photography',
    'Catering',
  ];

  return (
    <footer 
      style={{ 
        backgroundColor: '#13100E',
        borderTop: '1px solid rgba(201,168,76,0.3)'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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

            <p 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '13px',
                color: 'rgba(240,232,223,0.6)',
                fontWeight: 300,
                lineHeight: 1.6
              }}
            >
              Crafting Your Dream Wedding
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--gold-primary)]"
                  style={{
                    backgroundColor: 'rgba(201,168,76,0.1)',
                    color: 'var(--gold-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--gold-primary)';
                    e.currentTarget.style.color = '#13100E';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(201,168,76,0.1)';
                    e.currentTarget.style.color = 'var(--gold-primary)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 
              className="mb-6 uppercase text-sm tracking-[0.1em]"
              style={{
                fontFamily: 'var(--font-poppins)',
                color: '#F0E8DF',
                fontWeight: 500
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[var(--gold-primary)]"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '14px',
                      color: 'rgba(240,232,223,0.7)',
                      fontWeight: 300
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 
              className="mb-6 uppercase text-sm tracking-[0.1em]"
              style={{
                fontFamily: 'var(--font-poppins)',
                color: '#F0E8DF',
                fontWeight: 500
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li 
                  key={service}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontSize: '14px',
                    color: 'rgba(240,232,223,0.7)',
                    fontWeight: 300
                  }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 
              className="mb-6 uppercase text-sm tracking-[0.1em]"
              style={{
                fontFamily: 'var(--font-poppins)',
                color: '#F0E8DF',
                fontWeight: 500
              }}
            >
              Newsletter
            </h4>
            <p 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: '13px',
                color: 'rgba(240,232,223,0.6)',
                fontWeight: 300,
                lineHeight: 1.6
              }}
            >
              Subscribe for wedding tips & inspiration
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full flex-1 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.05)] outline-none transition-colors duration-300 focus:bg-[rgba(255,255,255,0.1)]"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '13px',
                  color: '#F0E8DF',
                  fontWeight: 300,
                  border: '1px solid rgba(201,168,76,0.2)'
                }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)',
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '13px',
                  color: '#FFFFFF',
                  fontWeight: 500
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}
        >
          <p 
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '12px',
              color: 'rgba(240,232,223,0.5)',
              fontWeight: 300
            }}
          >
            © 2026 Aurélie Weddings. All rights reserved.
          </p>
          
          <p 
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '12px',
              color: 'rgba(240,232,223,0.5)',
              fontWeight: 300
            }}
          >
            Designed with <Heart className="w-3 h-3" style={{ color: 'var(--gold-primary)' }} fill="var(--gold-primary)" />
          </p>
        </div>
      </div>
    </footer>
  );
}
