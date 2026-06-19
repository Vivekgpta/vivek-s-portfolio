import "./CTA.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-glow"></div>

      <div className="cta-content">

        <span className="cta-badge">
          Ready To Start?
        </span>

        <h2>
          Let's Turn Your Ideas Into
          <span> Reality</span>
        </h2>

        <p>
          Whether you need a modern website, a premium magazine
          design, or a hyper-realistic sketch portrait, I'm here
          to create something truly exceptional for you.
        </p>

        <div className="cta-buttons">

          <Link
            to="/contact"
            className="cta-primary"
          >
            Start Your Project
            <FaArrowRight />
          </Link>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
            className="cta-secondary"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}