import React from "react";
const skills = [
  ["AutoCAD", "Design", "bi-rulers"],
  ["Revit", "Design", "bi-boxes"],
  ["DIALux evo", "Lighting", "bi-lightbulb"],
  ["ETAP", "Analysis", "bi-graph-up"],
  ["PVsyst", "Renewable", "bi-sun"],
  ["PVsol", "Renewable", "bi-solar-panel"],
  ["DIGSI 5", "Protection", "bi-shield-check"],
  ["SIMARIS design 10", "Electrical Design", "bi-diagram-3"],
  ["MATLAB", "Simulation", "bi-calculator"],
  ["Multisim", "Simulation", "bi-cpu"],
  ["S7 / TIA Portal", "PLC", "bi-gear-wide-connected"],
  ["Microsoft Office", "Productivity", "bi-file-earmark-spreadsheet"]
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding alt-section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">04 / SKILLS</span>
          <h2>Tools I work with.</h2>
        </div>

        <div className="row g-3">
          {skills.map(([name, category, icon], i) => (
            <div className="col-6 col-md-4 col-lg-3" key={name}>
              <div className={`skill-card reveal delay-${(i % 4) + 1}`}>
                <i className={`bi ${icon}`}></i>
                <div>
                  <strong>{name}</strong>
                  <small>{category}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mt-4">
          <div className="col-lg-6">
            <div className="soft-card reveal">
              <span className="eyebrow">PERSONAL SKILLS</span>
              <div className="tag-list">
                {["Problem Solving", "Adaptability", "Handling Pressure", "Self-Motivated", "Fast Learner", "Teamwork", "Communication", "Presentation & Negotiation"].map(x =>
                  <span key={x}>{x}</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="soft-card reveal delay-1">
              <span className="eyebrow">LANGUAGES</span>
              <div className="language-row"><strong>Arabic</strong><span>Mother Tongue</span></div>
              <div className="language-row"><strong>English</strong><span>Very Good — Speaking & Writing</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}