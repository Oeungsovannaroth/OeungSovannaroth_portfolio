import { useEffect, useMemo, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home", icon: "fa-solid fa-house" },
  { href: "#about", label: "About", icon: "fa-regular fa-folder" },
  { href: "#skills", label: "Skills", icon: "fa-solid fa-code" },
  { href: "#timeline", label: "Resume", icon: "fa-solid fa-briefcase" },
  { href: "#contact", label: "Contact", icon: "fa-solid fa-phone" },
];

const typedWords = [
  "DESIGNER",
  "FRONT-END DEVELOPER",
  "BACK-END DEVELOPER",
  "APP DEVELOPER",
  "FREELANCER",
  "PHOTOGRAPHER",
];

const serviceCards = [
  {
    title: "Web Application Development",
    frontClass: "card-front1",
    backClass: "card-back1",
    description:
      "Building responsive, scalable, and secure web applications using modern technologies and best development practices.",
  },
  {
    title: "Backend Development & APIs",
    frontClass: "card-front2",
    backClass: "card-back2",
    description:
      "Developing robust RESTful APIs, implementing business logic, authentication, and seamless database integration.",
  },
  {
    title: "Database & System Design",
    frontClass: "card-front3",
    backClass: "card-back3",
    description:
      "Designing efficient database structures and scalable system architectures to ensure high performance and reliability.",
  },
];

const devIcons = [
  "devicon-csharp-plain colored",
  "devicon-cplusplus-plain colored",
  "devicon-microsoftsqlserver-plain-wordmark colored",
  "devicon-mysql-plain-wordmark",
  "devicon-html5-plain colored",
  "devicon-css3-plain-wordmark",
  "devicon-tailwindcss-original",
  "devicon-javascript-plain colored",
  "devicon-jquery-plain-wordmark colored",
  "devicon-react-original-wordmark colored",
  "devicon-bootstrap-plain-wordmark colored",
  "devicon-github-original-wordmark",
  "devicon-vercel-original",
  "devicon-php-plain colored",
  "devicon-laravel-original colored",
  "devicon-python-plain colored",
  "devicon-django-plain",
  "devicon-figma-plain colored",
  "devicon-kotlin-plain colored",
  "devicon-dataspell-plain",
  "devicon-mongodb-plain",
  "devicon-postgresql-plain",
  "devicon-flutter-plain",
];

const skillCards = [
  {
    title: "Full-Stack Development",
    description:
      "Building responsive web applications using modern frameworks, RESTful APIs, and scalable architectures.",
    progress: 85,
  },
  {
    title: "Software Engineering",
    description:
      "Writing clean, maintainable code, solving complex problems, and developing efficient, reliable software solutions.",
    progress: 85,
  },
  {
    title: "Database & API Integration",
    description:
      "Designing databases, integrating RESTful APIs, and managing data securely with SQL and NoSQL technologies.",
    progress: 80,
  },
  {
    title: "Problem Solving",
    description:
      "Analyzing requirements, debugging applications, and optimizing performance to deliver high-quality software.",
    progress: 90,
  },
];

