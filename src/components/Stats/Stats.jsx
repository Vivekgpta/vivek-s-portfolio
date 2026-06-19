import "./Stats.css";
import AnimatedSection from "../AnimatedSection/AnimatedSection";
import { FaLaptopCode, FaBookOpen, FaPencilAlt } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaLaptopCode />,
      number: "20+",
      title: "Business Websites",
      desc: "Modern, SEO-friendly websites built for local businesses.",
    },
    {
      icon: <FaBookOpen />,
      number: "30+",
      title: "Magazine Designs",
      desc: "Creative magazines for colleges, birthdays and events.",
    },
    {
      icon: <FaPencilAlt />,
      number: "120+",
      title: "Sketch Portraits",
      desc: "Hand-crafted hyper-realistic portraits for happy clients.",
    },
  ];

  return (
    <AnimatedSection>
      <section className="stats">
        <div className="stats-header">
          <span>Services</span>
          <h2>Delivering Creative Solutions Across Digital & Art</h2>

          <p>
            From modern websites to premium magazine designs and hyper-realistic
            sketch portraits, every project is crafted with creativity,
            precision and attention to detail.
          </p>
        </div>

        <div className="stats-container">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon">{item.icon}</div>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
