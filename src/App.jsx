import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { href: '#home', label: 'Home', icon: 'fa-solid fa-house' },
  { href: '#about', label: 'About', icon: 'fa-regular fa-folder' },
  { href: '#skills', label: 'Skills', icon: 'fa-solid fa-code' },
  { href: '#timeline', label: 'Resume', icon: 'fa-solid fa-briefcase' },
  { href: '#contact', label: 'Contact', icon: 'fa-solid fa-phone' },
];

const typedWords = [
  'DESIGNER',
  'FRONT-END DEVELOPER',
  'ANDROID DEVELOPER',
  'FREELANCER',
  'PHOTOGRAPHER',
];

const serviceCards = [
  {
    title: 'Website Development',
    frontClass: 'card-front1',
    backClass: 'card-back1',
    description:
      'Crafting responsive, scalable, and visually appealing websites tailored to business needs.',
  },
  {
    title: 'UI/UX & Edit Video',
    frontClass: 'card-front2',
    backClass: 'card-back2',
    description:
      'Designing intuitive user interfaces and creating strong visual assets, branding materials, and layouts that deliver both function and beauty.',
  },
  {
    title: 'Content Creation',
    frontClass: 'card-front3',
    backClass: 'card-back3',
    description: 'Creating educational and engaging content about tech, design, and development.',
  },
];

const devIcons = [
  'devicon-csharp-plain colored',
  'devicon-cplusplus-plain colored',
  'devicon-microsoftsqlserver-plain-wordmark colored',
  'devicon-mysql-plain-wordmark',
  'devicon-html5-plain colored',
  'devicon-css3-plain-wordmark',
  'devicon-tailwindcss-original',
  'devicon-javascript-plain colored',
  'devicon-jquery-plain-wordmark colored',
  'devicon-react-original-wordmark colored',
  'devicon-bootstrap-plain-wordmark colored',
  'devicon-github-original-wordmark',
  'devicon-vercel-original',
  'devicon-php-plain colored',
  'devicon-laravel-original colored',
  'devicon-python-plain colored',
  'devicon-django-plain',
  'devicon-figma-plain colored',
  'devicon-kotlin-plain colored',
  'devicon-dataspell-plain',
  'devicon-mongodb-plain',
  'devicon-postgresql-plain',
];

const skillCards = [
  {
    title: 'Frontend Excellence',
    description: 'Modern JavaScript frameworks, responsive design, and pixel-perfect implementations',
    progress: 80,
  },
  {
    title: 'Creative Design',
    description: 'User-centered design thinking with a focus on accessibility and visual appeal',
    progress: 80,
  },
];

const timelineItems = [
  {
    category: 'education',
    icon: 'fa-solid fa-graduation-cap',
    year: '2018 - 2021',
    title: 'Secondary School diploma',
    company: 'Kampot krong high school',
    description:
      'Focused on general education with emphasis on science and technology subjects. Developed teamwork and communication skills through school projects and activities.',
    achievements: ['Graduated with certificate of Appreciation.'],
  },
  {
    category: 'education',
    icon: 'fa-solid fa-graduation-cap',
    year: '2024 - Present',
    title: 'High School Diploma',
    company: 'Kampot krong high school',
    description:
      'Graduated with a concentration in business and computing. Gained experience in research, presentations, and critical thinking.',
    achievements: ['Graduated with a Diploma in Grade 12 with an overall Grade A.'],
  },
  {
    category: 'education',
    icon: 'fa-solid fa-graduation-cap',
    year: '2021 - 2024',
    title: 'Bachelor of Computer Science and Engineering',
    company: 'Aceleda university of bussiness',
    description:
      'Currently pursuing studies in computer science, software development, and programming. Developing skills in web technologies, databases, and problem-solving for real-world applications.',
    achievements: ['Achieved a 4.0 GPA during the first academic year.'],
  },
  {
    category: 'project',
    icon: 'fa-solid fa-rocket',
    year: '2025',
    title: 'iSTUDIO',
    company: 'Personal Project',
    description:
      'iSTUDIO focuses on delivering sleek, user-friendly interfaces and interactive digital experiences for clients.',
    achievements: ['1,000+ active users', '4.2/5 star rating'],
  },
  {
    category: 'project',
    icon: 'fa-solid fa-rocket',
    year: '2025',
    title: 'VPuppy Land',
    company: 'Personal Project',
    description:
      'Puppy Land offers information on different dog breeds, pet care tips, adoption services, and an interactive community for pet lovers.',
    achievements: ['100+ active users', '4.2/5 star rating'],
  },
  {
    category: 'project',
    icon: 'fa-solid fa-rocket',
    year: '2025',
    title: 'VILLA AGENCY',
    company: 'Personal Project',
    description:
      'Villa Agency allows users to browse listings, view high-quality images, and contact agents directly for buying, renting, or investing in villas.',
    achievements: ['10,000+ active users', '4.8/5 star rating'],
  },
  {
    category: 'work',
    icon: 'fa-solid fa-briefcase',
    year: '2025 - Present',
    title: 'Frontend Developer',
    company: 'ICT Center',
    description:
      'Started my professional journey building responsive web applications for startup clients. Learned to work in fast-paced environments and collaborate effectively with cross-functional teams.',
    skills: ['React', 'JavaScript', 'Jquery', 'Git'],
  },
];

