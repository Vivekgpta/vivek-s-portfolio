import MainLayout from "../layouts/MainLayout";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      price: "Starting ₹7,999",
      description:
        "Modern, responsive and SEO-friendly websites designed to grow your business online.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "WhatsApp Integration",
        "Fast Loading Speed",
        "Contact Forms",
      ],
    },
    {
      title: "Magazine Design",
      price: "Starting ₹1,499",
      description:
        "Creative magazine designs for colleges, birthdays, anniversaries and special events.",
      features: [
        "Premium Layouts",
        "Custom Themes",
        "Photo Editing",
        "Print Ready Files",
        "Unlimited Revisions",
      ],
    },
    {
      title: "Sketch Portraits",
      price: "Starting ₹499",
      description:
        "Hyper-realistic hand-drawn pencil portraits crafted with attention to detail.",
      features: [
        "Custom Sizes",
        "High Detail Artwork",
        "Premium Paper",
        "Gift Packaging",
        "Framing Available",
      ],
    },
  ];

  return (
    <MainLayout>
      <section className="services-page">

        <div className="services-hero">
          <span>MY SERVICES</span>

          <h1>
            Creative Solutions For
            Modern Businesses & Individuals
          </h1>

          <p>
            I help businesses establish a strong online presence,
            create memorable magazine designs and craft stunning
            sketch portraits that leave a lasting impression.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-top">
                <h2>{service.title}</h2>

                <span>{service.price}</span>
              </div>

              <p>{service.description}</p>

              <ul>
                {service.features.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>

              <button>Get Started</button>

            </div>
          ))}
        </div>

        <section className="process">

          <h2>How I Work</h2>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Discussion</h3>
              <p>Understanding your goals and requirements.</p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Planning</h3>
              <p>Creating strategy, design and project roadmap.</p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Execution</h3>
              <p>Development, designing and quality assurance.</p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Delivery</h3>
              <p>Final delivery with support and revisions.</p>
            </div>

          </div>

        </section>

        <section className="service-cta">

          <h2>
            Ready To Start Your Project?
          </h2>

          <p>
            Let's discuss your ideas and build something amazing together.
          </p>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
          >
            Book Free Consultation
          </a>

        </section>

      </section>
    </MainLayout>
  );
}