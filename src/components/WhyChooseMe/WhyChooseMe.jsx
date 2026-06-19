import "./WhyChooseMe.css";

import {
  FaRocket,
  FaPalette,
  FaClock,
  FaHandshake,
} from "react-icons/fa";

export default function WhyChooseMe() {
  const features = [
    {
      icon: <FaRocket />,
      title: "Modern Development",
      desc: "Fast, responsive and SEO-friendly websites built using modern technologies.",
    },
    {
      icon: <FaPalette />,
      title: "Creative Design",
      desc: "Premium visual experiences that combine aesthetics with functionality.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      desc: "Projects delivered with attention to detail and within agreed timelines.",
    },
    {
      icon: <FaHandshake />,
      title: "Client First Approach",
      desc: "Clear communication, transparency and long-term client relationships.",
    },
  ];

  return (
    <section className="why">

      <div className="why-header">

        <span>Why Clients Choose Me</span>

        <h2>
          More Than Just A Freelancer
        </h2>

        <p>
          I combine technical expertise, creative thinking and
          artistic craftsmanship to deliver experiences that
          leave a lasting impact.
        </p>

      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}