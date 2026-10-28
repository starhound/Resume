"use client";

export default function ContactCard() {
  return (
    <header className="contact-card">
      <h1>Wesley Reid</h1>
      <p className="professional-title">Senior Software Engineer | AI &amp; Cloud Systems</p>
      <ul className="contact-links" aria-label="Contact information">
        <li><a href="tel:+17276451930">727-645-1930</a></li>
        <li><a href="mailto:wesleyreid0@gmail.com">wesleyreid0@gmail.com</a></li>
        <li><a href="https://linkedin.com/in/starhound">linkedin.com/in/starhound</a></li>
        <li><a href="https://github.com/starhound">github.com/starhound</a></li>
      </ul>
      <div className="contact-actions no-print">
        <button type="button" onClick={() => window.print()}>Print / Save PDF</button>
        <a className="button-link" href="https://calendly.com/wesley_reid/video-conference" target="_blank" rel="noopener noreferrer">
          Schedule a Meeting
        </a>
      </div>
    </header>
  );
}
