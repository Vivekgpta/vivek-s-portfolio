import MainLayout from "../layouts/MainLayout";
import "./About.css";
import aboutImage from "../assets/profile.jpg";

export default function About() {
  return (
    <MainLayout>
      <section className="about-page">

        {/* HERO */}
        <div className="about-hero">

          <span>ABOUT ME</span>

          <h1>
            Creative Developer,
            Designer & Artist
          </h1>

          <p>
            Building modern digital experiences and creating
            artistic works that help businesses and individuals
            stand out.
          </p>

        </div>

        {/* PROFILE */}

        <div className="about-content">

          <div className="about-image">

            <img
              src={aboutImage}
              alt="Vivek Kumar"
            />

          </div>

          <div className="about-text">

            <h2>
              Hi, I'm Vivek Kumar 👋
            </h2>

            <p>
              I'm a passionate freelance developer and artist
              from India specializing in modern websites,
              creative magazine designs and hyper-realistic
              sketch portraits.
            </p>

            <p>
              My goal is to transform ideas into meaningful
              digital and creative experiences that leave
              a lasting impression.
            </p>

            <div className="about-tags">

              <span>Creative Thinker</span>

              <span>Problem Solver</span>

              <span>Growth Mindset</span>

            </div>

          </div>

        </div>

        {/* EXPERIENCE */}

        <section className="experience-section">

          <div className="experience-card">
            <h2>20+</h2>
            <p>Business Websites Delivered</p>
          </div>

          <div className="experience-card">
            <h2>30+</h2>
            <p>Magazine Designs Created</p>
          </div>

          <div className="experience-card">
            <h2>120+</h2>
            <p>Sketch Portraits Completed</p>
          </div>

          <div className="experience-card">
            <h2>100%</h2>
            <p>Client Satisfaction</p>
          </div>

        </section>

        {/* SKILLS */}

        <section className="skills-section">

          <h2>Skills & Technologies</h2>

          <div className="skills-grid">

            <div className="skill-card">React</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">HTML5</div>
            <div className="skill-card">CSS3</div>
            <div className="skill-card">Tailwind CSS</div>
            <div className="skill-card">Git & GitHub</div>
            <div className="skill-card">UI/UX Design</div>
            <div className="skill-card">Magazine Design</div>
            <div className="skill-card">Sketch Art</div>

          </div>

        </section>

        {/* EXPERTISE */}

        <section className="expertise">

          <h2>What I Do Best</h2>

          <div className="expertise-grid">

            <div className="expertise-card">

              <h3>Website Development</h3>

              <p>
                Building modern, responsive and SEO-friendly
                websites that help businesses grow online.
              </p>

            </div>

            <div className="expertise-card">

              <h3>Magazine Design</h3>

              <p>
                Creating engaging magazine layouts for
                colleges, events and celebrations.
              </p>

            </div>

            <div className="expertise-card">

              <h3>Sketch Portraits</h3>

              <p>
                Hyper-realistic hand-drawn portraits
                crafted with attention to every detail.
              </p>

            </div>

          </div>

        </section>

        {/* JOURNEY */}

        <section className="journey-section">

          <h2>My Journey</h2>

          <div className="timeline">

            <div className="timeline-item">

              <span>2020</span>

              <h3>Started Sketching</h3>

              <p>
                Developed artistic skills and started
                creating portrait artworks.
              </p>

            </div>

            <div className="timeline-item">

              <span>2022</span>

              <h3>Learning Web Development</h3>

              <p>
                Started building websites and learning
                modern frontend technologies.
              </p>

            </div>

            <div className="timeline-item">

              <span>2024</span>

              <h3>Freelance Projects</h3>

              <p>
                Worked with businesses and individuals
                on websites and creative projects.
              </p>

            </div>

            <div className="timeline-item">

              <span>2025+</span>

              <h3>Creative Developer</h3>

              <p>
                Combining development and design to
                deliver premium experiences.
              </p>

            </div>

          </div>

        </section>

       

        {/* CTA */}

        <section className="about-cta">

          <h2>
            Let's Create Something Amazing Together
          </h2>

          <p>
            Have a project in mind? Let's discuss your
            vision and bring it to life.
          </p>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
          >
            Start a Conversation
          </a>

        </section>

      </section>
    </MainLayout>
  );
}