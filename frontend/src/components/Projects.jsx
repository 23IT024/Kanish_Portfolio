import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/projects.css";

import Trashgo from "../assets/Trashgo.png";
import Chat from "../assets/Chat.png";
import Job from "../assets/Job.png";

const projects = [
  {
    title: "CHATLANG",
    image: Chat,
    desc: "Real-time chat and video communication platform with rooms, authentication, WebSocket messaging, and seamless user interactions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    accent: "#7F77DD",
    live: "#",
    repo: "#",
  },
  {
    title: "HIRE HUB",
    image: Job,
    desc: "Full-stack job portal featuring recruiter dashboards, application tracking, job listings, and user profile management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    accent: "#1D9E75",
    live: "#",
    repo: "#",
  },
  {
    title: "TRASHGO",
    image: Trashgo,
    desc: "Smart waste management application with collection scheduling, notifications, and location-based tracking.",
    tech: ["React Native", "Express.js", "MongoDB"],
    accent: "#D85A30",
    live: "#",
    repo: "#",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          Projects
        </h2>

        <div className="title-line"></div>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={card}
            whileHover={{ y: -8 }}
            style={{
              "--accent": project.accent,
            }}
          >
            <div className="proj-thumb">
              <img
                src={project.image}
                alt={project.title}
                className="proj-image"
              />
            </div>

            <div className="proj-body">
              <h3
                className="proj-title"
                style={{ color: project.accent }}
              >
                {project.title}
              </h3>

              <p className="proj-desc">
                {project.desc}
              </p>

              <div className="proj-tech-row">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="proj-tech-tag"
                    style={{
                      color: project.accent,
                      background: `${project.accent}15`,
                      border: `0.5px solid ${project.accent}50`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="proj-btns">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-primary"
                  style={{
                    background: project.accent,
                  }}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-btn proj-btn-secondary"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}70`,
                  }}
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}