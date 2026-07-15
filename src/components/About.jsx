import React from 'react';

function About() {
  const values = [
    { icon: "bi-shield-shaded", title: "Biomechanic Safety Shields", desc: "Rigid protective protocols enforcing dual-impact wrist guards, structural knee mitigation armor, and shock-absorbent helmets." },
    { icon: "bi-speedometer", title: "Kinetic Velocity Pacing", desc: "Custom-tailored training vectors tracking center-of-mass shift, fluid corner banking, and strategic edge deceleration." },
    { icon: "bi-people-fill", title: "Multi-Tier Cohorts", desc: "Strict athletic bracket separation from first-time toddlers up to varsity regional tournament speed racers." }
  ];

  return (
    <section id="about" className="sports-section">
      <div className="container-fluid p-0">
        <h2 className="mb-5">Core Instructional Vectors</h2>
        <div className="row g-4">
          {values.map((v, i) => (
            <div className="col-12 col-md-4" key={i}>
              <div className="interactive-card h-100 d-flex flex-column align-items-start">
                <div className="fs-1 mb-3 text-primary"><i className={`bi ${v.icon}`}></i></div>
                <h4 className="fw-bold mb-2">{v.title}</h4>
                <p className="text-muted mb-0 small">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;