import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../../assets/img1.jpg";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-badge">
            Creative Developer & Artist
          </span>

          <h1>
            Building
            <span> Digital Experiences </span>
            That Drive Growth
          </h1>

          <p>
            I help businesses establish a strong online presence
            through modern websites, creative design, and premium
            digital experiences.
          </p>

          <div className="hero-buttons">

            <Link
              to="/work"
              className="primary-btn"
            >
              View Work
            </Link>

            <Link
              to="/contact"
              className="secondary-btn"
            >
              Hire Me
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Vivek Kumar"
          />

        </div>

      </div>

     

    </section>
  );
}