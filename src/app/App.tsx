import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-ivory)' }}>
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingElements />
    </div>
  );
}
