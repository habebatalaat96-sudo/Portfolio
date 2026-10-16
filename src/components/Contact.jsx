import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-box reveal">
          <div>
            <span className="eyebrow">05 / CONTACT</span>
            <h2>Let's connect.</h2>
            <p>Interested in discussing an electrical engineering opportunity or project?</p>
          </div>

          <div className="contact-links">
            <a href="mailto:mhamedhasanqu500@gmail.com">
              <i className="bi bi-envelope-fill"></i>
              <span>mohamedhasanqu500@gmail.com</span>
            </a>
            <a href="tel:+201272355369">
              <i className="bi bi-telephone-fill"></i>
              <span>+20 127 235 5388</span>
            </a>
            <a href="https://www.linkedin.com/in/mohamedhasan/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
