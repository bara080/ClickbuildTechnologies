"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import clickBuildIcon from "@/public/ClickBuild.png";

export default function NavBar() {
  const onScrollTo = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <nav id="navbar">
      <div className="nav-links gap-0.5">
        <Image
          src="/ClickBuildIcon.jpg"
          alt="ClickBuild Technologies logo"
          width={40}
          height={40}
          priority
        />
        <div className="logo">ClickBuild Tech</div>
      </div>
      <div className="nav-links">
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
    </nav>
  );
}