const timelineItems = [
  // Education
  {
    category: "education",
    icon: "fa-solid fa-graduation-cap",
    year: "2021 - 2024",
    title: "High School Diploma",
    company: "Kampot Krong High School",
    description:
      "Completed secondary education with outstanding academic performance while actively participating in national Mathematics, Physics, and Chemistry competitions.",
    achievements: [
      "Graduated with Grade A in Grade 12",
      "National competition awards in Mathematics, Physics, and Chemistry",
    ],
  },
  {
    category: "education",
    icon: "fa-solid fa-graduation-cap",
    year: "2024 - Present",
    title: "Bachelor of Computer Science and Engineering",
    company: "ACLEDA University of Business",
    description:
      "Currently pursuing a degree in Computer Science and Engineering with a focus on software engineering, web development, databases, and mobile application development.",
    achievements: [
      "Completed Year 2",
      "Current GPA: 3.7 / 4.0",
    ],
  },
  {
    category: "education",
    icon: "fa-solid fa-graduation-cap",
    year: "2025 - Present",
    title: "English Program",
    company: "Australian Centre for Education (ACE)",
    description:
      "Developing English communication, presentation, and professional writing skills for academic and professional environments.",
    achievements: [],
  },

  // Work Experience
  {
    category: "work",
    icon: "fa-solid fa-briefcase",
    year: "Oct 2025 - Present",
    title: "Software Developer Intern",
    company: "ACLEDA University of Business",
    description:
      "Developed RESTful APIs using C#, ASP.NET Core, and Entity Framework Core. Implemented CRUD operations, integrated SQL Server, performed API testing with Postman, and collaborated with front-end developers.",
    skills: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "REST API",
      "Postman",
    ],
  },
  {
    category: "work",
    icon: "fa-solid fa-briefcase",
    year: "Nov 2025 - May 2026",
    title: "Backend Developer Intern",
    company: "ICT Center",
    description:
      "Developed backend services using Laravel and PHP, designed databases, integrated RESTful APIs, implemented authentication, optimized application performance, and collaborated with cross-functional teams.",
    skills: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Git",
      "Backend Development",
    ],
  },

  // Projects
  {
    category: "project",
    icon: "fa-solid fa-rocket",
    year: "2026",
    title: "SolarOps Energy Tracker",
    company: "ICT Center",
    description:
      "Developed a full-stack energy management system featuring role-based authentication, email OTP verification, ABA Bakong payment integration, electricity usage monitoring, customer management, inventory tracking, and reporting using React.js, Laravel, and MongoDB.",
    achievements: [
      "React.js",
      "Laravel",
      "MongoDB",
      "Bakong API",
      "Email OTP",
    ],
  },
  {
    category: "project",
    icon: "fa-solid fa-rocket",
    year: "2026",
    title: "Travel Guide Mobile Application",
    company: "Academic Project",
    description:
      "Built a full-stack travel guide platform consisting of an Android application, Laravel REST APIs, and a React.js admin dashboard with Firebase integration.",
    achievements: [
      "Kotlin",
      "Jetpack Compose",
      "Laravel",
      "React.js",
      "MySQL",
      "Firebase",
    ],
  },
  {
    category: "project",
    icon: "fa-solid fa-rocket",
    year: "2026",
    title: "Pub Management System",
    company: "Academic Project",
    description:
      "Developed a restaurant management system with menu management, recipes, inventory tracking, customer orders, automatic stock deduction, and reporting.",
    achievements: [
      "React.js",
      "Laravel",
      "MongoDB",
      "REST API",
    ],
  },
  {
    category: "project",
    icon: "fa-solid fa-rocket",
    year: "2026",
    title: "BenLan Management System",
    company: "Academic Project",
    description:
      "Developed backend RESTful APIs using ASP.NET Core, Entity Framework Core, and SQL Server with CRUD operations and API testing.",
    achievements: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework Core",
    ],
  },
  {
    category: "project",
    icon: "fa-solid fa-rocket",
    year: "2025",
    title: "ICT Shop & PuppyLand",
    company: "Personal Project",
    description:
      "Built responsive e-commerce websites with reusable React components, shopping cart functionality, product filtering, and modern UI using Tailwind CSS.",
    achievements: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    category: "project",
    icon: "fa-solid fa-rocket",
    year: "2025",
    title: "Hotel Management System",
    company: "Academic Project",
    description:
      "Developed a desktop application for hotel room booking and customer management using Java Swing with SQL Server database integration.",
    achievements: [
      "Java",
      "Java Swing",
      "SQL Server",
    ],
  },
];

