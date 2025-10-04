"use client";
export default function Hero() {
  const scrollTo = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="bg-decoration">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
      </div>
      <div className="hero-grid">
        <div className="hero-content">
          <h1>
            <span className="gradient-text">Bridge the Gap</span>
            <br />
            Between Services & Clients
          </h1>
          <p>
            The ultimate B2B connectivity platform that seamlessly connects
            service providers with clients across industry verticals. One click
            to endless possibilities.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollTo("#contact")}
            >
              Request Demo
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollTo("#products")}
            >
              Explore Products
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-container">
            <div className="floating-card card-1">
              <div className="card-icon">📱</div>
              <div className="card-title">Mobile First</div>
              <div className="card-desc">Native apps for iOS & Android</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">☁️</div>
              <div className="card-title">Cloud SaaS</div>
              <div className="card-desc">Scalable enterprise solutions</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🔗</div>
              <div className="card-title">Connected</div>
              <div className="card-desc">Seamless integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
