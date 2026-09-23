import React from "react";
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid"></div>
      <div className="floating-orb orb-one"></div>
      <div className="floating-orb orb-two"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-8">
            <div className="hero-badge reveal">
              <span></span> Electrical Engineer
            </div>

            <h1 className="hero-title reveal delay-1">
              Ahmed Talaat
              <br />
              <span>Ahmed</span>
            </h1>

            <p className="hero-subtitle reveal delay-2">
              Electrical Power & Machines Engineer focused on technical studies,
              low-voltage panel projects, electrical systems, calculations and
              project coordination.
            </p>

            <div className="d-flex flex-wrap gap-3 reveal delay-3">
              <a href="#experience" className="btn btn-primary-custom btn-lg">
                Explore Experience <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a href="#contact" className="btn btn-outline-custom btn-lg">
                Contact Me
              </a>
            </div>

            <div className="hero-stats reveal delay-4">
              <div><strong>2024</strong><small>Current Role</small></div>
              <div><strong>2022</strong><small>Graduation</small></div>
              <div><strong>10+</strong><small>Trainings</small></div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-flex justify-content-center">
            <div className="engineer-card reveal delay-2">
              <div className="circuit-ring ring-one"></div>
              <div className="circuit-ring ring-two"></div>
              <div className="engineer-icon">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <div className="card-chip chip-one">LV</div>
              <div className="card-chip chip-two">S.C.</div>
              <div className="card-chip chip-three">ETAP</div>
              <div className="card-label">POWER<br />ENGINEERING</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}