function useTypedWords(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = !isDeleting && displayText === currentWord;
    const isWordDeleted = isDeleting && displayText === "";
    const delay = isWordComplete ? 1800 : isDeleting ? 45 : 95;

    const timeoutId = window.setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setDisplayText((text) =>
        isDeleting
          ? currentWord.slice(0, text.length - 1)
          : currentWord.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [timelineFilter, setTimelineFilter] = useState("all");
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    feedback: "",
  });
  const typedText = useTypedWords(typedWords);

  const filteredTimeline = useMemo(
    () =>
      timelineItems.filter(
        (item) => timelineFilter === "all" || item.category === timelineFilter,
      ),
    [timelineFilter],
  );

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    document
      .querySelectorAll(".fade-in")
      .forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const updateOnScroll = () => {
      setIsScrolled(window.scrollY > 100);

      document.querySelectorAll("section[id]").forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });

      const timelineContainer = document.querySelector(".timeline-container");
      if (timelineContainer) {
        const rect = timelineContainer.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) /
              (rect.height + window.innerHeight),
          ),
        );
        setTimelineProgress(progress * 100);
      }
    };

    updateOnScroll();
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateOnScroll);
  }, []);

  useEffect(() => {
    setVisibleTimelineItems([]);
    const timeouts = filteredTimeline.map((_, index) =>
      window.setTimeout(() => {
        setVisibleTimelineItems((items) => [...new Set([...items, index])]);
      }, index * 120),
    );

    return () =>
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [filteredTimeline]);

  const handleAnchorClick = (event, href) => {
    event.preventDefault();
    document
      .querySelector(href.trim())
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending message...");

    const telegramMessage = encodeURIComponent(
      `New Contact Message:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nFeedback: ${formData.feedback}`,
    );
    const botToken = "8381888400:AAEFOZ6OtLH1kWCEoM4h-ap8BXHENHEWVFs";
    const chatId = "1369212693";

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${telegramMessage}`,
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", feedback: "" });
    } catch {
      setStatus("Failed to send message!");
    }
  };

  return (
    <>
      <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-container">
          <a
            className="logo"
            href="#home"
            onClick={(event) => handleAnchorClick(event, "#home")}
          >
            <div className="logo-icon" />
            <div className="logo-text" />
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={
                    activeSection === link.href.slice(1) ? "active" : ""
                  }
                  href={link.href}
                  onClick={(event) => handleAnchorClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-top-icons">
          {navLinks.map((link) => (
            <a
              aria-label={link.label}
              className={activeSection === link.href.slice(1) ? "active" : ""}
              href={link.href}
              key={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
            >
              <i className={link.icon} />
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg-animation">
            <div className="floating-shape shape-1" />
            <div className="floating-shape shape-2" />
            <div className="floating-shape shape-3" />
            <div className="geo-shape geo-1" />
            <div className="geo-shape geo-2" />
            <div className="particles">
              {Array.from({ length: 10 }).map((_, index) => (
                <span className="particle" key={index} />
              ))}
            </div>
          </div>

          <div className="hero-content">
            <h1>OEUNG SOVANNAROTH</h1>
            <p>
              <span className="typed">{typedText}</span>
              <span className="typed-cursor" aria-hidden="true">
                |
              </span>
            </p>

            <div className="cta-buttons">
              <a
                className="cta-primary"
                href="#skills"
                onClick={(event) => handleAnchorClick(event, "#skills")}
              >
                TECHNOLOGIES
              </a>
              <a
                className="cta-secondary"
                href="#contact"
                onClick={(event) => handleAnchorClick(event, "#contact")}
              >
                Let's Talk
              </a>
            </div>

            <div className="stats-section">
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="fade-in">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                I'm a Web Developer passionate about creating modern,
                responsive, and user-friendly web applications. I enjoy
                transforming ideas into complete digital solutions by combining
                front-end and back-end development with clean code, creativity,
                and problem-solving. I am always learning new technologies and
                improving my skills to build efficient, scalable, and
                high-quality web products.
              </p>
            </div>

            <div className="about-content">
              <div className="about-intro">
                <div className="about-image" />
                <div className="about-text">
                  <p>
                    I'm Sovannaroth, a passionate Web Developer focused on
                    building modern, functional, and user-centered web
                    applications. I bring ideas to life through clean code,
                    thoughtful design, and efficient development.
                  </p>
                  <p>
                    I design and develop digital experiences that turn ideas
                    into reality, combining creativity, seamless user
                    experiences, and modern web technologies to build
                    responsive, scalable, and high-quality web solutions.
                  </p>
                </div>
              </div>

              <div>
                <div className="section-title">
                  <h2>WHAT CAN I DO?</h2>
                </div>

                <section className="card-do" aria-label="Services">
                  {serviceCards.map((card) => (
                    <div className="card1" key={card.title}>
                      <div className="card-inner1">
                        <div className="card-frond-all">
                          <div className={card.frontClass}>
                            <span>{card.title}</span>
                          </div>
                        </div>
                        <div className={card.backClass}>
                          <div className="card-do-title">
                            <span>{card.title}</span>
                            <p>{card.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="fade-in">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">SKILLS & TECHNOLOGIES</h2>
              <p className="section-subtitle">
                Combining technical excellence with creative vision.
              </p>
            </div>

            <div className="skills-container">
              <div className="skills-wrapper">
                <div className="skills-visual">
                  <div className="skills-circle">
                    <div className="banner">
                      <div
                        className="slider"
                        style={{ "--quantity": devIcons.length }}
                      >
                        {devIcons.map((icon, index) => (
                          <div
                            className="item"
                            key={icon}
                            style={{ "--position": index + 1 }}
                          >
                            <i className={icon} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-list">
                  {skillCards.map((skill) => (
                    <div className="skill-item" key={skill.title}>
                      <h4>{skill.title}</h4>
                      <p>{skill.description}</p>
                      <div className="skill-progress">
                        <div
                          className="skill-progress-bar"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="fade-in">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Resume</h2>
              <p className="section-subtitle">
                Passionate Software Developer with experience in designing and
                developing modern web applications. Skilled in building
                responsive user interfaces, developing secure backend systems,
                integrating RESTful APIs, and managing databases. Dedicated to
                writing clean, maintainable code, solving complex problems, and
                continuously learning new technologies to create scalable and
                high-quality software solutions.
              </p>
            </div>

            <div className="timeline-controls">
              {["all", "education", "work", "project"].map((filter) => (
                <button
                  className={`timeline-filter ${timelineFilter === filter ? "active" : ""}`}
                  key={filter}
                  onClick={() => setTimelineFilter(filter)}
                  type="button"
                >
                  {filter === "all"
                    ? "All"
                    : filter[0].toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            <div className="timeline-container">
              <div className="timeline-line" />
              <div
                className="timeline-progress"
                style={{ height: `${timelineProgress}%` }}
              />

              {filteredTimeline.map((item, index) => (
                <div
                  className={`timeline-item ${
                    visibleTimelineItems.includes(index) ? "visible" : ""
                  }`}
                  data-category={item.category}
                  key={`${item.title}-${item.year}`}
                >
                  <button
                    aria-label={`Show ${item.title}`}
                    className="timeline-node"
                    onClick={(event) =>
                      event.currentTarget
                        .closest(".timeline-item")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        })
                    }
                    type="button"
                  >
                    <i className={item.icon} />
                  </button>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-company">{item.company}</div>
                    <p className="timeline-description">{item.description}</p>

                    {item.achievements && (
                      <div className="timeline-achievements">
                        {item.achievements.map((achievement) => (
                          <div
                            className="timeline-achievement"
                            key={achievement}
                          >
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}

                    {item.skills && (
                      <div className="timeline-skills">
                        {item.skills.map((skill) => (
                          <span className="timeline-skill" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="fade-in">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Let's Create Together</h2>
              <p className="section-subtitle">
                Ready to bring your ideas to life? Let's start a conversation.
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>
                  I'm always excited to work on new projects and collaborate
                  with amazing people. Whether you have a specific project in
                  mind or just want to explore possibilities, I'd love to hear
                  from you.
                </p>

                <div className="contact-details">
                  <h4>Available for:</h4>
                  <ul>
                    <li>Freelance Projects</li>
                    <li>Full-time Opportunities</li>
                    <li>Consulting & Code Reviews</li>
                    <li>Speaking & Workshops</li>
                  </ul>
                </div>

                <div className="contact-details">
                  <h4>Based in:</h4>
                  <p>Phnom Penh Cambodia</p>
                </div>
              </div>

              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      className="form-input"
                      name="name"
                      onChange={handleFormChange}
                      placeholder="Your Name"
                      required
                      type="text"
                      value={formData.name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-input"
                      name="email"
                      onChange={handleFormChange}
                      placeholder="Your Email"
                      required
                      type="email"
                      value={formData.email}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-input"
                      name="message"
                      onChange={handleFormChange}
                      placeholder="Project Type"
                      required
                      type="text"
                      value={formData.message}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-textarea"
                      name="feedback"
                      onChange={handleFormChange}
                      placeholder="Tell me about your project..."
                      required
                      rows="5"
                      value={formData.feedback}
                    />
                  </div>
                  <button className="submit-btn" type="submit">
                    Send Message
                  </button>
                </form>
                <p id="status">{status}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
