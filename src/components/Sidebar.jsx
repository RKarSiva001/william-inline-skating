import React from 'react';

function Sidebar() {
  return (
    <aside className="custom-sidebar d-flex flex-column justify-content-between">
      <div>
        <div className="mb-4">
          <h5 className="fw-bold text-uppercase tracking-wider mb-3" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>At A Glance</h5>
          <div className="p-3 rounded mb-3" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
            <p className="small mb-1 fw-bold"><i className="bi bi-clock-history me-2 text-primary"></i>Batches Open</p>
            <p className="small mb-0 text-muted">Weekends & Weekdays across Chennai OMR hubs.</p>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-uppercase tracking-wider mb-3" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quick Actions</h5>
          <a href="tel:+919876543210" className="w-100 btn btn-outline-primary mb-2 py-2 d-flex align-items-center justify-content-center" style={{ minHeight: '44px' }}>
            <i className="bi bi-telephone-fill me-2"></i> Call Academy
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-100 btn btn-success py-2 d-flex align-items-center justify-content-center" style={{ minHeight: '44px' }}>
            <i className="bi bi-whatsapp me-2"></i> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="text-center pt-3 border-top" style={{ borderColor: 'var(--border-color)' }}>
        <div className="d-flex justify-content-center gap-3 fs-5">
          <a href="https://www.instagram.com/p/DTGToCnkyx5/" className="text-decoration-none" style={{ color: 'var(--text-muted)' }}><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-decoration-none" style={{ color: 'var(--text-muted)' }}><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-decoration-none" style={{ color: 'var(--text-muted)' }}><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;