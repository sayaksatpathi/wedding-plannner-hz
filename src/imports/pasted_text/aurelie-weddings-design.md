Design a world-class, ultra-premium wedding planner website for a 
high-end bridal studio. This should feel like the digital equivalent 
of a luxury fashion house — every pixel deliberate, every interaction 
graceful. Think Vera Wang meets a 5-star resort website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Studio Name: Aurélie Weddings
Tagline: "Crafting Your Dream Wedding"
Sub-tagline: "Where Every Moment Becomes a Memory"
Voice: Whisper-quiet luxury. Intimate. Timeless. Editorial.
Feeling: Like holding a heavy embossed invitation card — 
         textured, warm, unforgettable.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Background Base:     #FDFAF6  (warm ivory)
Surface Cards:       #FFFFFF  (pure white)
Glass Overlay:       rgba(255,255,255,0.18) with backdrop-blur 20px
Primary Gold:        #C9A84C  (antique gold — NOT yellow)
Gold Light:          #E8D5A3  (soft champagne)
Gold Shimmer:        linear-gradient(135deg, #C9A84C, #F0E0A0, #C9A84C)
Blush Pink:          #F2D4D0  (muted, not bubblegum)
Deep Rose:           #B07080  (for accents/borders)
Sage Soft:           #D6E4DC  (floral arrangement feel)
Text Primary:        #2C1F1A  (deep espresso brown)
Text Secondary:      #7A6A63  (warm taupe)
Text Light:          #BDB0A8  (captions)

DARK MODE PALETTE:
Background:          #13100E  (near-black warm)
Surface:             #1E1916
Text:                #F0E8DF
Gold stays: #C9A84C  unchanged

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Display / H1:   Cormorant Garamond — 72–96px, Light 300, 
                wide letter-spacing (+0.04em), italic variants
H2 / Section:   Playfair Display — 42–56px, Regular
H3 / Cards:     Playfair Display — 24–30px
Body:           Poppins — 15–17px, weight 300–400, 
                line-height 1.75
Labels/Caps:    Poppins — 11px, weight 500, 
                letter-spacing +0.15em, ALL CAPS
CTA Text:       Poppins Medium — 14px, tracked

RULE: Headings always in Cormorant italic. 
Body always Poppins light. Gold used only on 
decorative type elements and borders — never body text.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — STICKY NAVIGATION BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Full-width, height 72px
- Background: rgba(253,250,246,0.75) with backdrop-blur: 24px
- Bottom border: 1px solid rgba(201,168,76,0.2)
- Left: Monogram logo "AW" in Cormorant Garamond italic + 
  "Aurélie" in thin gold serif
- Center: Nav links — Home | Services | Portfolio | 
  About | Testimonials | Contact
  (Poppins 12px caps, taupe color, gold underline on hover 
   with 0.3s ease transition)
- Right: "Book Consultation" button — 
  gold shimmer gradient, rounded-full, 
  subtle glow shadow on hover
- On scroll: bar lifts with shadow, slight blur intensifies
- Mobile: hamburger icon → fullscreen overlay menu 
  with rose-blush background and staggered link reveals

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Full viewport height (100vh), full-width
- Background: High-resolution romantic wedding scene — 
  outdoor ceremony, golden hour, soft bokeh, floral arch
- Overlay: linear-gradient(180deg, 
    rgba(13,10,8,0.15) 0%, 
    rgba(13,10,8,0.55) 100%)
- Content centered, vertically and horizontally:

  [Decorative thin gold horizontal rule — 80px wide]
  LABEL: "LUXURY WEDDING STUDIO · EST. 2015"  
         (Poppins 11px caps, gold, tracked)
  
  H1: "Crafting Your  
       Dream Wedding"
  (Cormorant Garamond 88px, Light Italic, white, 
   line-height 1.1, centered)
  
  Subtitle: "Where every detail tells your love story."
  (Poppins Light 18px, ivory/80%, centered)
  
  [Spacing: 40px]
  
  TWO CTAs side by side:
  Primary: "Book Consultation" 
    → gold shimmer gradient bg, white text, 
      56px height, 32px horizontal padding, 
      rounded-full, shimmer animation on hover
  Secondary: "Explore Services" 
    → transparent bg, white border 1px, white text, 
      same size, hover: fills with white/10 glass

- Bottom: Scroll indicator — thin vertical line 
  (60px) + "SCROLL" in 10px caps, animated pulse

- ANIMATION FEEL (describe for Figma):
  Elements fade and rise on load with staggered delays:
  label (0s) → h1 (0.3s) → subtitle (0.6s) → CTAs (0.9s)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — TRUST BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Slim horizontal strip on ivory background
- 4 stats with thin gold dividers between them:
  ✦ 500+ Weddings Planned  
  ✦ 12 Years of Excellence  
  ✦ 50+ Cities Covered  
  ✦ 98% Client Satisfaction
- Numbers in Cormorant 36px gold, 
  labels in Poppins 11px caps taupe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — SERVICES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Section label: "WHAT WE OFFER"
- H2: "Services Tailored  
       to Your Love Story"
- 5 service cards in a row (desktop) / 2-column (mobile):

  Each card:
  - White bg, 24px radius, soft shadow
  - Top: thin gold decorative icon (line-style, not filled)
  - Title in Playfair 22px
  - Description in Poppins 14px taupe, 2 lines
  - Bottom: "Learn More →" in gold small caps
  - Hover: card lifts (translateY -6px), 
    gold top border appears (3px), 
    shadow intensifies

  Cards:
  🌸 Wedding Planning — Full coordination & timeline
  🌹 Floral & Decoration — Bespoke floral installations
  🏛️ Venue Selection — Curated venue partnerships
  📷 Photography — Fine art wedding photography
  🍽️ Catering & Menu — Michelin-inspired culinary curation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — PORTFOLIO / GALLERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Section label: "OUR WORK"
- H2: "Moments We've Made Eternal"
- Background: very light blush wash #FAF0EE
- Filter tabs: All | Ceremony | Reception | Destination | Floral
  (Poppins 12px caps, active tab = gold underline)

- Masonry grid layout — 3 columns, variable heights:
  Mix of portrait and landscape images
  
  Each image cell:
  - Rounded 16px corners
  - Hover: zoom scale(1.05) + 
    dark gradient overlay slides up from bottom
  - Overlay shows: 
    Location name (Cormorant italic white 20px)
    Category tag (Poppins 10px caps gold)
  
- Below grid: "View Full Portfolio" 
  → outlined gold button, centered

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — ABOUT US
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Split layout: Left 50% image | Right 50% content
- Left: Tall editorial portrait of lead planner 
  in elegant setting, slight warm vignette
  + decorative gold frame overlay (thin lines, corners only)

- Right content:
  Label: "OUR STORY"
  H2: "Born from a Passion  
       for Perfect Moments"
  Body: 3 short paragraphs, Poppins light
  
  Signature line: Cursive font "— Aurélie Fontaine, Founder"
  
  4 mini-stats in 2×2 grid below:
  [500+ Events] [12 Years] [30 Planners] [50 Cities]
  (Cormorant 28px gold number + Poppins 11px label)
  
  CTA: "Meet The Team →" in gold text link

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — TESTIMONIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Background: deep ivory #F5EFE8, 
  scattered subtle floral watermark pattern
- H2: "Words from Our Beloved Couples"
- Carousel / slider — 3 cards visible on desktop

  Each card:
  - Glass morphism: rgba(255,255,255,0.6), 
    backdrop-blur 12px, 1px rgba(201,168,76,0.3) border
  - Large opening quote mark in Cormorant 120px gold/15% 
    (decorative background element)
  - Review text: Cormorant italic 20px, espresso color
  - Reviewer: circular avatar (80px) + Name + Wedding date
  - ⭐⭐⭐⭐⭐ in gold

- Navigation: thin gold dot indicators + 
  arrow chevrons (minimal line style)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — PRICING PACKAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Label: "INVESTMENT"
- H2: "Choose Your Perfect Package"
- 3 cards side by side:

  BASIC — "The Essentials"
  Card: white, standard shadow
  
  PREMIUM — "Most Popular" ← CENTER CARD
  Card: slightly larger scale (1.05)
  Badge: "MOST LOVED" — gold pill badge, top-center
  Background: very subtle gold gradient wash
  Border: 1.5px gold shimmer border with glow shadow
  
  LUXURY — "The Complete Experience"
  Card: white, standard

  Each card contains:
  - Package name (Playfair 24px)
  - Starting price (Cormorant 48px gold "₹X,XX,000")
  - Thin gold divider line
  - Feature list (6–8 items, checkmark in gold ✦)
  - CTA: "Get Started" button
    Basic → outlined | Premium → gold filled | 
    Luxury → dark filled with gold text
  
  Footer note below cards:
  "All packages are fully customizable. 
   Let's design yours together."
  (Poppins 13px italic taupe, centered)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9 — CONTACT & BOOKING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Background: rich dark tone #1E1612 
  (reversal — creates drama before footer)
- H2 in ivory Cormorant: 
  "Let's Begin Your Story"
- Subtitle in Poppins light ivory/60%:
  "Tell us about your dream day"

- Split layout:
  LEFT: Contact form
    Fields: Full Name | Email Address | 
            Wedding Date (date picker) | 
            Expected Guest Count | Your Vision (textarea)
    
    Field style: no border, only bottom gold line 
    (underline input style), label floats up on focus
    
    Submit: Full-width gold gradient button 
    "Send Your Enquiry ✦" — 56px height
  
  RIGHT: 
    Map placeholder card (rounded 16px)
    Below map:
    📍 Studio Address, City
    📞 +91 XXXXX XXXXX
    ✉️  hello@aurelie-weddings.com
    ⏰  Mon–Sat: 10AM–7PM
    
    (Each in Poppins 14px, icon in gold)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Background: #13100E (deepest warm black)
- Top: thin gold divider line
- Layout: 4 columns
  Col 1: Logo + tagline + social icons 
         (Instagram, Pinterest, Facebook, YouTube)
         Social icons: 36px circle, gold/10% bg, 
         gold icon, hover fills gold
  Col 2: Quick Links
  Col 3: Services
  Col 4: Newsletter signup (email input + subscribe)

- Bottom bar: copyright + "Designed with ♡" 
  (Poppins 12px, taupe)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOATING ELEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- WhatsApp button: bottom-right, 
  soft green with gold ring, pulse animation
- "Back to Top" arrow: bottom-left, 
  gold circle, appears after 300px scroll
- Dark/Light mode toggle: navbar right end, 
  sun/moon icon in gold

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADVANCED UI DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Scroll Animations:
- Section headings: fade up (translateY 30px → 0, opacity 0 → 1)
- Cards: staggered rise, 0.15s delay per card
- Stats counter: count-up animation on enter
- Gallery images: blur-to-sharp reveal

Micro-interactions:
- Button hover: shimmer sweep left-to-right
- Nav links: gold underline slides in from left
- Form fields: label floats with gold color on focus
- Card hover: shadow blooms, border glows

Glassmorphism applied to:
- Sticky navbar
- Testimonial cards
- Hero overlay badge/label
- Pricing "Most Popular" badge

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SPECS SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frames: Desktop 1440px | Tablet 768px | Mobile 390px
Grid: 12-column, 24px gutter, 120px margins (desktop)
Border Radius: 4px (inputs) | 16px (cards) | 9999px (pills/CTAs)
Shadows: 
  Default card — 0 8px 40px rgba(44,31,26,0.08)
  Hover card — 0 20px 60px rgba(44,31,26,0.16)
  Gold glow — 0 0 30px rgba(201,168,76,0.25)
Transitions: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)
Section padding: 120px vertical (desktop), 64px (mobile)