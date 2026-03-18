import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.5), 0 8px 20px rgba(0,0,0,0.2)',
        }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 animate-fadeIn"
          style={{
            backgroundColor: 'var(--gold-primary)',
            boxShadow: '0 8px 20px rgba(201,168,76,0.3)',
            animation: 'fadeIn 0.3s ease forwards'
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5), 0 8px 20px rgba(0,0,0,0.2);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0), 0 8px 20px rgba(0,0,0,0.2);
          }
        }
      `}</style>
    </>
  );
}
