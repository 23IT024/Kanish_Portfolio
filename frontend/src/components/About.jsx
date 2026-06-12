import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRegLightbulb,
  FaTrophy
} from "react-icons/fa";

import "../styles/about.css";

// Optional Profile Image
import Profile from "../assets/profile.png";

const highlights = [
  {
    icon: <FaLaptopCode />,
    label: "Full Stack Development",
    cls: "hl-purple",
  },
  {
    icon: <FaRegLightbulb />,
    label: "Problem Solving",
    cls: "hl-teal",
  },
  {
    icon: <FaTrophy />,
    label: "Hackathons",
    cls: "hl-amber",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About Me
        </h2>

        <div className="title-line"></div>
      </motion.div>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="card-top-bar"></div>

        <div className="about-grid">
          <div className="about-avatar-col">
            {/* Replace with Profile Image Later */}

            <img
              src={Profile}
              alt="Kanish"
              className="about-avatar-img"
            />

            <div className="about-tags">
              <span className="atag atag-purple">
                B.Tech IT
              </span>

              <span className="atag atag-teal">
                2023–2027
              </span>

              <span className="atag atag-amber">
                CGPA 7.75
              </span>
            </div>
          </div>

          <div className="about-text-col">
            <h3>
              Passionate Full Stack Developer
            </h3>

            <p>
              I'm Kanish S, a B.Tech Information
              Technology student at Sri Eshwar
              College of Engineering with a strong
              interest in Full Stack Development,
              Software Engineering, and Problem
              Solving.
            </p>

            <p>
              I specialize in building modern web
              applications using React.js,
              Node.js, Express.js, MongoDB, and
              Java. I enjoy transforming ideas into
              scalable products that provide
              meaningful user experiences.
            </p>

            <p>
              Apart from development, I actively
              participate in hackathons, coding
              contests, and technical events to
              continuously improve my skills and
              stay updated with emerging
              technologies.
            </p>

            <div className="about-tech-stack">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Java</span>
              <span>AWS</span>
              <span>Git</span>
              <span>REST APIs</span>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <h4>10+</h4>
                <span>Projects</span>
              </div>

              <div className="stat-box">
                <h4>800+</h4>
                <span>Problems Solved</span>
              </div>

              <div className="stat-box">
                <h4>3+</h4>
                <span>Hackathons</span>
              </div>
            </div>

            <div className="highlights-row">
              {highlights.map(
                ({ icon, label, cls }) => (
                  <motion.div
                    key={label}
                    className={`highlight-card ${cls}`}
                    whileHover={{ y: -4 }}
                  >
                    <span className="hl-icon">
                      {icon}
                    </span>

                    <span className="hl-label">
                      {label}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}