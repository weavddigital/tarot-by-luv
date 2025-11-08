// Main React application for Tarot by Luv
// This script renders page-specific components based on the current URL.
// We use React (via CDN) and Babel for JSX support.

(() => {
  const { useState, useEffect } = React;

  /**
   * Floating WhatsApp button component.
   * Accepts a message string which will be pre-filled when the link opens.
   */
  function FloatingWA({ message }) {
    // Replace the placeholder number with the actual contact number as needed
    const phone = '91XXXXXXXXXX';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
      <div className="floating-wa">
        <a href={url} aria-label="Chat on WhatsApp">🌙</a>
      </div>
    );
  }

  /**
   * Site header containing the logo and navigation.
   * The nav links correspond to the individual HTML pages. React is used to render
   * the markup but navigation still uses normal links for better SEO and fallback.
   */
  function Header() {
    return (
      <header>
        <nav className="nav">
          <div className="logo-lockup">
            <img src="logo.png" alt="Tarot by Luv logo" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="book.html">Book</a>
            <a href="contact.html">Contact</a>
          </div>
          <a href="book.html" className="nav-cta">Book a Reading</a>
        </nav>
      </header>
    );
  }

  /**
   * Testimonials carousel component.
   * Displays three testimonials at a time and allows navigation via arrow buttons.
   */
  function TestimonialsCarousel({ items }) {
    const visibleCount = 3;
    const [start, setStart] = useState(0);
    const total = items.length;

    const next = () => {
      setStart((start + visibleCount) % total);
    };
    const prev = () => {
      setStart((start - visibleCount + total) % total);
    };

    // Build list of currently visible testimonials
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (start + i) % total;
      visible.push(items[index]);
    }

    return (
      <div className="client-testimonials-wrapper">
        {/* Left navigation arrow */}
        <button className="client-testimonials-arrow" onClick={prev} aria-label="Previous">&lt;</button>
        <div className="client-testimonials-cards">
          {visible.map((item, idx) => (
            <div className="client-testimonial-card" key={idx}>
              <div className="client-testimonial-avatar">
                <div className="client-testimonial-initials">{item.initials}</div>
                <div>
                  <div className="client-testimonial-name">{item.name}</div>
                  <div className="client-testimonial-location">{item.location}</div>
                </div>
              </div>
              <div className="client-testimonial-text">&ldquo;{item.text}&rdquo;</div>
            </div>
          ))}
        </div>
        {/* Right navigation arrow */}
        <button className="client-testimonials-arrow" onClick={next} aria-label="Next">&gt;</button>
      </div>
    );
  }

  /**
   * Home page component.
   * Includes hero section, about preview, services preview, testimonials and CTA.
   */
  function HomePage() {
    const testimonials = [
      {
        initials: 'AS',
        name: 'Anjali S.',
        location: 'Delhi',
        text:
          "Luv's reading was beyond accurate. I left with clarity and peace about my relationship decisions. His intuitive guidance helped me see patterns I'd been missing for years."
      },
      {
        initials: 'KT',
        name: 'Karan T.',
        location: 'Mumbai',
        text:
          'The energy healing session helped me realign emotionally after a difficult period. Luv\'s gentle approach and deep understanding created a safe space for healing.'
      },
      {
        initials: 'PR',
        name: 'Priya R.',
        location: 'Bangalore',
        text:
          'My astrology reading with Luv was transformative. He explained my birth chart in ways that made complete sense and gave me practical guidance for my career path.'
      }
    ];
    return (
      <>
        <FloatingWA message="Hi I would like to book a reading" />
        <Header />
        <main className="wrapper">
          {/* Hero Section */}
          <section className="hero">
            <div>
              <div className="eyebrow">Tarot &amp; Healing by Luv Kohli</div>
              <h1>Find clarity in life’s unseen paths</h1>
              <p>
                Private tarot readings, relationship healing and astrology guidance held in a
                confidential space designed to realign your energy and direction.
              </p>
              <div className="hero-actions">
                <a href="YOUR_60_MIN_GOOGLE_CALENDAR_LINK" className="btn-primary" target="_blank" rel="noopener">Book a Reading</a>
                <a href="services.html" className="btn-ghost">
                  <span className="icon">✦</span> View Services
                </a>
              </div>
              <div className="hero-note">
                Sessions available online worldwide. Limited daily bookings for deeper, focused work.
              </div>
            </div>
            <aside className="hero-card">
              <div className="hero-card-label">Featured Offering</div>
              <h3>Signature Clarity Session</h3>
              <p>
                A guided tarot and energy reading for those at a crossroads in love, career, or self.
              </p>
              <div className="hero-card-divider"></div>
              <ul className="hero-card-list">
                <li>Intuitive spread tailored to your questions</li>
                <li>Insight on patterns, blocks and next steps</li>
                <li>Offered as 60 or 120 minute sessions</li>
              </ul>
              <a
                href="YOUR_60_MIN_GOOGLE_CALENDAR_LINK"
                className="booking-cta-link"
                style={{ marginTop: '4px', justifySelf: 'flex-start' }}
                target="_blank"
                rel="noopener"
              >
                Book now <span>↗</span>
              </a>
            </aside>
          </section>

          {/* About Preview */}
          <section id="about-preview">
            <div className="section-header">
              <h2 className="section-title">About Luv Kohli</h2>
              <p className="section-sub">
                A brief introduction to the reader behind Tarot by Luv. Learn how Luv combines
                tarot, astrology and intuitive energy work to help clients find clarity and
                balance.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Luv Kohli is a dedicated tarot reader and intuitive guide known for detailed
                  spreads, clear interpretation, and a direct yet compassionate approach.
                </p>
                <br />
                <p>
                  Each reading focuses on <span className="about-highlight">clarity, alignment and action</span>.
                </p>
                <br />
                <p>Experience tarot as a deeper conversation with your own intuition.</p>
                <br />
                <a href="about.html" className="btn-ghost" style={{ marginTop: '8px' }}>
                  <span className="icon">✦</span> Learn More
                </a>
              </div>
              <div className="about-card">
                <div className="about-card-label">Session Essence</div>
                <div>✦ Safe, confidential space for honest questions</div>
                <div>✦ Structured layouts for love, career and healing</div>
                <div>✦ Focus on patterns, timing and energy shifts</div>
                <div>✦ Practical guidance you can act on immediately</div>
              </div>
            </div>
          </section>

          {/* Services Preview */}
          <section id="services-preview">
            <div className="section-header">
              <h2 className="section-title">Services</h2>
              <p className="section-sub">
                Discover the path to clarity through ancient wisdom and intuitive guidance. Choose the work you need and then pick a session length on the booking page.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <img src="icon2.png" alt="Tarot icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Tarot Reading</div>
                <div className="service-text">
                  Focused or full spread readings aimed at clarity around decisions, shifts or
                  timelines.
                </div>
                <a href="services.html" className="service-link">Learn More</a>
              </div>
              <div className="service-card">
                <img src="icon3.png" alt="Relationship icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Relationship Healing</div>
                <div className="service-text">
                  For love, connection, separation or recurring patterns between partners.
                </div>
                <a href="services.html" className="service-link">Learn More</a>
              </div>
              <div className="service-card">
                <img src="icon5.png" alt="Astrology icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Astrology Reading</div>
                <div className="service-text">
                  Birth chart or compatibility readings to understand cycles, purpose and alignment.
                </div>
                <a href="services.html" className="service-link">Learn More</a>
              </div>
              <div className="service-card">
                <img src="icon9.png" alt="Energy icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Energy Balancing</div>
                <div className="service-text">
                  Chakra and aura work to release blocks and reset emotional energy.
                </div>
                <a href="services.html" className="service-link">Learn More</a>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials">
            <div className="section-header">
              <h2 className="section-title">Client Experiences</h2>
              <p className="section-sub">
                Words from clients who found clarity, reassurance and a renewed sense of direction through
                Luv’s sessions.
              </p>
            </div>
            <TestimonialsCarousel items={testimonials} />
          </section>

          {/* Call to Action */}
          <section id="cta">
            <div className="section-header">
              <h2 className="section-title">Your Journey to Clarity Begins Here</h2>
              <p className="section-sub">
                Take the first step toward understanding your path, healing your relationships, and discovering your true potential.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="YOUR_60_MIN_GOOGLE_CALENDAR_LINK" className="btn-primary" target="_blank" rel="noopener">Book Your Reading Today</a>
            </div>
          </section>
        </main>
      </>
    );
  }

  /**
   * About page component. Replicates the stand-alone about page using React.
   */
  function AboutPage() {
    return (
      <>
        <FloatingWA message="Hi I would like to learn more about your services" />
        <Header />
        <main className="wrapper">
          <section id="about-page">
            <div className="section-header">
              <h2 className="section-title">About Luv Kohli</h2>
              <p className="section-sub">
                Learn more about the journey and philosophy of Luv Kohli – the intuitive guide behind Tarot by Luv.
              </p>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Luv Kohli began his spiritual journey over a decade ago when he discovered the profound guidance of tarot and astrology.
                  Through years of study and practice, he developed a unique approach that blends traditional wisdom with intuitive counselling.
                </p>
                <br />
                <p>
                  His sessions are gentle yet direct, offering clarity and practical steps. Whether you're navigating relationships, career changes or personal growth, Luv's aim is to guide you towards your own inner alignment.
                </p>
                <br />
                <p>
                  Outside of readings, he continues to deepen his knowledge of energy work, spiritual psychology and mindfulness practices to better serve his clients.
                </p>
              </div>
              <div className="about-card">
                <div className="about-card-label">Guidance Philosophy</div>
                <div>✦ Empower clients to trust their inner knowing</div>
                <div>✦ Use tarot and astrology as mirrors, not prescriptions</div>
                <div>✦ Honour free will and personal responsibility</div>
                <div>✦ Create a safe, non‑judgemental space for all questions</div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  /**
   * Services page component.
   */
  function ServicesPage() {
    return (
      <>
        <FloatingWA message="Hi I have a question about your services" />
        <Header />
        <main className="wrapper">
          <section id="services-page">
            <div className="section-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-sub">
                Choose the work you need. Each service can be booked in various durations to suit your depth and focus.
              </p>
            </div>
            <div className="services-grid">
              {/* Tarot Reading */}
              <div className="service-card">
                <img src="icon2.png" alt="Tarot icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Tarot Reading</div>
                <div className="service-text">
                  Focused or full spread readings aimed at clarity around decisions, shifts or timelines.
                </div>
                <a href="book.html" className="service-link">Book Now</a>
              </div>
              {/* Relationship Healing */}
              <div className="service-card">
                <img src="icon3.png" alt="Relationship icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Relationship Healing</div>
                <div className="service-text">
                  Heal patterns, improve communication and bring balance to your connections.
                </div>
                <a href="book.html" className="service-link">Book Now</a>
              </div>
              {/* Astrology Reading */}
              <div className="service-card">
                <img src="icon5.png" alt="Astrology icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Astrology Reading</div>
                <div className="service-text">
                  Dive into your birth chart or compatibility. Understand cycles, purpose and timing.
                </div>
                <a href="book.html" className="service-link">Book Now</a>
              </div>
              {/* Energy Balancing */}
              <div className="service-card">
                <img src="icon9.png" alt="Energy icon" style={{ height: '34px', width: '34px' }} />
                <div className="service-title">Energy Balancing</div>
                <div className="service-text">
                  Chakra and aura alignment to release blocks, reset emotional flow and uplift well‑being.
                </div>
                <a href="book.html" className="service-link">Book Now</a>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  /**
   * Booking page component.
   */
  function BookPage() {
    return (
      <>
        <FloatingWA message="Hi I’ve booked a session with Luv and would like to confirm payment" />
        <Header />
        <main className="wrapper">
          <section id="booking">
            <div className="section-header">
              <h2 className="section-title">Book a Reading</h2>
              <p className="section-sub">
                Choose your session length. Booking is a simple two‑step flow: select a slot in the calendar, then confirm and pay through WhatsApp.
              </p>
            </div>
            <div className="booking-wrap">
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Session</th>
                    <th>Ideal for</th>
                    <th>Price (₹)</th>
                    <th>Book</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="booking-tier-title">30 Minutes</div>
                    </td>
                    <td>One question, quick clarity, focused spread.</td>
                    <td className="booking-price">1,500</td>
                    <td>
                      <a className="booking-cta-link" href="YOUR_30_MIN_GOOGLE_CALENDAR_LINK" target="_blank">
                        Slot ↗
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="booking-tier-title">60 Minutes</div>
                    </td>
                    <td>Deep dive into love, career, or a key turning point.</td>
                    <td className="booking-price">2,800</td>
                    <td>
                      <a className="booking-cta-link" href="YOUR_60_MIN_GOOGLE_CALENDAR_LINK" target="_blank">
                        Slot ↗
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="booking-tier-title">120 Minutes</div>
                    </td>
                    <td>Combined tarot and astrology reading with integration.</td>
                    <td className="booking-price">4,500</td>
                    <td>
                      <a className="booking-cta-link" href="YOUR_120_MIN_GOOGLE_CALENDAR_LINK" target="_blank">
                        Slot ↗
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="booking-tier-title">180 Minutes</div>
                    </td>
                    <td>Intensive spiritual and energy healing container.</td>
                    <td className="booking-price">6,500</td>
                    <td>
                      <a className="booking-cta-link" href="YOUR_180_MIN_GOOGLE_CALENDAR_LINK" target="_blank">
                        Slot ↗
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <aside className="booking-side">
                <div><strong>How it works</strong></div>
                <div>1. Click your preferred duration and choose an available slot.</div>
                <div>2. After booking, confirm your session and payment on WhatsApp.</div>
                <div>3. Luv will share meeting details for your session (video or voice).</div>
                <a
                  className="whatsapp-button"
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%27ve%20booked%20a%20session%20with%20Luv%20and%20would%20like%20to%20confirm%20payment."
                  target="_blank"
                >
                  <span>✆</span> Confirm via WhatsApp
                </a>
                <div className="booking-note">
                  Limited reschedules. Please reach out at least 24 hours in advance for changes.
                </div>
              </aside>
            </div>
          </section>
        </main>
      </>
    );
  }

  /**
   * Contact page component.
   */
  function ContactPage() {
    return (
      <>
        <FloatingWA message="Hi, I have a question about your services" />
        <Header />
        <main className="wrapper">
          <section id="contact">
            <div className="section-header">
              <h2 className="section-title">Contact</h2>
              <p className="section-sub">
                For questions, custom sessions, collaborations, or event bookings, reach out directly.
              </p>
            </div>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-label">Send a message</div>
                <label>
                  Name
                  <input className="contact-input" type="text" name="name" placeholder="Your full name" />
                </label>
                <label>
                  Email
                  <input className="contact-input" type="email" name="email" placeholder="Your email" />
                </label>
                <label>
                  Message
                  <textarea className="contact-textarea" name="message" placeholder="Share your questions or preferred session type."></textarea>
                </label>
                <button type="submit" className="btn-primary" style={{ fontSize: '10px', width: 'max-content' }}>
                  Submit enquiry
                </button>
                <div className="contact-note">
                  This form can be connected to your chosen email service or CRM in your build.
                </div>
              </form>
              <div className="contact-side">
                <div><strong>Direct contact</strong></div>
                <div>Email: contact@tarotbyluv.com (placeholder)</div>
                <div>WhatsApp: +91 XXXXX XXXXX (placeholder)</div>
                <div><strong>Location</strong></div>
                <div>Based in Mumbai. Sessions available globally online by appointment.</div>
                <div><strong>Good to know</strong></div>
                <div>
                  Readings are for guidance and reflection and are not a substitute for medical, legal, or financial advice.
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  /**
   * Top-level application component. Determines which page to render based on the
   * current path. Each HTML file corresponds to a separate route handled via static file
   * requests. This ensures that non-JavaScript users still see the correct content when
   * served directly, while React enhances interactivity when available.
   */
  function App() {
    // Determine which page file we are on. Remove any trailing slashes.
    const path = window.location.pathname.split('/').pop() || 'index.html';
    let PageComponent;
    switch (path) {
      case 'about.html':
        PageComponent = AboutPage;
        break;
      case 'services.html':
        PageComponent = ServicesPage;
        break;
      case 'book.html':
        PageComponent = BookPage;
        break;
      case 'contact.html':
        PageComponent = ContactPage;
        break;
      case 'index.html':
      default:
        PageComponent = HomePage;
        break;
    }
    return <PageComponent />;
  }

  // Render the application into the root element
  ReactDOM.render(<App />, document.getElementById('root'));
})();