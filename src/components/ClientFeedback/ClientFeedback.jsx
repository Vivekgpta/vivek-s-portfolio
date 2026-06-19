import "./ClientFeedback.css";

export default function ClientFeedback() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      review:
        "Vivek delivered a modern website that helped improve our online presence. Professional and easy to work with.",
    },
    {
      name: "Priya Verma",
      role: "Magazine Client",
      review:
        "The magazine design exceeded expectations. Creative layouts and attention to detail were outstanding.",
    },
    {
      name: "Aman Singh",
      role: "Sketch Portrait Client",
      review:
        "The portrait was incredibly realistic. One of the best gifts I've ever given to my family.",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonial-header">
        <span>Client Testimonials</span>

        <h2>What My Clients Say</h2>

        <p>
          Trusted by businesses, students and families
          for quality work and exceptional experiences.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="quote">
              ★★★★★
            </div>

            <p className="review">
              "{item.review}"
            </p>

            <div className="client-info">
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}