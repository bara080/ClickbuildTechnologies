"use client";
import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    const opts: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    }, opts);
    document.querySelectorAll(".fade-in").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openDemo = (product: "titos" | "crm") => {
    // In production, route to a modal or CRM link
    alert(
      `Thank you for your interest in ${
        product === "titos" ? "Titos Mobile App" : "CRM SaaS Platform"
      }!\n\nOur team will contact you shortly to schedule a personalized demo.`
    );
  };

  return (
    <section className="why-section" id="products">
      <div className="section-header fade-in">
        <h2>Why ClickBuild Technologies?</h2>
        <p>Mobile and SaaS Applications for all your business needs</p>
      </div>
      <div className="products-grid">
        <div className="product-card fade-in">
          <span className="product-type">MOBILE APP</span>
          <div className="product-icon">📱</div>
          <h3>Zinga APP</h3>
          <p>
            Empower your workforce with our powerful mobile application designed
            for modern businesses. Access everything you need, anywhere,
            anytime.
          </p>
          <ul className="feature-list">
            <li>Native iOS and Android experience</li>
            <li>Real-time synchronization</li>
            <li>Offline-first architecture</li>
            <li>Secure biometric authentication</li>
            <li>Push notifications and alerts</li>
            <li>Seamless CRM integration</li>
          </ul>
          <button className="product-cta" onClick={() => openDemo("titos")}>
            Learn More →
          </button>
        </div>

        <div className="product-card fade-in">
          <span className="product-type">SAAS PLATFORM</span>
          <div className="product-icon">☁️</div>
          <h3>CRM</h3>
          <p>
            Transform your customer relationships with our comprehensive
            cloud-based CRM platform. Manage, analyze, and grow your business
            with ease.
          </p>
          <ul className="feature-list">
            <li>360° customer view dashboard</li>
            <li>Sales pipeline management</li>
            <li>Advanced analytics & reporting</li>
            <li>Marketing automation tools</li>
            <li>Team collaboration features</li>
            <li>API-first architecture</li>
          </ul>
          <button className="product-cta" onClick={() => openDemo("crm")}>
            Learn More →
          </button>
        </div>

        {/* Agentic AI CRM Card */}
        <div className="product-card fade-in">
          <span className="product-type">AGENTIC AI</span>
          <div className="product-icon">🤖</div>
          <h3>AI CRM Copilot</h3>
          <p>
            An agentic CRM copilot that plans, executes, and learns—from
            prospecting to follow-ups—using tools, memory, and your data. Reduce
            manual ops; boost pipeline velocity.
          </p>

          <ul className="feature-list">
            <li>Autonomous lead triage & routing (SLA-aware)</li>
            <li>Multi-step outreach (email/SMS) with auto A/B learning</li>
            <li>RAG over CRM + docs (secure, role-aware)</li>
            <li>Calendar booking & task creation via tool use</li>
            <li>Playbooks as graphs (multi-agent handoffs)</li>
            <li>Guardrails, approvals, and audit trail</li>
          </ul>

          <button
            className="product-cta"
            onClick={() => startAgentDemo("ai-crm-copilot")}
          >
            Run AI Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
