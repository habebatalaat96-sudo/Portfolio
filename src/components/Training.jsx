import React, { useState } from "react";

const trainings = [
  {
    name: "Tea Searv Company",
    desc: "Electrical Training at READY TO WORK Program.",
    year: "7/8/2021 — 10/10/2021",
    icon: "bi-tools",
    certificate: "/certificates/ready-to-work.pdf"
  },
  {
    name: "Evergrow Company",
    desc: "The Summer & Practical Training.",
    year: "1/9/2021 — 1/10/2021",
    icon: "bi-lightning",
    certificate: "/certificates/Evargrow_training.pdf"
  },
  {
    name: "Siemens Company",
    desc: "The hybrid program “Best-in-Class 2021” — Digital Grid and Smart Energy Track. Gained experience in decarbonization, decentralization, digitalization, PV cells, wind turbines, battery storage systems, smart grids, protection devices, and motor protection & control solutions.",
    year: "September 2021",
    icon: "bi-cpu",
    certificate: "/certificates/semans.pdf"
  },
  {
    name: "New & Renewable Energy Authority (NREA)",
    desc: "The Renewable Energy Training Program.",
    year: "25/7/2021 — 5/8/2021",
    icon: "bi-sun",
    certificate: "/certificates/Certificate(NREA).pdf"
  },
  {
    name: "Aspire Training Solutions",
    desc: "Virtual Employability Skills Track. Participated with several teams of colleagues to solve problems assigned by the lecturer.",
    year: "18/4/2021 — 22/4/2021",
    icon: "bi-people",
    certificate: null
  },
  {
    name: "Titan Company — e-SDP Alumni Camp",
    desc: "Virtual Student Development Program (e-SDP Alumni Camp), 20 virtual training hours. Gained experience in Legal Awareness, Supply Chain Management and Strategic Management.",
    year: "31/1/2021 — 4/2/2021",
    icon: "bi-briefcase",
    certificate: null
  },
  {
    name: "The American University in Cairo",
    desc: "PRMG-1000: Fundamentals of Project Management. Online training.",
    year: "27/9/2020 — 30/9/2020",
    icon: "bi-kanban",
    certificate: null
  },
  {
    name: "West Delta Electricity Production Company",
    desc: "Field study of the station location and its operating units, with practical training.",
    year: "August 2020",
    icon: "bi-building",
    certificate: "/certificates/west_delta_company.pdf"
  },
  {
    name: "Titan Company — e-SDP",
    desc: "Virtual Student Development Program (e-SDP), 52 virtual training hours. Gained experience in Safety, Cement Process, PM, Artificial Intelligence, Finance for Non-Financials, and HR for Non-HR.",
    year: "12/7/2020 — 29/7/2020",
    icon: "bi-mortarboard",
    certificate: null
  },
  {
    name: "Alexandria Electricity Distribution Company",
    desc: "Summer training program for university students. Learned electricity distribution lines from transformers to consumers, types of cables, protection systems, solar cells, and how to connect them.",
    year: "20/7/2019 — 8/8/2019",
    icon: "bi-diagram-3",
    certificate: "/certificates/alex_electric_company.pdf"
  },
  {
    name: "Engineers Syndicate",
    desc: "Training course in Printed Circuit Boards (PCB).",
    year: "2/2/2019 — 13/2/2019",
    icon: "bi-motherboard",
    certificate: "/certificates/pcb-certificate.pdf"
  }
];

export default function Training() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="training" className="section-padding">
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">03 / TRAINING</span>
            <h2>Continuous learning.</h2>
            <p>Technical, energy and professional development programs.</p>
          </div>

          <div className="row g-4">
            {trainings.map((training, i) => (
              <div className="col-md-6 col-lg-3" key={`${training.name}-${training.year}`}>
                <button
                  type="button"
                  className={`training-card training-card-button reveal delay-${(i % 4) + 1}`}
                  onClick={() => setSelected(training)}
                  aria-label={`View details for ${training.name}`}
                >
                  <div className="training-icon">
                    <i className={`bi ${training.icon}`}></i>
                  </div>
                  <span className="training-year">{training.year}</span>
                  <h3>{training.name}</h3>
                  <p>{training.desc}</p>
                  <span className="card-arrow">
                    <i className="bi bi-arrow-up-right"></i>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className="certificate-modal" onClick={() => setSelected(null)}>
          <div
            className="certificate-modal-content"
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

            <div className="certificate-modal-header">
              <div className="training-icon">
                <i className={`bi ${selected.icon}`}></i>
              </div>
              <div>
                <span className="training-year">{selected.year}</span>
                <h3>{selected.name}</h3>
              </div>
            </div>

            <div className="training-description">
              <h4>Description</h4>
              <p>{selected.desc}</p>
            </div>

            {selected.certificate && (
              <div className="certificate-section">
                <h4>Certificate</h4>
                <div className="certificate-viewer">
                  <iframe
                    src={selected.certificate}
                    title={`${selected.name} certificate`}
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
