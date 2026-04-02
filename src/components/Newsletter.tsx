export default function Newsletter() {
  return (
    <section className="cta-banner" id="cta-section">
      <div className="cta-content">
        <h2>Subscribe to our newsletter</h2>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="cta-input-wrap">
          <input type="email" placeholder="Email" className="cta-input" id="cta-email-input" />
          <button className="btn btn-primary" id="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
