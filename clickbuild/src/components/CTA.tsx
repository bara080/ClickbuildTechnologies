"use client";
export default function CTA() {
  const openContactForm = () => {
    alert("Booking system is on the WAY!");
  };
  return (
    <section className="cta-section" id="contact">
      <div className="cta-content">
        <h2>Ready to Transform Your B2B Connections?</h2>
        <p>
          Join thousands of businesses already leveraging ClickBuild to grow
          their network
        </p>
        <button className="cta-button" onClick={openContactForm}>
          Schedule a Demo
        </button>
      </div>
    </section>
  );
}
