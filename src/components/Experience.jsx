import React, { useState } from "react";

const experiences = [
  {
    date: "15/9/2024 — Present",
    company: "Lectrobar Company",
    role: "Electrical Technical Study Engineer",
    project: null,
    items: [
      "Preparing technical and financial offers for low-voltage panel projects.",
      "Reviewing project specifications and client requirements.",
      "Coordinating with suppliers to obtain quotations for components.",
      "Ensuring compliance with technical standards and regulations.",
      "Assisting in project cost estimation and pricing strategies.",
      "Collaborating with the sales team to meet client expectations.",
      "Managing deadlines for tender submissions.",
      "Performing selectivity and short-circuit calculations for projects."
    ],
    certificate: "/certificates/lectrobar.pdf"
  },
  {
    date: "15/1/2023 — 8/7/2023",
    company: "A.E.G. Design & Construction",
    role: "Electrical Site Engineer",
    project: "Seashell - G-Hotel SPA",
    items: [
      "Studying drawings to prepare materials, equipment and man-hour requirements.",
      "Preparing IRs for handing over completed electrical works to the consultant.",
      "Executing electrical systems.",
      "Preparing and editing shop drawings for electrical systems.",
      "Preparing Bill of Quantity and reviewing abstracts for consultant approval."
    ],
    certificate: null
  }
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="experience" className="section-padding alt-section">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">02 / EXPERIENCE</span>
            <h2>Professional journey.</h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <article
                className={`timeline-item reveal ${index ? "delay-1" : ""}`}
                key={exp.company}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-date">{exp.date}</div>

                <button
                  type="button"
                  className="experience-card experience-card-button"
                  onClick={() => setSelected(exp)}
                  aria-label={`View details for ${exp.company}`}
                >
                  <span className="role-label">{exp.role}</span>
                  <h3>{exp.company}</h3>
                  {exp.project && (
                    <p className="project">
                      <i className="bi bi-building me-2"></i>
                      {exp.project}
                    </p>
                  )}
                  <p className="experience-view">
                    View experience details <i className="bi bi-arrow-up-right"></i>
                  </p>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="certificate-modal" onClick={() => setSelected(null)}>
          <div
            className="certificate-modal-content experience-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <span className="role-label">{selected.role}</span>
            <h3>{selected.company}</h3>
            <div className="timeline-date">{selected.date}</div>

            {selected.project && (
              <p className="project">
                <i className="bi bi-building me-2"></i>
                {selected.project}
              </p>
            )}

            <div className="experience-description">
              <h4>Description</h4>
              <ul className="experience-modal-list">
                {selected.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {selected.certificate && (
              <div className="certificate-section">
                <h4>Certificate</h4>
                <div className="certificate-viewer">
                  <iframe
                    src={selected.certificate}
                    title={`${selected.company} certificate`}
                  />
                </div>
                <a
                  className="btn btn-primary certificate-open"
                  href={selected.certificate}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Open Certificate
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
