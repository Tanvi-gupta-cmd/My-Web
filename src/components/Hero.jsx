import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Premium Navbar */}
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Tanvi - Home">
          t<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          <span>Let's Talk</span>
          <ArrowUpRight size={16} />
        </a>
      </header>

      {/* Hero Content */}
      <div className="hero-layout">
        <div className="hero-copy">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="status-dot" />
            <span>DEVELOPER · AI/ML ENTHUSIAST</span>
          </motion.div>

          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            HELLO, WORLD! <Sparkles size={15} />
          </motion.p>

          <motion.div
            className="hero-name"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            TANVI KUMARI
            <span>FULL STACK AI DEVELOPER</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            I build
            <br />
            things that
            <br />
            <span className="headline-accent">think.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            I'm Tanvi Kumari — a Full Stack AI Developer turning bold ideas
            into thoughtful digital experiences and intelligent applications.
          </motion.p>

          {/* Hero Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#projects" className="primary-button">
              Explore my work <ArrowUpRight size={17} />
            </a>
            </motion.div>

          {/* Hero Bottom Note */}
          <motion.div
            className="hero-bottom-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span>FULL STACK ENGINEERING</span>
            <span className="note-divider" />
            <span>ARTIFICIAL INTELLIGENCE</span>
          </motion.div>
        </div>

        {/* 3D Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-label label-top">
            <span>INNOVATION</span>
            <span>CREATIVE ENGINEERING</span>
          </div>

          <Scene3D />

          <div className="floating-note note-ai">
            <span className="note-icon">✳</span>
            <span>
              <strong>AI / ML</strong>
              <small>Intelligence, engineered.</small>
            </span>
          </div>

          <div className="floating-note note-code">
            <span className="code-symbol">&lt;/&gt;</span>
            <span>
              <strong>FULL STACK</strong>
              <small>From interface to infrastructure.</small>
            </span>
          </div>

          <div className="visual-caption">
            <span>IDEAS IN MOTION</span>
            <span>28° 36' N — DIGITAL SPACE</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Footer */}
      <div className="hero-footer">
        <span>INDEPENDENTLY CURIOUS. INTENTIONALLY BUILT.</span>

        <a href="#about">
          SCROLL TO EXPLORE <span>↓</span>
        </a>

        <span>© {new Date().getFullYear()} TANVI KUMARI</span>
      </div>
    </section>
  );
}