import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface GalleryImage {
  url: string;
  location: string;
  category: string;
}

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filters = ['All', 'Ceremony', 'Reception', 'Destination', 'Floral'];

  const images: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1770301312269-a511f773619c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBjZXJlbW9ueSUyMGdvbGRlbiUyMGhvdXJ8ZW58MXx8fHwxNzczODUyNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Tuscany, Italy',
      category: 'Ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1773745060497-4cc1df774c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwdmVudWUlMjBlbGVnYW50JTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzM4NTI0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'French Riviera',
      category: 'Destination'
    },
    {
      url: 'https://images.unsplash.com/photo-1772404245518-b88fac824c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvcmFsJTIwYXJjaCUyMGRlY29yYXRpb258ZW58MXx8fHwxNzczODI2OTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Garden Estate',
      category: 'Floral'
    },
    {
      url: 'https://images.unsplash.com/photo-1769812343322-f4a6e73c8aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHJlY2VwdGlvbiUyMHRhYmxlJTIwc2V0dGluZ3N8ZW58MXx8fHwxNzczODUyNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Château de Loire',
      category: 'Reception'
    },
    {
      url: 'https://images.unsplash.com/photo-1766041677004-46d1525ae2d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVzdGluYXRpb24lMjBiZWFjaCUyMGNlcmVtb255fGVufDF8fHx8MTc3Mzg1MjQwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Maldives Resort',
      category: 'Destination'
    },
    {
      url: 'https://images.unsplash.com/photo-1769868628482-528d35164ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnMlMjBlbGVnYW50fGVufDF8fHx8MTc3Mzc1NDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      location: 'Rose Garden',
      category: 'Floral'
    },
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section 
      id="portfolio"
      className="py-24 md:py-32"
      style={{ backgroundColor: '#FAF0EE' }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        {/* Section Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div 
            className="uppercase text-[11px] tracking-[0.15em] mb-4"
            style={{
              fontFamily: 'var(--font-poppins)',
              color: 'var(--gold-primary)',
              fontWeight: 500
            }}
          >
            Our Work
          </div>
          
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: 'var(--text-primary)',
              fontWeight: 400,
              lineHeight: 1.3
            }}
          >
            Moments We've Made Eternal
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="relative uppercase text-xs tracking-[0.15em] pb-2 transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  color: activeFilter === filter ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: 'var(--gold-primary)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Gallery */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="24px" className="mb-12">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  aspectRatio: index % 3 === 0 ? '3/4' : '4/3'
                }}
              >
                <img
                  src={image.url}
                  alt={image.location}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                >
                  <div 
                    className="uppercase text-[10px] tracking-[0.15em] mb-2"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      color: 'var(--gold-primary)',
                      fontWeight: 500
                    }}
                  >
                    {image.category}
                  </div>
                  <div 
                    className="text-xl"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      color: '#FFFFFF',
                      fontWeight: 300
                    }}
                  >
                    {image.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* View Full Portfolio Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full border transition-all duration-300 hover:bg-[rgba(201,168,76,0.1)]"
            style={{
              borderColor: 'var(--gold-primary)',
              borderWidth: '1px',
              fontFamily: 'var(--font-poppins)',
              color: 'var(--gold-primary)',
              fontWeight: 500,
              fontSize: '14px'
            }}
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
