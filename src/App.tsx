import { useEffect, useRef, useState } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.bento-card, .experience-card, .section-heading-wrapper');
    cards.forEach((card) => observer.observe(card));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>

      <div className="portfolio-container" ref={containerRef}>
        <section className="hero-section">
          <div className="glitch-wrapper">
            <h1 className="hero-title">Deepa P</h1>
            <h2 className="hero-subtitle">Frontend & Mobile Application Developer.</h2>
          </div>
          
          <div className="hero-cta-group">
            <a href="#about" className="btn-primary">
              Explore Work
            </a>
          </div>

          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow-down"></div>
          </div>
        </section>

        <section id="about" className="mui-grid-container">
          <div className="bento-card mui-col-xs-12">
            <h3 className="section-title">About Me</h3>
            <p className="summary-text">
              Performance-focused Frontend & Mobile Application Developer with 5.8 Years of Experience engineering high-impact web and mobile products across React.js, Next.js, Angular, TypeScript, Flutter, and React Native. Proven track record in building reusable UI design systems, implementing Server-Side Rendering (SSR), integrating mission-critical REST APIs, and optimizing complex enterprise workflows across Contract Lifecycle Management, Supply Chain, Logistics, and E-Commerce domains.
            </p>
          </div>

          <div className="bento-card mui-col-xs-12">
            <h3 className="section-title">Tech Arsenal</h3>
            <div className="skills-container">
              <span className="skill-pill">React.js & Next.js</span>
              <span className="skill-pill">Angular & Angular SSR</span>
              <span className="skill-pill">TypeScript & ES6+</span>
              <span className="skill-pill">Flutter (Dart)</span>
              <span className="skill-pill">React Native & Expo</span>
              <span className="skill-pill">Riverpod & Redux</span>
              <span className="skill-pill">React Hook Form & Zod</span>
              <span className="skill-pill">Material UI & PrimeReact</span>
              <span className="skill-pill">Bootstrap & SCSS Modules</span>
              <span className="skill-pill">Storybook</span>
              <span className="skill-pill">REST APIs & Axios</span>
              <span className="skill-pill">Node.js API Integration</span>
              <span className="skill-pill">JWT Auth Architecture</span>
              <span className="skill-pill">Jest Unit Testing</span>
              <span className="skill-pill">Git & GitHub</span>
            </div>
          </div>

          {/* Featured Enterprise Work */}
          <div className="section-heading-wrapper mui-col-xs-12">
            <h2>Professional Experience</h2>
            <p>Products engineered at Thinkinfinity Technology and Consulting Pvt Ltd (2021 - Present).</p>
          </div>

          <div className="experience-card mui-col-xs-12">
            <div className="experience-header">
              <span className="domain-badge">LegalTech Domain</span>
              <span className="experience-company"></span>
            </div>
            <div className="experience-body">
              <h3 className="experience-title">Digital Contract Lifecycle Management Platform</h3>
              <p className="experience-desc">Engineered an enterprise-grade digital contract lifecycle platform, streamlining digital e-signatures, legally binding e-stamping, and real-time compliance audit logs. Implemented Angular SSR to accelerate FCP. Orchestrated frontend-to-backend communication via Node.js service workflows for zero-latency document processing.</p>
              <div className="experience-tags">
                <span>Angular</span><span>TypeScript</span><span>Angular SSR</span><span>Node.js</span>
              </div>
            </div>
          </div>

          <div className="experience-card mui-col-xs-12">
            <div className="experience-header">
              <span className="domain-badge">Supply Chain Domain</span>
              <span className="experience-company"></span>
            </div>
            <div className="experience-body">
              <h3 className="experience-title">Enterprise Procurement Platform</h3>
              <p className="experience-desc">Architected mission-critical modular components managing high-volume purchase orders, invoice verification pipelines, and automated inventory synchronization. Built highly responsive data visualization dashboards delivering operational visibility.</p>
              <div className="experience-tags">
                <span>React.js</span><span>TypeScript</span><span>Material UI</span><span>SCSS</span>
              </div>
            </div>
          </div>

          <div className="experience-card mui-col-xs-12">
            <div className="experience-header">
              <span className="domain-badge">Enterprise Governance</span>
              <span className="experience-company"></span>
            </div>
            <div className="experience-body">
              <h3 className="experience-title">Operations & Compliance Administrative Portal</h3>
              <p className="experience-desc">Architected enterprise administrative dashboards with Next.js and React, implementing modern routing and layout architecture. Implemented strict type-safe form validation flows utilizing Zod schemas paired with React Hook Form.</p>
              <div className="experience-tags">
                <span>Next.js</span><span>React</span><span>React Hook Form</span><span>Zod</span>
              </div>
            </div>
          </div>

          <div className="experience-card mui-col-xs-12">
            <div className="experience-header">
              <span className="domain-badge">Design System</span>
              <span className="experience-company"></span>
            </div>
            <div className="experience-body">
              <h3 className="experience-title">Enterprise UI Design System & Component Library</h3>
              <p className="experience-desc">Engineered an isolated, scalable UI component library using Storybook, standardizing design tokens and UI consistency across multi-project engineering teams. Configured automated unit tests using Jest to safeguard critical UI behaviors.</p>
              <div className="experience-tags">
                <span>Storybook</span><span>PrimeReact</span><span>Jest</span><span>React.js</span>
              </div>
            </div>
          </div>

          {/* Mobile Application Projects & Previous Experience */}
          <div className="section-heading-wrapper mui-col-xs-12">
            <h2>Mobile Applications & Previous Experience</h2>
            <p>Cross-platform mobile apps and early career highlights.</p>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{ fontSize: '1.8rem' }}>Mobile B2B Marketplace App</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              Developed a cross-platform mobile marketplace application supporting dynamic directory cataloging, active cart states, and seamless checkout flows. Structured client state management with Riverpod for iOS and Android platforms.
            </p>
            <div className="project-tags">
              <span>Flutter</span><span>Dart</span><span>Riverpod</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{ fontSize: '1.8rem' }}>Workforce Operations Client</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              Constructed a utility mobile client handling real-time attendance registration, file parsers, and automated certificate generation. Embedded interactive data visualization charts via React Native Chart Kit.
            </p>
            <div className="project-tags">
              <span>React Native</span><span>Expo</span><span>Chart Kit</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{ fontSize: '1.8rem' }}>Web App Developer @ Rell Tech</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              (Jan 2020 - Jun 2020) Refactored HTML semantic structures and metadata tags to boost organic search discoverability and browser render performance. Delivered responsive dashboard UI components.
            </p>
            <div className="project-tags">
              <span>Frontend</span><span>HTML/CSS</span><span>SEO</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{ fontSize: '1.8rem' }}>Frontend Systems Intern</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              @ Radar Technologies (May 2019 - Nov 2019) Developed modular frontend components for high-traffic e-commerce interfaces within modern Agile sprints. Collaborated on cross-browser testing and responsive layout fixes.
            </p>
            <div className="project-tags">
              <span>Agile</span><span>Responsive UI</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12">
            <h3 className="section-title">Details</h3>
            <div className="project-header" style={{ flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div className="project-title" style={{ fontSize: '1.5rem' }}>Education</div>
              <div className="project-role" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Master of Computer Applications (MCA), Loyola College, Chennai • 2017 - 2019<br />Bachelor of Computer Applications (BCA), Annai Veilankanni's College for Women • 2014 - 2017</div>
            </div>

            <div className="project-header" style={{ flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div className="project-title" style={{ fontSize: '1.5rem' }}>Languages</div>
              <div className="project-role" style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>English, Tamil, Telugu</div>
            </div>

            <div className="project-header" style={{ flexDirection: 'column', gap: '0.5rem' }}>
              <div className="project-title" style={{ fontSize: '1.5rem' }}>Contact</div>
              <div className="project-role" style={{ fontSize: '1rem', color: 'var(--text-secondary)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                <a href="mailto:deeparesh07@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>deeparesh07@gmail.com</a>
                <span style={{ margin: '0 0.5rem' }}>•</span>
                <a href="tel:+918838379439" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8838379439</a>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default App;
