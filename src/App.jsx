import "./App.css";

function App() {
  const skills = [
    {
      title: "Data Analysis",
      description: "Python, Pandas, NumPy, Matplotlib, Seaborn and EDA.",
      icon: "⌁",
    },
    {
      title: "Business Intelligence",
      description: "Power BI, DAX, Tableau and decision-focused dashboards.",
      icon: "◒",
    },
    {
      title: "SQL & Databases",
      description: "SQL, MySQL, querying, filtering and structured data.",
      icon: "⌘",
    },
    {
      title: "Reporting",
      description: "Advanced Excel, Power Query, Google Sheets and MIS reporting.",
      icon: "▤",
    },
    {
      title: "Data Quality",
      description: "Data cleaning, validation, consolidation and reconciliation.",
      icon: "✓",
    },
    {
      title: "Analytics",
      description: "KPI tracking, dashboarding, automation and root-cause analysis.",
      icon: "↗",
    },
  ];

  const projects = [
    {
      category: "DATA ANALYSIS",
      title: "Candy Sales Analysis",
      description:
        "Analyzed 100,000+ rows of sales data using Python and SQL to identify demand trends and resolve data-consistency issues.",
      tools: ["Python", "SQL", "Power BI"],
    },
    {
      category: "BUSINESS INTELLIGENCE",
      title: "Automobile Sales Dashboard",
      description:
        "Built a Power BI dashboard covering regional sales performance and key business metrics across regions and product lines.",
      tools: ["Power BI", "DAX", "Power Query"],
    },
  ];

  const experience = [
    {
      period: "03 / 2026 — PRESENT",
      type: "PROFESSIONAL EXPERIENCE",
      role: "MIS Executive",
      company: "HLFPPT",
      description:
        "Owning end-to-end MIS reporting across 30+ districts, producing daily, weekly and monthly reports for program monitoring and decision-making.",
      tags: ["MIS Reporting", "Data Validation", "KPI Tracking", "Dashboards"],
    },
    {
      period: "07 / 2025 — 02 / 2026",
      type: "INTERNSHIP",
      role: "Data Analyst Intern",
      company: "GvCloud Secure Pvt. Ltd.",
      description:
        "Cleaned and structured raw datasets using Python and SQL, performed exploratory data analysis and supported weekly and monthly reporting workflows.",
      tags: ["Python", "SQL", "Power Query", "Excel"],
    },
  ];

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          SV<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </div>

        <div className="nav-actions">
          <a
            href="/Sambhav_Verma_Resume_Updated.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume
          </a>

          <a href="#contact" className="nav-contact">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-grid"></div>

        <div className="hero-content">
          <div className="availability">
            <span></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="eyebrow">MIS EXECUTIVE · DATA ANALYST</p>

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hello">Hello, I'm</p>

              <h1>
                Sambhav
                <br />
                <span>Verma.</span>
              </h1>

              <p className="hero-description">
              I work with operational and business data to build accurate MIS reports, interactive dashboards and actionable insights. My work
              combines Python, SQL, Excel and Power BI to turn raw data into information that helps teams track performance and make better
              decisions.
              
              </p>

              <div className="hero-buttons">
                <a href="#work" className="primary-button">
                  Explore My Work 
                </a>

                <a
                  href="/Sambhav_Verma_Resume_Updated.pdf"
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume 
                </a>
              </div>

              <p className="scroll-text">SCROLL TO EXPLORE ↓</p>
            </div>

            {/* PROFILE */}
            <div className="profile-area">
              <div className="profile-frame">
                <div className="profile-accent"></div>

                <img
                  src="/Progile.jpeg"
                  alt="Sambhav Verma"
                  className="profile-image"
                />

                <div className="profile-info">
                  <span>DATA</span>
                  <strong>ANALYTICS</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <div className="section-label">ABOUT</div>

        <div className="about-layout">
          <div className="about-heading">
            <p>Turning</p>

            <h2>
              raw data
              <br />
              into <span>clarity.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-highlight">
              <span>INSIGHT</span>

              <p>
                Data becomes valuable when it helps people understand what is
                happening, why it is happening, and what action should follow .
              </p>
            </div>

            <p>
           I work across MIS reporting, data analysis, data validation and
    business intelligence. My focus is on turning operational data
    into accurate reports, meaningful dashboards and decision-ready
    information.

            </p>

            <p>
              My work involves preparing and validating data, tracking KPIs,
    analyzing trends and building recurring reports using tools such
    as Excel, SQL, Python and Power BI. I aim to make complex
    information easier for teams and stakeholders to understand and
    use.
            </p>

            <div className="about-stats">
              <div>
                <strong>30+</strong>
                <span>Districts supported</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>District teams</span>
              </div>

              <div>
                <strong>100K+</strong>
                <span>Sales records analyzed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills">
        <div className="section-label">TOOLKIT</div>

        <div className="section-heading-row">
          <div>
            <h2>
              Tools I use
              <br />
              to solve <span>problems.</span>
            </h2>
          </div>

          <p>
            A practical toolkit built around analysis, reporting,
            visualization and data-driven decision making.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-icon">{skill.icon}</div>

              <div className="skill-card-content">
                <h3>{skill.title}</h3>

                <p>{skill.description}</p>
              </div>

              <div className="skill-arrow"></div>
            </article>
          ))}
        </div>

        <div className="tech-strip">
          <span>EXCEL</span>
          <span>POWER BI</span>
          <span>TABLEAU</span>
          <span>SQL</span>
          <span>MYSQL</span>
          <span>PYTHON</span>
          <span>PANDAS</span>
          <span>NUMPY</span>
          <span>MATPLOTLIB</span>
          <span>SEABORN</span>
          <span>POWER QUERY</span>
          <span>DAX</span>
          <span>GOOGLE SHEETS</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="work-section" id="work">
        <div className="section-label">SELECTED WORK</div>

        <div className="section-heading-row">
          <h2>
            Work that shows
            <br />
            how I <span>think.</span>
          </h2>

          <p>
            Selected analytics and business intelligence work focused on
            practical data problems.
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-visual">
                <div className="mini-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="chart-line"></div>
              </div>

              <div className="project-info">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>

              <div className="project-arrow"></div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section" id="experience">
        <div className="section-label">EXPERIENCE</div>

        <div className="experience-heading">
          <h2>
            Where I've
            <br />
            been <span>learning.</span>
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.role}>
              <div className="experience-date">
                {item.period}
              </div>

              <div className="experience-content">
                <p className="experience-type">{item.type}</p>

                <h3>{item.role}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education-section">
        <div className="section-label">EDUCATION & CERTIFICATION</div>

        <div className="education-layout">
          <h2>
            Built on a
            <br />
            technical <span>foundation.</span>
          </h2>

          <div className="education-list">
            <article>
              <span>2022 — 2025</span>
              <h3>B.Tech. in Computer Science</h3>
              <p>
                Deenbandhu Chhotu Ram University of Science & Technology,
                Sonipat
              </p>
            </article>

            <article>
              <span>2019 — 2022</span>
              <h3>Diploma in Mechanical Engineering</h3>
              <p>Government Polytechnic, Sonipat</p>
            </article>

            <article className="certification-card">
              <span>2025</span>

              <h3>Post Graduate Certification in Data Analytics</h3>

              <p>Professional Certification</p>

              <a
                href="https://drive.google.com/drive/folders/1Dtjw50lWLRhQaF5sNJyemzKZp4SIuuEy"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate 
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <div className="section-label">CONTACT</div>

          <h2>
            Let's turn
            <br />
            <span>data into decisions.</span>
          </h2>

          <p>
            Open to opportunities in Data Analytics and MIS Reporting.
          </p>

          <a
            href="mailto:smbhvvrma1@gmail.com"
            className="contact-button"
          >
            Get in touch 
          </a>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/sambhav-verma05"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>
              LinkedIn
            </a>

            <a href="tel:+919354800675">
              <span>☎</span>
              +91 93548 00675
            </a>

            <a href="mailto:smbhvvrma1@gmail.com">
              <span>@</span>
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>SV.</div>

        <p>Data Analyst · MIS Executive</p>

        <span>© 2026 Sambhav Verma</span>
      </footer>
    </main>
  );
}

export default App;