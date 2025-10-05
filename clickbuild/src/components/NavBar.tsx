"use client";
import { useCallback, useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const onScrollTo = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // close mobile menu after click
  }, []);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu is open (mobile)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <nav id="navbar">
      <div className="nav-inner">
        <div className="logo-wrap">
          <div className="logo-container">
            <div className="logo">ClickBuild Technologies</div>
            <div className="company-name">ClickBuild Technology</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="nav-links desktop-only">
          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo("#products");
            }}
          >
            Products
          </a>
          <a
            href="#why"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo("#why");
            }}
          >
            Why ClickBuild?
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onScrollTo("#contact");
            }}
          >
            Contact
          </a>
          <button className="nav-cta" onClick={() => onScrollTo("#contact")}>
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="mobile-toggle"
          onClick={() => setOpen((p) => !p)}
        >
          <span className={`hamburger ${open ? "is-active" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        <a
          href="#products"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo("#products");
          }}
        >
          Products
        </a>
        <a
          href="#why"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo("#why");
          }}
        >
          Why ClickBuild?
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onScrollTo("#contact");
          }}
        >
          Contact
        </a>
        <button className="nav-cta full" onClick={() => onScrollTo("#contact")}>
          Get Started
        </button>
      </div>
    </nav>
  );
}
