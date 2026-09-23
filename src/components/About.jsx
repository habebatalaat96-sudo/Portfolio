import React from "react";
export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">01 / ABOUT</span>
          <h2>Building reliable electrical solutions.</h2>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="content-card h-100 reveal">
              <p className="lead">
                I am an Electrical Power and Machines Engineer with professional
                experience in technical studies and electrical site engineering.
              </p>
              <p>
                My current work includes preparing technical and financial offers
                for low-voltage panel projects, reviewing project requirements,
                coordinating with suppliers, cost estimation, tender submissions,
                and performing selectivity and short-circuit calculations.
              </p>
              <p className="mb-0">
                I graduated from Alexandria University with a Bachelor’s degree
                in Electrical Power and Machines Engineering, with an Excellent
                graduation project grade.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="info-card h-100 reveal delay-1">
              <div className="info-row">
                <i className="bi bi-mortarboard-fill"></i>
                <div><small>Education</small><strong>Alexandria University</strong></div>
              </div>
              <div className="info-row">
                <i className="bi bi-calendar3"></i>
                <div><small>Graduation</small><strong>2017 — 2022</strong></div>
              </div>
              <div className="info-row">
                <i className="bi bi-geo-alt-fill"></i>
                <div><small>Location</small><strong>Alexandria, Egypt</strong></div>
              </div>
              <div className="info-row">
                <i className="bi bi-award-fill"></i>
                <div><small>Graduation Project</small><strong>Excellent</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}