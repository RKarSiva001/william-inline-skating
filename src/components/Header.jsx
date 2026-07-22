import React from 'react';

function Header({ theme, toggleTheme }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-navbar py-3">
      <div className="container-fluid px-3 px-lg-4">
        <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#home" style={{ color: 'var(--text-primary)', fontFamily: 'Poppins' }}>
          <img 
            src="/images/logo 2.png" 
            alt="Williams Inline Skating Logo" 
            className="rounded-circle me-2" 
            style={{ width: '40px', height: '40px', objectFit: 'cover', border: '2px solid var(--sky-primary)' }}
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          <span style={{ color: 'var(--forest-mid)' }}>Williams </span>
          <span className="fw-light ms-1" style={{ fontSize: '1.1rem' }}>Inline Skating</span>
        </a>
        
        <div className="d-flex align-items-center order-lg-3">
          <button 
            className="btn btn-link nav-link p-2 me-2 text-decoration-none d-flex align-items-center justify-content-center" 
            onClick={toggleTheme}
            aria-label="Toggle structural theme"
            style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.2)', border: '1px solid var(--glass-border)' }}
          >
            {theme === 'light' ? <i className="bi bi-moon-stars text-success"></i> : <i className="bi bi-sun text-warning"></i>}
          </button>
          
          <button 
            className="navbar-toggler border-0 p-2" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNavbarLayout" 
            aria-controls="mainNavbarLayout" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-2" style={{ color: 'var(--text-primary)' }}></i>
          </button>
        </div>

        <div className="collapse navbar-collapse order-lg-2" id="mainNavbarLayout">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 text-center">
            <li className="nav-item"><a className="nav-link px-3" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#schedule">Schedule</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#locations">Arenas</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;