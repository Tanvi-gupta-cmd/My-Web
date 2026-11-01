import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Code2,
  GraduationCap,
  BrainCircuit,
  Layers3,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  Terminal,
  Database,
  Globe,
  Cpu,
  MessageCircle,
  Video,
  Palette,
  FileSearch,
  HeartPulse,
  House,
  TrendingUp,
  ShieldCheck,
  GitBranch,
  Send,
  Cloud,
} from "lucide-react";
import Hero from "./components/Hero";
import "./index.css";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building beautiful, responsive interfaces with modern web technologies.",
    tags: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Creating secure APIs, authentication systems, and scalable applications.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description: "Developing AI-powered applications and experimenting with intelligent systems.",
    tags: ["Python", "Machine Learning", "Flask", "AI Integration"],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Training models and building applications around practical ML workflows.",
    tags: ["Model Training", "Python", "Data Processing", "Model Integration"],
  },
];

const projects = [
  {
    number: "01",
    title: "AI Mock Interview",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "An AI-powered interview preparation platform designed to help users practise questions and improve interview readiness.",
    icon: MessageCircle,
    tech: ["React", "Node.js", "AI"],
    live: "https://ai-mock-interview-frontend.netlify.app/",
    github: "https://github.com/Tanvi-gupta-cmd/AI-Mock-Interview-Platform",
    className: "project-lilac",
  },
  {
    number: "02",
    title: "MeetSync",
    category: "REAL-TIME WEB APPLICATION",
    description:
      "A browser-based video conferencing experience built around real-time communication and video collaboration.",
    icon: Video,
    tech: ["React", "WebRTC", "Socket.IO"],
    live: "https://meetsync-webrtc.netlify.app/",
    github: "https://github.com/Tanvi-gupta-cmd/video-confrencing",
    className: "project-green",
  },
  {
    number: "03",
    title: "AI Resume Analyzer",
    category: "AI / NLP",
    description:
      "A resume analysis application that helps evaluate resumes against job-related requirements.",
    icon: FileSearch,
    tech: ["Python", "NLP", "Streamlit"],
    live: "https://ats-resume-scorer-api-q1m8.onrender.com",
    github: "https://github.com/Tanvi-gupta-cmd/AI-ats-resume",
    className: "project-peach",
  },
  {
    number: "04",
    title: "SigmaGPT",
    category: "GENERATIVE AI",
    description:
      "A full-stack conversational AI application combining a modern interface with a backend service.",
    icon: BrainCircuit,
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://sigmagpt-frontend.netlify.app/",
    github: "https://github.com/Tanvi-gupta-cmd/SigmaGPT",
    className: "project-lilac",
  },
  {
    number: "05",
    title: "Luxeora",
    category: "E-COMMERCE EXPERIENCE",
    description:
      "A luxury jewellery storefront with an elegant visual identity and refined shopping interface.",
    icon: Palette,
    tech: ["React", "JavaScript", "CSS"],
    live: "https://luxeoraweb.netlify.app/",
    github: "https://github.com/Tanvi-gupta-cmd/Luxeora",
    className: "project-peach",
  },
  {
    number: "06",
    title: "Zerodha Clone",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A trading-platform-inspired web application built to explore financial product interfaces and full-stack integration.",
    icon: TrendingUp,
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://zerodha-trading-clone.netlify.app/",
    github: "https://github.com/Tanvi-gupta-cmd/zerodha-clone",
    className: "project-green",
  },
  {
    number: "07",
    title: "AdaIN Style Transfer",
    category: "COMPUTER VISION",
    description:
      "An image style-transfer application exploring neural style transfer techniques to transform visual content.",
    icon: Sparkles,
    tech: ["Python", "Deep Learning", "Flask"],
    live: "https://adain-style-transfer-uq80.onrender.com/",
    github: "https://github.com/Tanvi-gupta-cmd/AdaIN-style-transfer",
    className: "project-peach",
  },
  {
  number: "08",
  title: "SnapClass",
  category: "Education Technology",
  description: "An education-focused application designed to make learning and classroom workflows more accessible.",
  tech: ["Add", "Your", "Actual", "Technologies"],
  icon: GraduationCap,
  className: "project-snapclass",
  github: "https://github.com/Tanvi-gupta-cmd/Snapclass-App",
  live: "https://snapclass-app-mazqwyralvdnvwzgfztah5.streamlit.app/",
},
{
  number: "09",
  title: "AI Text Summarizer",
  category: "Artificial Intelligence",
  description: "An AI-powered application designed to turn lengthy text into concise, readable summaries.",
  tech: ["Add", "Your", "Actual", "Technologies"],
  icon: BrainCircuit,
  className: "project-summarizer",
  github: "https://github.com/Tanvi-gupta-cmd/AI-Text-Summarizer",
  live: "https://ai-text-summarizer-vb3o.onrender.com",
},
];

