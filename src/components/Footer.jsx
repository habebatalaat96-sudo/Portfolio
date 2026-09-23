import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© {new Date().getFullYear()} Ahmed Talaat Ahmed</span>
        <span>Electrical Engineer • Alexandria, Egypt</span>
      </div>
    </footer>
  );
}