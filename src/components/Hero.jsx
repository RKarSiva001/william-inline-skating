import React from 'react';

function Hero() {
  return (
    <section id="home" className="sports-section d-flex align-items-center" style={{ minHeight: '85vh' }}>
      <div className="container-fluid p-0">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <h1 className="mb-4 text-balance">Master Balance Across High-Velocity Circuits.</h1>
            <p className="lead mb-5 text-muted" style={{ maxWidth: '640px', fontSize: '1.15rem' }}>
              Welcome to Chennai's premier inline skating greenhouse. We blend scientific athletic motion mapping with elite safety parameters to transform raw energy into tactical velocity.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <a href="#contact" className="btn btn-custom">Induct Free Trial Session</a>
              <a href="#schedule" className="btn btn-outline-success px-4 d-inline-flex align-items-center justify-content-center" style={{ minHeight: '50px', borderRadius: '50px', fontWeight: '600', color: 'var(--text-primary)', borderColor: 'var(--forest-mid)' }}>
                <i className="bi bi-calendar3 me-2"></i>Examine Schedules
              </a>
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
}

export default Hero;