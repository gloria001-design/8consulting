import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/Header.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About us", to: "/about" },
  { label: "Service", to: "*" },
  { label: "Contact", to: "*" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header>
      <div className="nav">
        <div className="nav-left">
          <img src="https://i.postimg.cc/KYtnyChw/Brand-(1).png" alt="8th Consulting" />
        </div>

        <div className={`nav-middle${open ? " open" : ""}`} id="main-menu">
          <ul>
            {LINKS.map(({ label, to }) => (
              <li key={label}>
                {/* NavLink adds the "active" class (and aria-current) automatically */}
                <NavLink to={to} end={to === "/"} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        
        </div>

        <div className="nav-right">
          <button className="btn">Register Now</button>
          <button
            type="button"
            className={`menu-toggle${open ? " open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;