const tools = [
  // Frontend Development
  { name: "React.js", icon: Code2 },
  { name: "JavaScript", icon: Terminal },
  { name: "HTML5 & CSS3", icon: Globe },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Three.js", icon: Sparkles },

  // Backend Development
  { name: "Node.js", icon: Layers3 },
  { name: "Express.js", icon: Layers3 },
  { name: "REST APIs", icon: Globe },
  { name: "JWT Authentication", icon: ShieldCheck },

  // Databases
  { name: "MongoDB", icon: Database },
  { name: "SQL", icon: Database },

  // AI & Machine Learning
  { name: "Python", icon: Terminal },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Generative AI", icon: Sparkles },
  { name: "LLM Integration", icon: BrainCircuit },
  { name: "Flask", icon: Layers3 },

  // Developer Tools
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Code2 },
  { name: "Postman", icon: Send },
  { name: "VS Code", icon: Code2 },

  // Deployment
  { name: "Netlify", icon: Globe },
  { name: "Render", icon: Cloud },
];

function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      <span className="section-eyebrow">
        <span className="eyebrow-star">✳</span> {eyebrow}
      </span>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="about-grid">
        {/* Interactive Code Visual */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about-art"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="about-art-circle circle-one" />
            <div className="about-art-circle circle-two" />

            <motion.div
              className="about-code-card"
              whileHover={{
                rotate: 0,
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(69, 38, 61, 0.12)",
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="code-dots">● ● ●</span>

              <pre>
                <span>const</span> tanvi = {"{"}
                {"\n"}  role: <b>"Full Stack AI Dev"</b>,
                {"\n"}  creativity: <b>true</b>,
                {"\n"}  machineLearning: <b>true</b>,
                {"\n"}  building: <b>"the future"</b>
                {"\n"}{"}"};
              </pre>

              <div className="code-card-footer">
                <Sparkles size={15} />
                always learning, always building
              </div>
            </motion.div>

            <motion.span
              className="about-sticker sticker-top"
              animate={{ y: [0, -5, 0], rotate: [2, 0, 2] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              CURIOUS BY NATURE ✳
            </motion.span>

            <motion.span
              className="about-sticker sticker-bottom"
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              BUILT WITH PURPOSE
            </motion.span>
          </motion.div>

          <div className="about-image-caption">
            <span>BASED IN INDIA</span>
            <span>OPEN TO OPPORTUNITIES ↗</span>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-eyebrow">A LITTLE ABOUT ME</span>

          <h2>
            Developer by skill.
            <br />
            <span>Creator by heart.</span>
          </h2>

          <p>
            Hey, I'm <strong>Tanvi Kumari</strong> — a Full Stack AI Developer
            passionate about building meaningful digital experiences and
            intelligent applications.
          </p>

          <p>
            I work across frontend and backend development, creating
            responsive interfaces, building APIs, and connecting technologies
            to turn ideas into working products.
          </p>

          <p>
            Beyond web development, I have trained machine learning models
            and explored AI-powered solutions. I enjoy learning new
            technologies and building projects that combine creativity
            with practical problem-solving.
          </p>

          {/* Technical Highlights */}
          <div className="about-highlights">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="highlight-icon">
                <Code2 size={19} />
              </span>
              <span>
                <strong>Full Stack Development</strong>
                <small>Frontend, backend & APIs</small>
              </span>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="highlight-icon">
                <BrainCircuit size={19} />
              </span>
              <span>
                <strong>AI & Machine Learning</strong>
                <small>Model training & intelligent apps</small>
              </span>
            </motion.div>
          </div>

          {/* GitHub Link */}
          <motion.a
            className="inline-link"
            href="https://github.com/Tanvi-gupta-cmd"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 5 }}
          >
            Explore my GitHub <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="expertise-section section-padding" id="skills">
      <SectionHeading
        eyebrow="WHAT I BRING TO THE TABLE"
        title="A little bit of"
        accent="logic. A lot of curiosity."
        description="I combine full stack engineering, machine learning, and creative thinking to build useful digital products."
      />

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.article
              className="skill-card"
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
            >
              <div className="skill-card-top">
                <motion.span
                  className="skill-icon"
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={23} />
                </motion.span>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.15 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="skill-card-bottom">
              <span>WHAT I DO BEST</span>
              <span className="skill-bottom-dot">✳</span>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        className="tools-strip"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="tools-label">TOOLS IN MY WORKSPACE</span>

        <div className="tools-list">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <motion.span
                className="tool-item"
                key={tool.name}
                whileHover={{ y: -3, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={16} />
                {tool.name}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <SectionHeading
        eyebrow="SELECTED WORK · 2025—2026"
        title="Ideas made"
        accent="real."
        description="From full-stack platforms to AI-powered experiments, here's a selection of things I've designed, developed, and brought to life."
      />

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              className={`project-card ${project.className}`}
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                delay: (index % 3) * 0.1,
                duration: 0.65,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
            >
              {/* Project Visual */}
              <div className="project-art">
                <span className="project-art-number">
                  PROJECT / {project.number}
                </span>

                <div className="project-art-orbit orbit-a" />
                <div className="project-art-orbit orbit-b" />

                <motion.div
                  className="project-art-icon"
                  whileHover={{ scale: 1.12, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <Icon size={42} strokeWidth={1.3} />
                </motion.div>

                <span className="project-art-sparkle sparkle-a">✳</span>
                <span className="project-art-sparkle sparkle-b">✦</span>

                <span className="project-art-caption">
                  DESIGNED TO SOLVE
                </span>

                <a
                  className="project-open"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                >
                  <ArrowUpRight size={21} />
                </a>
              </div>

              {/* Project Details */}
              <div className="project-info">
                <div className="project-heading-row">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    className="project-live-link"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} />
                  </a>

                  <a
                    className="project-source-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* All Projects */}
      <motion.a
        className="all-projects-link"
        href="https://github.com/Tanvi-gupta-cmd"
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2 }}
      >
        <span>Curious to see more?</span>
        <strong>Explore all projects</strong>
        <ArrowUpRight size={19} />
      </motion.a>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "gupta.tanvi097@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <section className="contact-section section-padding" id="contact">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Decorative Elements */}
        <div className="contact-decoration contact-decoration-one" />
        <div className="contact-decoration contact-decoration-two" />

        <div className="contact-content">
          <motion.div
            className="contact-availability"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="availability-dot" />
            OPEN TO OPPORTUNITIES
          </motion.div>

          <span className="contact-mini-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's make
            <br />
            something <span>meaningful.</span>
          </h2>

          <p className="contact-description">
            I'm always excited to explore interesting ideas, collaborate
            with creative people, and build technology that makes a
            difference. Have an opportunity or an idea? Let's connect.
          </p>

          {/* Email Card */}
          <div className="contact-email-card">
            <div className="contact-email-icon">
              <Mail size={21} />
            </div>

            <div className="contact-email-info">
              <span>DROP ME AN EMAIL</span>
              <a href={`mailto:${email}`}>{email}</a>
            </div>

            <button
              className="contact-copy-button"
              onClick={copyEmail}
              aria-label="Copy email address"
              title="Copy email address"
            >
              {copied ? (
                <Check size={18} />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>

          <div className="contact-actions">
            <a className="contact-primary" href={`mailto:${email}`}>
              Start a conversation
              <ArrowUpRight size={18} />
            </a>

            <a
              className="contact-secondary"
              href="https://www.linkedin.com/in/tanvi-kumari-39436a399"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect on LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social Links */}
          <div className="contact-social-area">
            <span className="contact-social-label">
              FIND ME AROUND THE WEB
            </span>

            <div className="contact-socials">
              <a
                href="https://github.com/Tanvi-gupta-cmd"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
              >
                <Code2 size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/tanvi-kumari-39436a399"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
              >
                <Globe size={19} />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Send an email"
                title="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Decorative Panel */}
        <motion.div
          className="contact-side-note"
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <div className="contact-orbit">
            <div className="contact-orbit-inner">
              <Sparkles size={35} strokeWidth={1.2} />
            </div>
          </div>

          <span className="contact-side-kicker">
            A LITTLE REMINDER
          </span>

          <h3>
            Great things
            <br />
            start with
            <br />
            <span>a hello.</span>
          </h3>

          <div className="contact-side-bottom">
            <span>IDEAS → CODE → IMPACT</span>
            <span>✳</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="site-footer">
        <a className="footer-brand" href="#home" aria-label="Back to home">
          t<span>.</span>
        </a>

        <p>
          Designed with curiosity.
          <br className="footer-mobile-break" /> Built with intention.
        </p>

        <a className="footer-back-top" href="#home">
          BACK TO TOP ↑
        </a>

        <span className="footer-copyright">
          © {new Date().getFullYear()} TANVI KUMARI
        </span>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}