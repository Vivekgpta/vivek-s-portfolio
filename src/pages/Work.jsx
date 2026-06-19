import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./Work.css";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      category: "Websites",
      title: "CBSE School Website",
      desc: "Modern responsive school website.",
      image: "https://picsum.photos/600/400?1",
    },
    {
      category: "Websites",
      title: "Restaurant Website",
      desc: "Premium restaurant booking platform.",
      image: "https://picsum.photos/600/400?2",
    },
    {
      category: "Websites",
      title: "Gym Landing Page",
      desc: "Lead generation website.",
      image: "https://picsum.photos/600/400?3",
    },
    {
      category: "Websites",
      title: "Portfolio Website",
      desc: "Personal branding portfolio.",
      image: "https://picsum.photos/600/400?4",
    },

    {
      category: "Magazines",
      title: "College Magazine",
      desc: "Creative annual publication.",
      image: "https://picsum.photos/600/400?5",
    },
    {
      category: "Magazines",
      title: "Farewell Magazine",
      desc: "Premium farewell memories book.",
      image: "https://picsum.photos/600/400?6",
    },
    {
      category: "Magazines",
      title: "Birthday Magazine",
      desc: "Custom celebration magazine.",
      image: "https://picsum.photos/600/400?7",
    },
    {
      category: "Magazines",
      title: "Anniversary Magazine",
      desc: "Luxury anniversary design.",
      image: "https://picsum.photos/600/400?8",
    },

    {
      category: "Sketches",
      title: "Couple Portrait",
      desc: "Hyper realistic graphite sketch.",
      image: "https://picsum.photos/600/400?9",
    },
    {
      category: "Sketches",
      title: "Family Portrait",
      desc: "Detailed hand-drawn artwork.",
      image: "https://picsum.photos/600/400?10",
    },
    {
      category: "Sketches",
      title: "Pet Portrait",
      desc: "Custom pet artwork.",
      image: "https://picsum.photos/600/400?11",
    },
    {
      category: "Sketches",
      title: "Celebrity Sketch",
      desc: "Professional realistic sketch.",
      image: "https://picsum.photos/600/400?12",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <MainLayout>
      <section className="work-page">

        <div className="work-hero">
          <span>Portfolio</span>

          <h1>
            Selected Projects &
            Creative Work
          </h1>

          <p>
            A collection of websites, magazines and
            sketch portraits crafted for clients.
          </p>

          <div className="work-stats">
            <div>
              <h3>20+</h3>
              <span>Websites</span>
            </div>

            <div>
              <h3>30+</h3>
              <span>Magazines</span>
            </div>

            <div>
              <h3>120+</h3>
              <span>Sketches</span>
            </div>
          </div>
        </div>

        <div className="filter-buttons">
          {["All", "Websites", "Magazines", "Sketches"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "active"
                    : ""
                }
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <div className="work-card" key={index}>

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="work-overlay">

                <span className="category-badge">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="work-buttons">
                  <button>
                    View Details
                  </button>

                  <button className="secondary">
                    Preview
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        <section className="work-cta">

          <h2>
            Have A Project In Mind?
          </h2>

          <p>
            Let's create something extraordinary
            together.
          </p>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
          >
            Start Your Project
          </a>

        </section>

      </section>
    </MainLayout>
  );
}