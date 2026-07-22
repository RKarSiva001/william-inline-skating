import React, { useEffect } from 'react';

function HeroCarousel() {
  const carouselImages = [
    { src: "/images/logo.png", title: "Williams Inline Skating", desc: "Dynamic Training Environments Capturing Active Technical Execution" },
    { src: "/images/coach.png", title: "Expert Coaching", desc: "Learn from professional instructors with years of experience" },
    { src: "/images/logo 2.png", title: "Advanced Training", desc: "Take your skills to the next level with our specialized programs" },
    { src: "/images/team.png", title: "Team Spirit", desc: "Join a community of passionate inline skaters" },
    { src: "/images/summer camp.png", title: "Summer Camp", desc: "Fun and educational camps for all skill levels" },
    { src: "/images/1.png", title: "Event Highlight", desc: "See the excitement at our latest competitions" },
    { src: "/images/2.png", title: "Training Session", desc: "Improve your technique with our expert-led sessions" },
    { src: "/images/3.png", title: "Community Events", desc: "Connect with fellow skaters at our regular meetups" },
    { src: "/images/4.png", title: "Competitions", desc: "Showcase your skills in our exciting tournaments" },
    { src: "/images/5.png", title: "Workshops", desc: "Learn new techniques from industry professionals" },
    { src: "/images/6.png", title: "Membership Benefits", desc: "Enjoy exclusive perks and discounts as a member" },
    { src: "/images/7.png", title: "Facilities", desc: "Access our state-of-the-art training facilities" },
    { src: "/images/8.png", title: "Equipment Rental", desc: "Get the gear you need for your next session" },
    { src: "/images/9.png", title: "Nutrition Guidance", desc: "Fuel your performance with our personalized nutrition plans" },
    { src: "/images/10.png", title: "Safety First", desc: "We prioritize your safety with comprehensive training protocols" }
  ];

  useEffect(() => {
    if (window.bootstrap && window.bootstrap.Carousel) {
      const carouselEl = document.getElementById('standaloneShowcaseCarousel');
      if (carouselEl) {
        new window.bootstrap.Carousel(carouselEl, {
          interval: 3500,
          ride: 'carousel',
          wrap: true
        });
      }
    }
  }, []);

  return (
    <section className="sports-section" style={{ background: 'transparent' }}>
      <div className="container-fluid p-0">
        <h2 className="mb-4">Live Performance Matrix</h2>
        <p className="text-muted mb-5" style={{ minWidth: '750px' }}>
          Review the dynamic training environments capturing active technical execution throughout our primary Chennai circuits.
        </p>

        {/* Separated Full Width Glassmorphic Slider Component Container */}
        <div className="carousel-glass-container" style={{ minWidth: '60%', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
          <div id="standaloneShowcaseCarousel" className="carousel slide carousel-fade">
            
            <div className="carousel-indicators mb-3">
              {carouselImages.map((_, idx) => (
                <button 
                  key={idx} 
                  type="button" 
                  data-bs-target="#standaloneShowcaseCarousel" 
                  data-bs-slide-to={idx} 
                  className={idx === 0 ? "active" : ""}
                  aria-label={`Slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            <div className="carousel-inner" style={{ borderRadius: '16px' }}>
              {carouselImages.map((img, idx) => (
                <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx} style={{ height: 'clamp(300px, 50vh, 550px)' }}>
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="d-block w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.parentNode.style.background = 'var(--highlight-bg)';
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="carousel-caption-glass">
                    <h4 className="fw-bold text-white mb-1">{img.title}</h4>
                    <p className="m-0 text-white-50">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#standaloneShowcaseCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#standaloneShowcaseCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;