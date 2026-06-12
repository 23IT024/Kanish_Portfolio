import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

import "../styles/loader.css";

const techIcons = [
  { name: "SiReact", color: "#61DAFB" },
  { name: "SiJavascript", color: "#F7DF1E" },
  { name: "SiHtml5", color: "#E34F26" },
  { name: "SiCss3", color: "#1572B6" },
  { name: "SiNodedotjs", color: "#339933" },
  { name: "SiMongodb", color: "#47A248" },
  { name: "SiExpress", color: "#000000" },
  { name: "SiGithub", color: "#181717" },
  { name: "SiGit", color: "#F05032" },
  { name: "SiAmazonaws", color: "#FF9900" },
  { name: "SiVisualstudiocode", color: "#007ACC" },
  { name: "SiPostman", color: "#FF6C37" },
  { name: "SiFigma", color: "#F24E1E" },
  { name: "SiLeetcode", color: "#FFA116" },
  { name: "SiHackerrank", color: "#00EA64" },
];

const positions = [
  { left: "8%", top: "10%" },
  { left: "20%", top: "18%" },
  { left: "85%", top: "12%" },
  { left: "72%", top: "22%" },
  { left: "10%", top: "70%" },
  { left: "22%", top: "82%" },
  { left: "84%", top: "75%" },
  { left: "70%", top: "85%" },
  { left: "50%", top: "12%" },
  { left: "50%", top: "88%" },
  { left: "6%", top: "45%" },
  { left: "92%", top: "42%" },
  { left: "35%", top: "6%" },
  { left: "65%", top: "6%" },
  { left: "50%", top: "96%" },
];

function Loader() {
  return (
    <div className="loader">
      {/* Background Grid */}
      <div className="grid-bg" />

      {/* Gradient Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Orbit Rings */}
      <div className="orbit orbit-1" />
      <div className="orbit orbit-2" />
      <div className="orbit orbit-3" />

      {/* Floating Technologies */}
      <div className="tech-universe">
        {techIcons.map(({ name, color }, index) => {
          const Icon = SiIcons[name];
          const IconComponent = Icon
            ? Icon
            : () => <span className="fallback-icon">•</span>;

          return (
          <motion.div
            key={index}
            className="floating-icon"
            style={{
              color,
              ...positions[index % positions.length],
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 360],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8 + (index % 5),
              repeat: Infinity,
              ease: "easeInOut",
            }}
            >
            <IconComponent />
          </motion.div>
          );
        })}
      </div>

      {/* Center Section */}
      <div className="loader-center">
        <motion.div
          className="loader-name"
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          {"KANISH".split("").map((letter, i) => (
            <motion.span
              key={i}
              className="loader-letter"
              initial={{
                opacity: 0,
                y: -40,
                rotate: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="loader-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          Building Experiences • Crafting Code • Shipping Products
        </motion.p>

        <div className="loader-progress">
          <motion.div
            className="loader-progress-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          className="loader-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
        >
          Initializing Portfolio...
        </motion.div>
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(35)].map((_, index) => (
          <motion.span
            key={index}
            className="particle"
            animate={{
              y: [0, -120],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Background Code */}
      <motion.div
        className="code-watermark"
        animate={{
          x: [-30, 30, -30],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        const developer = "KANISH";
      </motion.div>
    </div>
  );
}

export default Loader;