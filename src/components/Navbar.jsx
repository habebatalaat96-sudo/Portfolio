import React from "react";
export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top glass-nav">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <span className="brand-dot"></span> Ahmed Talaat
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {["Home", "About", "Experience", "Training", "Skills", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a className="btn btn-primary-custom px-3" href="/Ahmed-Talaat-Ahmed-CV.docx" download>
                <i className="bi bi-download me-1"></i> CV
              </a>
            </li>
            <li className="nav-item">
              <button
                className="theme-btn"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                <i className={`bi ${darkMode ? "bi-sun" : "bi-moon-stars"}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}