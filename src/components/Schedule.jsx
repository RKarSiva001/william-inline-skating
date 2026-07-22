import React from 'react';

function Schedule() {
  const scheduleData = [
    { days: "Tuesday & Wednesday", facility: "Jansen Shrinidhi Villa Ground", target: "Developmental Skill Base", timing: "Evening Intensive" },
    { days: "Tuesday & Wednesday", facility: "Balamudhali Street Track (Kelambakkam)", target: "Speed & Agility Circuit", timing: "Evening Sprint" },
    { days: "Tuesday, Wednesday & Thursday", facility: "Humming Garden Villa Court", target: "Core Foundational Cadet Track", timing: "Late Afternoon Regular" },
    { days: "Thursday & Friday", facility: "Alta Vida Apartment Arenas", target: "Advanced Performance Bracket", timing: "Night Skating Drill" },
    { days: "Saturday & Sunday (Weekends)", facility: "Hiranandani Park Hub", target: "Elite Competitive Track", timing: "Morning / Evening Batches" }
  ];

  return (
    <section id="schedule" className="sports-section" style={{ background: 'transparent' }}>
      <div className="container-fluid p-0">
        <h2 className="mb-5">Tactical Training Schedules & Arenas</h2>

        <div className="d-flex flex-column gap-4">
          {scheduleData.map((item, index) => (
            <div className="schedule-hero-card" key={index}>
              <div className="row align-items-center g-4">
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center">
                    <div className="p-3 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{ background: 'var(--glass-border)', color: 'var(--forest-mid)' }}>
                      <i className="bi bi-clock-fill fs-3"></i>
                    </div>
                    <div>
                      <span className="badge text-uppercase mb-1" style={{ letterSpacing: '0.5px', background: 'var(--forest-light)', color: '#fff' }}>{item.timing}</span>
                      <h4 className="fw-bold m-0 text-primary" style={{ fontSize: '1.25rem' }}>{item.days}</h4>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 col-md-5">
                  <span className="small text-uppercase tracking-wider text-muted fw-bold d-block mb-1">Official Training Location</span>
                  <h5 className="fw-bold m-0" style={{ color: 'var(--text-primary)' }}>
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>{item.facility}
                  </h5>
                </div>

                <div className="col-12 col-md-3 text-md-end">
                  <span className="d-inline-block px-3 py-2 rounded font-monospace small fw-bold text-uppercase" style={{ background: 'rgba(2,136,209,0.1)', color: 'var(--sky-primary)', border: '1px solid var(--glass-border)' }}>
                    {item.target}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Schedule;