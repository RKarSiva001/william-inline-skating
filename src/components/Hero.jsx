import React from 'react';

function Hero() {
  return (
    <section id="home" className="sports-section d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <div className="container-fluid p-0">
        <div className="row align-items-center g-5">
          
          {/* Left Text Grid Column Layout */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <h1 className="mb-4 text-balance">Master Balance Across High-Velocity Circuits.</h1>
            <p className="lead mb-4 text-muted" style={{ maxWidth: '640px', fontSize: '1.15rem' }}>
              Welcome to Chennai's premier inline skating greenhouse. We blend scientific athletic motion mapping with elite safety parameters to transform raw energy into tactical velocity.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <a href="#contact" className="btn btn-custom">Induct Free Trial Session</a>
              <a href="#schedule" className="btn btn-outline-success px-4 d-inline-flex align-items-center justify-content-center" style={{ minHeight: '50px', borderRadius: '50px', fontWeight: '600', color: 'var(--text-primary)', borderColor: 'var(--forest-mid)' }}>
                <i className="bi bi-calendar3 me-2"></i>Examine Schedules
              </a>
            </div>
          </div>
          
          {/* Right Column Custom Dynamic Logo Presentation Panel */}
          <div className="col-12 col-lg-5 text-center d-flex justify-content-center align-items-center">
            <div 
              className="p-3" 
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-hover)',
                width: 'clamp(260px, 35vw, 380px)',
                height: 'clamp(260px, 35vw, 380px)',
                overflow: 'hidden'
              }}
            >
              <img 
                src="/images/logo 2.png" 
                alt="Williams Inline Skating Premium Logo" 
                className="w-100 h-100 object-fit-cover rounded-circle"
                style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="d-none w-100 h-100 align-items-center justify-content-center text-primary fw-bold">
                W.I.S.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;