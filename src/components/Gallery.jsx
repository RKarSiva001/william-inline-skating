import React from 'react';

function Gallery() {
  const images = [
    {
      src: "/images/coach.png", 
      title: "Head Coach & Training Mentors",
      tag: "Expert Leadership",
      desc: "Scientific posture mapping and kinetic balance instructions guided by our elite coaching panel."
    },
    {
      src: "/images/summer camp.png", 
      title: "Annual Summer Acceleration Camp",
      tag: "Intensive Camp",
      desc: "Highlighting our high-velocity outdoor drills, building confidence and performance mechanics."
    },
    {
      src: "/images/team.png", 
      title: "The Williams Inline Coaching Cadre",
      tag: "Our Team",
      desc: "Dedicated professional circuit instructors keeping safety protocol and agility training synchronized."
    },
    {
      src: "/images/4.png", 
      title: "Junior Division Speed Circuit",
      tag: "Student Showcase",
      desc: "Young skaters developing corner banking techniques, protective armor mastery, and forward focus."
    },
    {
      src: "/images/5.png", 
      title: "Foundational Balance Metrics",
      tag: "Cadet Track",
      desc: "Step-by-step weight shifting control, making early inline roller tracks fun and completely safe."
    },
    {
      src: "/images/6.png", 
      title: "Advanced Slalom Formations",
      tag: "Performance Bracket",
      desc: "Graduated skaters refining structural control, speed variations, and competitive track positioning."
    }
  ];

  return (
    <section id="gallery" className="sports-section">
      <div className="container-fluid p-0">
        <h2>Training Gallery & Action Tracks</h2>
        <p className="text-muted mb-5" style={{ maxWidth: '650px' }}>
          Explore authentic moments from our actual training circuits across Chennai. See our coaches, seasonal camps, and dedicated student roster in action.
        </p>

        {/* Flexbox/Bootstrap Responsive Dynamic Grid System */}
        <div className="row g-4">
          {images.map((img, idx) => (
            <div className="col-12 col-md-6 col-xl-4" key={idx}>
              <div className="interactive-card h-100 p-3 overflow-hidden d-flex flex-column">
                
                {/* Image Aspect Box */}
                <div 
                  className="position-relative rounded-4 overflow-hidden mb-3" 
                  style={{ height: '280px', backgroundColor: 'var(--glass-border)' }}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-100 h-100 object-fit-cover img-fluid"
                    style={{ display: 'block' }}
                    onError={(e) => {
                      // If there's an issue with spaces or extension casing, render an elegant visual alert
                      console.error(`Failed to load asset path: ${img.src}`);
                      e.target.style.backgroundColor = 'var(--highlight-bg, rgba(79, 195, 247, 0.15))';
                    }}
                  />

                  {/* High Contrast Sky Forest Category Badge Overlay */}
                  <span 
                    className="position-absolute badge px-3 py-2 font-monospace small shadow-sm"
                    style={{ 
                      background: 'var(--forest-mid)', 
                      color: '#ffffff',
                      top: '15px',
                      left: '15px',
                      zIndex: 2
                    }}
                  >
                    {img.tag}
                  </span>
                </div>

                {/* Typography Block - High Contrast Content Container */}
                <div className="p-2 d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold mb-2 text-primary" style={{ fontSize: '1.15rem' }}>
                    {img.title}
                  </h5>
                  <p className="text-muted small mb-0 mt-auto">
                    {img.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;