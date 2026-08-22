import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-light" id="top">
        <div className="orb one"></div>
        <div className="orb two"></div>
        <div className="hero-inner">
          <div className="specialist-badge">
            <i></i> Dubai-based travel &amp; tour specialists <span></span> 1-to-1 personal consultation
          </div>
          <h1>
            Your journey,
            <br />
            <em>made beautifully simple.</em>
          </h1>
          <p className="intro-text">
            Welcome to Eshaare Tour. We are a Dubai-based tour package company preparing to launch a range of carefully curated travel experiences. Our team is currently designing unique journeys to help you explore the best of Dubai, and we look forward to welcoming you soon.
          </p>
          <div className="hero-ctas">
            <a href="#enquiry" className="pill primary">
              Plan My Journey <span>→</span>
            </a>
            <a href="#packages" className="pill secondary">
              Explore Planned Packages
            </a>
          </div>
        </div>
      </section>

      {/* Planned Packages Section */}
      <section className="section-wrap" id="packages">
        <div className="section-title">
          <div>
            <span>WHAT WE DO</span>
            <h2>Travel, without the uncertainty.</h2>
          </div>
          <p>
            A sneak peek at the curated travel experiences we are currently planning for our launch:
          </p>
        </div>
        <div className="service-grid">
          <article className="glass service">
            <div className="ghost">01</div>
            <i>▣</i>
            <h3>Desert Safaris &amp; Dunes</h3>
            <p>
              Immersive desert experiences, camel treks, sandboarding, and stargazing in the dunes.
            </p>
          </article>
          <article className="glass service">
            <div className="ghost">02</div>
            <i>◎</i>
            <h3>Modern City Explorations</h3>
            <p>
              Guided itineraries exploring Dubai's modern wonders, architectural marvels, and iconic landmarks.
            </p>
          </article>
          <article className="glass service">
            <div className="ghost">03</div>
            <i>✈</i>
            <h3>Historic Dubai &amp; Creek Tours</h3>
            <p>
              Step back in time with cultural walks through historic neighborhoods and traditional abra crossings.
            </p>
          </article>
          <article className="glass service">
            <div className="ghost">04</div>
            <i>◆</i>
            <h3>Tailored Private Journeys</h3>
            <p>
              Custom-made, premium itineraries crafted specifically to match your travel preferences and pace.
            </p>
          </article>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="section-wrap" id="enquiry">
        <div className="section-title centered">
          <div>
            <span>GET IN TOUCH</span>
            <h2>Start a Conversation</h2>
            <p>
              Have questions or want to inquire about our upcoming tours? Fill out our pre-launch enquiry form below:
            </p>
          </div>
        </div>
        <div
          className="glass"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "12px",
            borderRadius: "28px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc0EcaYqBnvPZ24iw-d6E736syWGROtOAUbJEPrslLQ5ezHWg/viewform?embedded=true"
            width="100%"
            height="650"
            title="Eshaare Tour Enquiry Form"
            loading="lazy"
            style={{ border: "none", borderRadius: "18px", background: "white" }}
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
}
