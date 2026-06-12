import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import Profile from "../assets/profile.png";
import "../styles/hero.css";

const WORDS = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "React Developer",
  "Code Architect",
];

const COLORS = [
  "#7F77DD",
  "#534AB7",
  "#1D9E75",
  "#D85A30",
  "#D4537E",
  "#378ADD",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = WORDS[wi];

    const timer = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, ci + 1));
        setCi((c) => c + 1);

        if (ci + 1 === word.length) {
          setTimeout(() => setDel(true), 1800);
        }
      } else {
        setText(word.slice(0, ci - 1));
        setCi((c) => c - 1);

        if (ci - 1 === 0) {
          setDel(false);
          setWi((w) => (w + 1) % WORDS.length);
        }
      }
    }, del ? 55 : 90);

    return () => clearTimeout(timer);
  }, [ci, del, wi]);

  return (
    <span className="tw-text">
      {text}
      <span className="tw-cursor">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Animated Background Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* LEFT SECTION */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          type: "spring",
        }}
      >
        <motion.div
          className="greeting-badge"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="badge-dot" />
          Hello, World
        </motion.div>

        <h1 className="hero-name">
          {["K", "A", "N", "I", "S", "H"].map((letter, i) => (
            <motion.span
              key={i}
              className="hero-letter"
              style={{ color: COLORS[i] }}
              initial={{
                y: -60,
                opacity: 0,
                rotate: -20,
              }}
              animate={{
                y: 0,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                y: -12,
                scale: 1.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <h2 className="hero-subtitle">
          <Typewriter />
        </h2>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Building high-performance web applications with modern technologies.
          Passionate about creating scalable solutions, seamless user
          experiences, and elegant digital products.
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <motion.a
            href="https://drive.google.com/drive/folders/1LrHRM_xaNaQyKYEBA366O7TyvNAUWTW-?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <FaExternalLinkAlt size={12} />
            Resume
          </motion.a>

          <motion.button
            className="btn btn-secondary"
            onClick={scrollToContact}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <FaCode size={13} />
            Contact
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {[
            {
              icon: <FaGithub />,
              href: "https://github.com/23IT024",
              cls: "soc-gh",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/kanish-s-84a8322ab",
              cls: "soc-li",
              label: "LinkedIn",
            },
            {
              icon: <SiLeetcode />,
              href: "https://leetcode.com/u/kanish_s_28/",
              cls: "soc-lc",
              label: "LeetCode",
            },
          ].map(({ icon, href, cls, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`soc-btn ${cls}`}
              aria-label={label}
              whileHover={{
                scale: 1.15,
                y: -4,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION */}
      {/* RIGHT SECTION */}
<motion.div
  className="hero-right"
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
    type: "spring",
    delay: 0.3,
  }}
>
  <motion.div
    className="image-card"
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="avatar-ring">
      <div className="avatar-inner">
        <img
          src={Profile}
          alt="Kanish"
          className="profile-img"
        />
      </div>
    </div>

    <div className="available-badge">
      🚀 Available for Internships & Opportunities
    </div>
  </motion.div>

  <motion.div
    className="chips-row"
    initial={{
      opacity: 0,
      y: 10,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 1.4,
    }}
  >
    <span className="chip chip-purple">
      MERN Stack
    </span>

    <span className="chip chip-teal">
      Open Source
    </span>

    <span className="chip chip-amber">
      Hackathon Winner
    </span>
  </motion.div>
</motion.div>

    </section>
  );
}