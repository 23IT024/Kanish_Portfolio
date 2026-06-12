import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const LINKS = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
      }}
    >
      {/* Logo */}
      <motion.div
        className="nav-brand"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaCode className="brand-icon" />
        <span>KANISH S</span>
      </motion.div>

      {/* Desktop Links */}
      <div className="nav-links">
        {LINKS.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
            }}
          >
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="nav-link-active"
              className="nav-link"
            >
              <motion.span
                whileHover={{ color: "#7F77DD" }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop Hire Me */}
      <Link
        to="contact"
        smooth={true}
        duration={600}
        offset={-80}
      >
        <motion.button
          className="nav-cta"
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Hire Me
        </motion.button>
      </Link>

      {/* Mobile Toggle */}
      <button
        className="nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          className="nav-drawer"
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {LINKS.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              className="drawer-link"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            onClick={() => setOpen(false)}
          >
            <button className="nav-cta drawer-cta">
              Hire Me
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}