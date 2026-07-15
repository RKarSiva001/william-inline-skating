import React from 'react';

function Pricing() {
  const tiers = [
    { category: "Cadet Tier", age: "Age 4-6", price: "1,500", note: "Kinetic Fundamentals Track" },
    { category: "Junior Division", age: "Age 6–12", price: "2,000", note: "Velocity Control Protocols" },
    { category: "Varsity Bracket", age: "Age 12–16", price: "2,500", note: "Advanced Slalom Mechanics" },
    { category: "Pro Competitor", age: "Age 16+", price: "3,000", note: "Elite Endurance Circuits" }
  ];

  return (
    <section id="pricing" className="sports-section">
      <div className="container-fluid p-0">
        <h2 className="mb-5">Subscription Tiers & Enrollment Programs</h2>
        
        <div className="d-flex flex-column flex-md-row flex-wrap gap-4 justify-content-between">
          {tiers.map((tier, idx) => (
            <div className="interactive-card flex-grow-1" style={{ minWidth: '240px', flexBasis: 'calc(25% - 1.5rem)' }} key={idx}>
              <div className="text-center">
                <span className="badge text-primary mb-2" style={{ backgroundColor: 'rgba(79, 195, 247, 0.15)' }}>Active Allotment</span>
                <h5 className="fw-bold mb-2">{tier.category}</h5>
                <h5 className="fw-bold mb-2">{tier.age}</h5>
                <p className="small text-muted mb-4">{tier.note}</p>
                <hr style={{ borderColor: '#021622' }} />
                <div className="my-4">
                  <span className="fs-3 fw-bold align-top">₹  </span>
                  <span className="display-6 fw-bold text-primary">{tier.price}</span>
                  <span className="text-muted small">  / Month</span>
                </div>
                <a href="#contact" className="btn btn-outline-primary btn-sm w-100 py-2 fw-semibold" style={{ minHeight: '44px', borderRadius: '8px' }}>
                  Secure Roster Slot
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;