import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const profiles = [
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    stats: "280+ Problems",
    rating: "Rating: 1512",
    color: "#BA7517",
    bg: "#FAEEDA",
    border: "#FAC775",
    link: "https://leetcode.com"
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks />,
    stats: "400+ Problems",
    rating: "Rank: 75,012",
    color: "#0F6E56",
    bg: "#E1F5EE",
    border: "#5DCAA5",
    link: "https://geeksforgeeks.org"
  },
  {
    name: "Skillrack",
    icon: <FaCode />,
    stats: "200+ Problems",
    rating: "Advanced",
    color: "#7F77DD",
    bg: "#EEEDFE",
    border: "#AFA9EC",
    link: "https://www.skillrack.com"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
};

function CodingProfiles() {
  return (
    <>
      <style>{`
        .coding-section{
          padding:5rem 7rem;
          background:#fff;
        }

        .coding-header{
          display:flex;
          align-items:center;
          gap:16px;
          margin-bottom:2rem;
        }

        .coding-title{
          font-size:28px;
          font-weight:500;
          color:#2C2C2A;
          white-space:nowrap;
          margin:0;
        }

        .coding-line{
          flex:1;
          height:1px;
          background:#e5e5e3;
        }

        .coding-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }

        .profile-card{
          border:0.5px solid #e5e5e3;
          border-radius:18px;
          background:#fff;
          padding:2rem;
          text-decoration:none;
          text-align:center;
          transition:all .3s ease;
        }

        .profile-card:hover{
          transform:translateY(-6px);
        }

        .profile-icon{
          font-size:48px;
          margin-bottom:1rem;
          display:flex;
          justify-content:center;
        }

        .profile-name{
          font-size:20px;
          font-weight:600;
          margin-bottom:10px;
        }

        .profile-stat{
          font-size:14px;
          color:#5F5E5A;
          margin-bottom:6px;
        }

        .profile-rating{
          font-size:13px;
          color:#5F5E5A;
          margin-bottom:1.2rem;
        }

        .visit-btn{
          font-size:13px;
          font-weight:500;
        }

        @media (max-width: 1000px){
          .coding-section{
            padding:4rem 2rem;
          }

          .coding-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media (max-width: 700px){
          .coding-grid{
            grid-template-columns:1fr;
          }

          .coding-section{
            padding:4rem 1.5rem;
          }

          .coding-title{
            font-size:24px;
          }
        }
      `}</style>

      <section className="coding-section">
        <div className="coding-header">
          <h2 className="coding-title">
            Coding Profiles
          </h2>
          <div className="coding-line"></div>
        </div>

        <motion.div
          className="coding-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profiles.map((profile, idx) => (
            <motion.a
              key={idx}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              variants={cardVariants}
              whileHover={{
                y: -8
              }}
              style={{
                borderColor: profile.border
              }}
            >
              <motion.div
                className="profile-icon"
                style={{ color: profile.color }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                {profile.icon}
              </motion.div>

              <h3
                className="profile-name"
                style={{ color: profile.color }}
              >
                {profile.name}
              </h3>

              <p className="profile-stat">
                {profile.stats}
              </p>

              <p className="profile-rating">
                {profile.rating}
              </p>

              <div
                className="visit-btn"
                style={{ color: profile.color }}
              >
                Visit Profile →
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default CodingProfiles;