function useTypedWords(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = !isDeleting && displayText === currentWord;
    const isWordDeleted = isDeleting && displayText === '';
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
        isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [displayText, isDeleting, wordIndex, words]);

  return displayText;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [timelineFilter, setTimelineFilter] = useState('all');
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [visibleTimelineItems, setVisibleTimelineItems] = useState([]);
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    feedback: '',
  });
  const typedText = useTypedWords(typedWords);

  const filteredTimeline = useMemo(
    () =>
      timelineItems.filter((item) => timelineFilter === 'all' || item.category === timelineFilter),
    [timelineFilter],
  );

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    );

    document.querySelectorAll('.fade-in').forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const updateOnScroll = () => {
      setIsScrolled(window.scrollY > 100);

      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });

      const timelineContainer = document.querySelector('.timeline-container');
      if (timelineContainer) {
        const rect = timelineContainer.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)),
        );
        setTimelineProgress(progress * 100);
      }
    };

    updateOnScroll();
    window.addEventListener('scroll', updateOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateOnScroll);
  }, []);

  useEffect(() => {
    setVisibleTimelineItems([]);
    const timeouts = filteredTimeline.map((_, index) =>
      window.setTimeout(() => {
        setVisibleTimelineItems((items) => [...new Set([...items, index])]);
      }, index * 120),
    );

    return () => timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  }, [filteredTimeline]);

  const handleAnchorClick = (event, href) => {
    event.preventDefault();
    document.querySelector(href.trim())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending message...');

    const telegramMessage = encodeURIComponent(
      `New Contact Message:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nFeedback: ${formData.feedback}`,
    );
    const botToken = '8381888400:AAEFOZ6OtLH1kWCEoM4h-ap8BXHENHEWVFs';
    const chatId = '1369212693';

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${telegramMessage}`,
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '', feedback: '' });
    } catch {
      setStatus('Failed to send message!');
    }
  };

  return (
    <>
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <a className="logo" href="#home" onClick={(event) => handleAnchorClick(event, '#home')}>
            <div className="logo-icon" />
            <div className="logo-text" />
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
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
              className={activeSection === link.href.slice(1) ? 'active' : ''}
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
                onClick={(event) => handleAnchorClick(event, '#skills')}
              >
                TECHNOLOGIES
              </a>
              <a
                className="cta-secondary"
                href="#contact"
                onClick={(event) => handleAnchorClick(event, '#contact')}
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
                I'm a front-end developer passionate about creating modern, responsive, and
                user-friendly websites. I enjoy turning ideas into real digital experiences using
                clean code, creativity, and problem-solving. I am always learning new technologies
                and improving my UI/UX skills to build better products.
              </p>
            </div>

            <div className="about-content">
              <div className="about-intro">
                <div className="about-image" />
                <div className="about-text">
                  <p>
                    I'm Sovannaroth, a passionate Front-End Developer focused on crafting beautiful,
                    functional, and user-centered websites. I bring ideas to life through clean code,
                    thoughtful design, and animation.
                  </p>
                  <p>
                    I design and build digital experiences that turn imagination into reality,
                    blending creativity, smooth interactions, and modern web technologies.
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
              <p className="section-subtitle">Combining technical excellence with creative vision.</p>
            </div>

            <div className="skills-container">
              <div className="skills-wrapper">
                <div className="skills-visual">
                  <div className="skills-circle">
                    <div className="banner">
                      <div className="slider" style={{ '--quantity': devIcons.length }}>
                        {devIcons.map((icon, index) => (
                          <div className="item" key={icon} style={{ '--position': index + 1 }}>
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
                Driven front-end developer focused on transforming ideas into digital reality.
                Experienced in creating responsive layouts, modern interfaces, and interactive web
                animations. Passionate about continuous learning, problem-solving, and building
                clean, user-centered digital experiences.
              </p>
            </div>

            <div className="timeline-controls">
              {['all', 'education', 'work', 'project'].map((filter) => (
                <button
                  className={`timeline-filter ${timelineFilter === filter ? 'active' : ''}`}
                  key={filter}
                  onClick={() => setTimelineFilter(filter)}
                  type="button"
                >
                  {filter === 'all' ? 'All' : filter[0].toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            <div className="timeline-container">
              <div className="timeline-line" />
              <div className="timeline-progress" style={{ height: `${timelineProgress}%` }} />

              {filteredTimeline.map((item, index) => (
                <div
                  className={`timeline-item ${
                    visibleTimelineItems.includes(index) ? 'visible' : ''
                  }`}
                  data-category={item.category}
                  key={`${item.title}-${item.year}`}
                >
                  <button
                    aria-label={`Show ${item.title}`}
                    className="timeline-node"
                    onClick={(event) =>
                      event.currentTarget
                        .closest('.timeline-item')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
                          <div className="timeline-achievement" key={achievement}>
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
                  I'm always excited to work on new projects and collaborate with amazing people.
                  Whether you have a specific project in mind or just want to explore possibilities,
                  I'd love to hear from you.
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
