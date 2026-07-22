import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '' });
  const whatsappMessage = 
`--------------------------------
*William Inline Skating Academy*
--------------------------------
Name: {name}
Phone: {phone}
Location: {location}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Registration Request

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}`;

    window.open(
      `https://wa.me/916374782293?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="sports-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-8">
            <h2>Get In Touch</h2>
            <p className="text-muted">
              Secure a complimentary trial track session. Coordinate directly using our channels or complete the registration grid below.
            </p>
          </div>
        </div>

        {/* Channels Centered Row */}
        <div className="row justify-content-center g-4 mb-5">
          <div className="col-12 col-sm-6 col-md-4">
            <div className="interactive-card text-center p-4">
              <i className="bi bi-telephone text-info fs-2 mb-2 d-block"></i>
              <h6 className="fw-bold mb-1">Call Academy</h6>
              <a href="tel:+916374782293" className="text-decoration-none fw-semibold" style={{ color: 'var(--sky-primary)' }}>+91 63747 82293</a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <div className="interactive-card text-center p-4">
              <i className="bi bi-whatsapp text-success fs-2 mb-2 d-block"></i>
              <h6 className="fw-bold mb-1">WhatsApp Matrix</h6>
              <a href="https://wa.me/916374782293" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold text-success">Chat Instantly</a>
            </div>
          </div>
        </div>

        {/* Central Registration Panel Frame */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="interactive-card p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label className="form-label small fw-bold" htmlFor="uName">Full Name</label>
                  <input 
                    type="text" id="uName" className="form-control" required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label small fw-bold" htmlFor="uPhone">Contact Phone Number</label>
                  <input 
                    type="tel" id="uPhone" className="form-control" required 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="mb-4 text-start">
                  <label className="form-label small fw-bold" htmlFor="uLoc">Preferred Training Arena</label>
                  <select 
                    id="uLoc" className="form-select" required
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  >
                    <option value="">Select an Arena Facility...</option>
                    <option value="Hiranandani">Hiranandani Park Hub</option>
                    <option value="Padur">Jansen Shrinidhi Villa Ground</option>
                    <option value="Kelambakkam">Balamudhali Street Track</option>
                    <option value="Humming-Gardens">Humming Garden Villa Court</option>
                    <option value="Alta-Vida">Alta Vida Apartment Arenas</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-custom w-100 fs-6">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;