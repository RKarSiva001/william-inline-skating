import React, { useState } from 'react';

function LocationMap() {
  const mapLocations = [
    { name: "1. Hiranandani Park", desc: "Hiranandani Upscale Arena", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8778477742115!2d80.22271297592473!3d12.851213017506972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87b326ffffff9%3A0x600c3b018bc19d4b!2sHiranandani%20Upscale!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" },
    { name: "2. Jansen Shrinidhi", desc: "Padur Residential Base", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5132426129553!2d80.22232577470415!3d12.81007647120279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b0b7cbff209%3A0xdcdb33cae56edf94!2sJansen%20Shrinidhi%20Villa!5e0!3m2!1sen!2sin!4v1784117729982!5m2!1sen!2sin" },
    { name: "3. Balamudhali Street", desc: "Kelambakkam Central Hub", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.9816826676068!2d80.22409853053432!3d12.784261786918183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251cf71cd0e81%3A0xd30d03e40a7c5bc0!2sWilliam%20inline%20skating!5e0!3m2!1sen!2sin!4v1784117936836!5m2!1sen!2sin" },
    { name: "4. Humming Garden Villa", desc: "Alliance Community Court", embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1945.4994156825978!2d80.2115183!3d12.7785875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52512d48907049%3A0xb79f2ceb6468a6ca!2sKids%20park!5e0!3m2!1sen!2sin!4v1784118017147!5m2!1sen!2sin" },
    { name: "5. Alta Vida Apartment", desc: "Senganmal Luxury Arena", embedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.8441072195005!2d80.2054328!3d12.7540486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251223257eb7d%3A0xd5bac685d2fee520!2sAlta!5e0!3m2!1sen!2sin!4v1784118094999!5m2!1sen!2sin" }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="locations" className="sports-section">
      <div className="container-fluid p-0">
        <h2>Unified Strategic Training Arenas</h2>
        
        <p className="text-muted mb-4">
          Select a facility route option to switch center coordinate viewports dynamically:
        </p>

        {/* Horizontal Nav Switches Matrix */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {mapLocations.map((loc, idx) => (
            <button
              key={idx}
              className="btn text-start p-2 px-3 border rounded-3 transition-all"
              style={{
                minHeight: '46px',
                backgroundColor: activeTab === idx ? 'var(--highlight-bg, rgba(79, 195, 247, 0.15))' : 'var(--glass-bg)',
                borderColor: activeTab === idx ? 'var(--sky-primary)' : 'var(--glass-border)',
                color: 'var(--text-primary)',
                fontWeight: activeTab === idx ? '700' : '500'
              }}
              onClick={() => setActiveTab(idx)}
            >
              <span className="d-block small">{loc.name}</span>
            </button>
          ))}
        </div>

        {/* Full Width Map Display Layout Section */}
        <div className="w-100">
          <div className="unified-map-container">
            <iframe
              src={mapLocations[activeTab].embedUrl}
              className="map-embed-iframe"
              title="William Inline Skating Consolidated Maps Track Engine"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;