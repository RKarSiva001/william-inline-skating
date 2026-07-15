import React from 'react';

function Footer() {
  return (
    <footer className="py-4 px-3 px-lg-5 mt-auto" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container-fluid p-0 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start">
        <div>
          <h6 className="fw-bold mb-1">William Inline Skating</h6>
          <p className="small text-muted mb-0">&copy; 2026 William Inline Skating Academy. All Rights Reserved.</p>
        </div>
        <div className="d-flex gap-3 small">
          <a href="#home" className="text-decoration-none text-muted">Home</a>
          <a href="#schedule" className="text-decoration-none text-muted">Schedule</a>
          <a href="#pricing" className="text-decoration-none text-muted">Pricing</a>
          <a href="#contact" className="text-decoration-none text-muted">Contact</a>
        </div>
        <div className="small text-muted">
          Made with ❤️ in Chennai
        </div>
      </div>
    </footer>
  );
}

export default Footer;