// src/components/NavBar.tsx
"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const onScrollTo = useCallback((s: string) => {
    document
      .querySelector(s)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }, []);

  useEffect(() => {
    const n = document.getElementById("navbar");
    const onScroll = () =>
      n ? n.classList.toggle("scrolled", window.scrollY > 50) : void 0;
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav id="navbar">
      <div className="nav-inner">
        <a className="logo-wrap" href="/" aria-label="ClickBuild home">
          <div className="logo-container">
            <Image
              src="/ClickBuildIcon.jpg" // <-- exact case-sensitive path
              alt="ClickBuild Technologies logo"
              width={40}
              height={40}
              priority
            />
            <div className="logo">ClickBuild Tech</div>
          </div>
        </a>

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
