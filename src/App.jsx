
import { useState } from "react";
import "./App.css";

const profile = {
  name: "Manimegalai V",
  role: "Full Stack Developer",
  email: "your-email@example.com",
  github: "https://github.com/manimegalaikavin22-debug",
  linkedin: "https://linkedin.com/in/manimegalai-v-02a561327/",
};

const skills = [
  { name: "Java", category: "Programming", icon: "☕" },
  { name: "HTML & CSS", category: "Web Design", icon: "🌐" },
  { name: "JavaScript", category: "Programming", icon: "✳" },
  { name: "React", category: "Frontend", icon: "⚛" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Supabase", category: "Backend & Database", icon: "◈" },
];

const projects = [
  {
    number: "01",
    title: "HEALO AI",
    subtitle: "AI-powered medical assistant",
    description:
      "An AI healthcare assistant project designed to help users explore health information through an interactive web experience.",
    tags: ["Python", "Flask", "Gemini AI"],
    color: "project-lilac",
    icon: "✳",
    link: "https://healo-1.onrender.com",
    label: "View live project",
  },
  {
    number: "02",
    title: "SmartBasket AI",
    subtitle: "Smart grocery shopping",
    description:
      "A grocery shopping application concept featuring product discovery, shopping workflows, and AI-powered features.",
    tags: ["React", "Node.js", "Supabase"],
    color: "project-peach",
    icon: "🛒",
    link: profile.github + "/SmartBasket-AI",
    label: "View project",
  },
  {
    number: "03",
    title: "CareerArena AI",
    subtitle: "AI placement preparation",
    description:
      "An AI placement preparation platform concept for practicing mock interviews, group discussions, and communication skills.",
    tags: ["React", "JavaScript", "AI"],
    color: "project-blue",
    icon: "✧",
    link: profile.github,
    label: "Explore GitHub",
  },
  {
    number: "04",
    title: "CineVerse",
    subtitle: "Movie discovery experience",
    description:
      "A movie explorer application concept with movie search, details, favourites, and personal watchlists.",
    tags: ["React", "REST API", "LocalStorage"],
    color: "project-pink",
    icon: "▣",
    link: profile.github,
    label: "Explore GitHub",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hi Manimegalai,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSent(true);
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          M<span>.</span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>HOME</a>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#skills" onClick={closeMenu}>SKILLS</a>
          <a href="#projects" onClick={closeMenu}>PROJECTS</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            LET'S TALK <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              HELLO, I'M MANIMEGALAI
            </div>

            <h1>
              BUILDING
              <br />
              <span className="outline-word">DIGITAL</span>
              <br />
              EXPERIENCES<span className="period">.</span>
            </h1>

            <p className="hero-description">
              I'm a Computer Science Engineering student passionate about
              building thoughtful, user-friendly web applications with modern
              technologies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                VIEW MY WORK <span>→</span>
              </a>

              <a className="button button-light" href="#about">
                MORE ABOUT ME <span>↓</span>
              </a>
            </div>

            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <span>⌘</span> GitHub
              </a>
              <span className="social-divider" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="linkedin-letter">in</span> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-sparkle sparkle-one">✳</div>
            <div className="visual-sparkle sparkle-two">✦</div>

            <div className="hero-portrait">
              <div className="portrait-initial">M<span>.</span></div>
              <div className="portrait-bottom">
                <span>CURIOUS MIND</span>
                <span>CREATIVE BUILDER</span>
              </div>
            </div>

            <div className="floating-note note-top">
              <span className="note-icon">⌘</span>
              <span>
                <small>MY FOCUS</small>
                <strong>Full Stack Development</strong>
              </span>
            </div>

            <div className="floating-note note-bottom">
              <span className="note-check">✓</span>
              <span>
                <small>CURRENTLY</small>
                <strong>Learning & Building</strong>
              </span>
            </div>

            <div className="vertical-label">
              DESIGN · DEVELOP · DISCOVER
            </div>
          </div>
        </section>

        <section className="stats-strip section-wrap">
          <div className="stat-item">
            <span className="stat-icon">♧</span>
            <strong>2024–28</strong>
            <small>ENGINEERING JOURNEY</small>
          </div>

          <div className="stat-item">
            <span className="stat-icon">▧</span>
            <strong>04<span>+</span></strong>
            <small>PROJECT CONCEPTS</small>
          </div>

          <div className="stat-item">
            <span className="stat-icon">⌘</span>
            <strong>06<span>+</span></strong>
            <small>CORE TECHNOLOGIES</small>
          </div>

          <div className="stat-item">
            <span className="stat-icon">✧</span>
            <strong>∞</strong>
            <small>IDEAS TO EXPLORE</small>
          </div>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-title-row">
            <div>
              <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
              <h2>
                Curious by nature.
                <br />
                <span>Developer by passion.</span>
              </h2>
            </div>

            <p className="section-side-note">
              Turning ideas into useful, accessible, and memorable digital
              experiences.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card about-main">
              <span className="about-card-icon">♧</span>
              <span className="card-label">MY JOURNEY</span>
              <h3>Learning today.<br />Building for tomorrow.</h3>
              <p>
                I'm pursuing a B.E. in Computer Science Engineering at
                K.S.R. College of Engineering. I enjoy exploring how
                technology can solve real-world problems and creating
                projects that bring ideas to life.
              </p>
              <div className="education-tag">
                B.E. COMPUTER SCIENCE · 2024–2028
              </div>
            </article>

            <article className="about-card about-small">
              <span className="about-card-icon">⌘</span>
              <span className="card-label">WHAT I DO</span>
              <h3>Web development</h3>
              <p>
                From responsive interfaces to connecting applications with
                data and APIs.
              </p>
              <div className="mini-tags">
                <span>Frontend</span>
                <span>Full Stack</span>
              </div>
            </article>

            <article className="about-card about-small">
              <span className="about-card-icon">✧</span>
              <span className="card-label">MY MINDSET</span>
              <h3>Always growing</h3>
              <p>
                Learning by doing, improving through feedback, and building
                one project at a time.
              </p>
              <div className="mini-tags">
                <span>Curiosity</span>
                <span>Consistency</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <div className="section-title-row">
            <div>
              <span className="section-kicker">02 / MY TOOLKIT</span>
              <h2>Skills & <span>technologies.</span></h2>
            </div>

            <p className="section-side-note">
              Tools I use to learn, experiment, and bring my ideas to life.
            </p>
          </div>

          <div className="skills-layout">
            <article className="skills-intro">
              <div className="skills-orbit">✳</div>
              <h3>My developer toolkit</h3>
              <p>
                I'm developing a strong foundation in programming, frontend
                development, and databases while building practical projects.
              </p>
              <a href="#projects" className="inline-link">
                See what I'm building <span>↗</span>
              </a>
            </article>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.name}>
                  <span className={`skill-icon skill-icon-${index % 4}`}>
                    {skill.icon}
                  </span>
                  <strong>{skill.name}</strong>
                  <small>{skill.category}</small>
                  <span className="skill-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>

          <div className="tools-note">
            <span>✧</span>
            <p>
              <strong>Currently exploring</strong> better UI design, API
              integration, and building complete end-to-end applications.
            </p>
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <div className="section-title-row">
            <div>
              <span className="section-kicker">03 / SELECTED WORK</span>
              <h2>Ideas made <span>real.</span></h2>
            </div>

            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              MORE ON GITHUB <span>↗</span>
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.color}`}
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number} / PROJECT
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    ↗
                  </a>
                </div>

                <div className="project-art">
                  <div className="project-art-orbit" />
                  <div className="project-art-icon">{project.icon}</div>
                  <span className="project-art-word">{project.title}</span>
                  <div className="project-art-dot dot-a" />
                  <div className="project-art-dot dot-b" />
                </div>

                <div className="project-details">
                  <span className="project-subtitle">{project.subtitle}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.label} <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section process-section">
          <div className="section-title-row">
            <div>
              <span className="section-kicker">04 / HOW I WORK</span>
              <h2>From idea to <span>impact.</span></h2>
            </div>
          </div>

          <div className="process-grid">
            <article className="process-step">
              <span>01</span>
              <div className="process-icon">✧</div>
              <h3>Discover</h3>
              <p>
                Understand the problem, explore possibilities, and define a
                clear goal.
              </p>
            </article>

            <article className="process-step">
              <span>02</span>
              <div className="process-icon">▧</div>
              <h3>Plan & design</h3>
              <p>
                Organize ideas into a clear structure and thoughtful user
                experience.
              </p>
            </article>

            <article className="process-step">
              <span>03</span>
              <div className="process-icon">⌘</div>
              <h3>Build</h3>
              <p>
                Turn concepts into functional applications using modern
                technologies.
              </p>
            </article>

            <article className="process-step">
              <span>04</span>
              <div className="process-icon">✓</div>
              <h3>Improve</h3>
              <p>
                Test, learn from feedback, and keep making the experience
                better.
              </p>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-decor decor-one" />
          <div className="contact-decor decor-two" />

          <div className="contact-copy">
            <span className="section-kicker">05 / LET'S CONNECT</span>
            <h2>
              Have an idea?
              <br />
              <span>Let's build something.</span>
            </h2>
            <p>
              I'm open to connecting with fellow developers, exploring
              opportunities, and collaborating on interesting projects.
            </p>

            <a className="button button-dark" href={`mailto:${profile.email}`}>
              ✉ GET IN TOUCH <span>↗</span>
            </a>

            <div className="contact-socials">
              <a href={profile.github} target="_blank" rel="noreferrer">
                ⌘ GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="linkedin-letter">in</span> LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a message</h3>
            <p>
              Have a question or an opportunity? I'd love to hear from you.
            </p>

            <label>
              Your name
              <input
                required
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                  setSent(false);
                }}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Your email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => {
                  setForm({ ...form, email: event.target.value });
                  setSent(false);
                }}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Message
              <textarea
                required
                rows="3"
                value={form.message}
                onChange={(event) => {
                  setForm({ ...form, message: event.target.value });
                  setSent(false);
                }}
                placeholder="Tell me what you have in mind..."
              />
            </label>

            <button className="button button-primary submit-button" type="submit">
              {sent ? "OPENING EMAIL..." : "SEND MESSAGE"} <span>➤</span>
            </button>

            {sent && (
              <small className="form-hint">
                Your email app should open with your message prepared. Send
                the email from there.
              </small>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home">
          M<span>.</span>
        </a>
        <p>Designed with intention. Built with curiosity.</p>
        <a href="#home" className="back-top">
          BACK TO TOP <span>↑</span>
        </a>
        <span className="copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </footer>
    </>
  );
}

export default App;
