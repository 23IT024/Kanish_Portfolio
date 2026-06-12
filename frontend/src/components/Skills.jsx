import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiVercel,
  SiRender,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "../styles/skills.css";

const skills = [
  {
    name: "React",
    Icon: FaReact,
    color: "#7F77DD",
    bg: "#EEEDFE",
    border: "#AFA9EC",
  },
  {
    name: "Java",
    Icon: FaJava,
    color: "#D85A30",
    bg: "#FAECE7",
    border: "#F0997B",
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "#3B6D11",
    bg: "#EAF3DE",
    border: "#97C459",
  },
  {
    name: "Express",
    Icon: SiExpress,
    color: "#5F5E5A",
    bg: "#F1EFE8",
    border: "#B4B2A9",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    color: "#0F6E56",
    bg: "#E1F5EE",
    border: "#5DCAA5",
  },
  {
    name: "AWS",
    Icon: FaAws,
    color: "#BA7517",
    bg: "#FAEEDA",
    border: "#FAC775",
  },
  {
    name: "Git",
    Icon: FaGitAlt,
    color: "#A32D2D",
    bg: "#FCEBEB",
    border: "#F09595",
  },
  {
    name: "GitHub",
    Icon: FaGithub,
    color: "#2C2C2A",
    bg: "#F1EFE8",
    border: "#B4B2A9",
  },
  {
    name: "Postman",
    Icon: SiPostman,
    color: "#993C1D",
    bg: "#FAECE7",
    border: "#F0997B",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    color: "#185FA5",
    bg: "#E6F1FB",
    border: "#85B7EB",
  },
  {
    name: "Render",
    Icon: SiRender,
    color: "#085041",
    bg: "#E1F5EE",
    border: "#5DCAA5",
  },
  {
    name: "Figma",
    Icon: SiFigma,
    color: "#534AB7",
    bg: "#EEEDFE",
    border: "#AFA9EC",
  },
  {
    name: "Canva",
    Icon: SiCanva,
    color: "#185FA5",
    bg: "#E6F1FB",
    border: "#85B7EB",
  },
  {
    name: "VS Code",
    Icon: VscVscode,
    color: "#993556",
    bg: "#FBEAF0",
    border: "#ED93B1",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills</h2>
        <div className="title-line" />
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map(({ name, Icon, color, bg, border }) => (
          <motion.div
            key={name}
            className="skill-card"
            variants={item}
            whileHover={{ y: -6, scale: 1.04 }}
            style={{
              "--sc": color,
              "--sb": bg,
              "--sbr": border,
            }}
          >
            <div className="skill-icon-wrap">
              <Icon style={{ color, fontSize: "30px" }} />
            </div>

            <span className="skill-name">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}