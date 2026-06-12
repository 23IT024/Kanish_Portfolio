import { motion } from "framer-motion";
import { FaBuilding, FaBook, FaPencilAlt } from "react-icons/fa";

const entries = [
  {
    school: "Sri Eshwar College of Engineering",
    degree: "B.Tech Information Technology",
    duration: "2023 – 2027",
    badge: "CGPA 7.75",
    coursework:
      "Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Object Oriented Programming and Full Stack Development.",
    Icon: FaBuilding,
    color: "#7F77DD",
    bg: "#EEEDFE",
    border: "#AFA9EC",
  },
  {
    school: "The Modern Academy",
    degree: "Higher Secondary Education (HSC)",
    duration: "2022 – 2023",
    badge: "89.5%",
    coursework:
      "Focused on Mathematics, Physics, Chemistry and Computer Science with excellent academic performance.",
    Icon: FaBook,
    color: "#0F6E56",
    bg: "#E1F5EE",
    border: "#5DCAA5",
  },
  {
    school: "The Modern Academy",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "2020 – 2021",
    badge: "Passed",
    coursework:
      "Built a strong academic foundation while actively participating in school activities and competitions.",
    Icon: FaPencilAlt,
    color: "#D85A30",
    bg: "#FAECE7",
    border: "#F0997B",
  },
];

export default function Education() {
  return (
    <>
      <style>{`
        .edu-section{
          padding:5rem 7rem;
          background:#fff;
        }

        .edu-header{
          display:flex;
          align-items:center;
          gap:16px;
          margin-bottom:2rem;
        }

        .edu-title{
          font-size:28px;
          font-weight:500;
          color:#2C2C2A;
          white-space:nowrap;
          margin:0;
        }

        .edu-line{
          flex:1;
          height:1px;
          background:#e5e5e3;
        }

        .edu-timeline{
          position:relative;
          display:flex;
          flex-direction:column;
          gap:24px;
        }

        .edu-row{
          display:grid;
          grid-template-columns:70px 1fr;
          gap:20px;
          align-items:start;
        }

        .edu-spine{
          display:flex;
          flex-direction:column;
          align-items:center;
          height:100%;
        }

        .edu-dot{
          width:52px;
          height:52px;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:20px;
          z-index:2;
        }

        .edu-stem{
          width:2px;
          flex:1;
          min-height:120px;
          background:#e5e5e3;
          margin-top:8px;
        }

        .edu-card{
          border:0.5px solid #e5e5e3;
          border-radius:18px;
          overflow:hidden;
          background:#fff;
          transition:all .3s ease;
        }

        .edu-card:hover{
          transform:translateY(-6px);
          box-shadow:0 12px 24px rgba(0,0,0,0.05);
        }

        .edu-top{
          height:5px;
        }

        .edu-body{
          padding:1.8rem;
        }

        .edu-head{
          display:flex;
          gap:14px;
          align-items:flex-start;
          margin-bottom:16px;
        }

        .edu-icon{
          width:50px;
          height:50px;
          border-radius:14px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:20px;
          flex-shrink:0;
        }

        .edu-school{
          font-size:20px;
          font-weight:600;
          color:#2C2C2A;
          margin:0 0 5px;
        }

        .edu-degree{
          font-size:14px;
          color:#5F5E5A;
          margin:0;
        }

        .edu-meta{
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
          gap:10px;
          margin-bottom:14px;
        }

        .edu-badge{
          padding:6px 14px;
          border-radius:50px;
          font-size:12px;
          font-weight:500;
        }

        .edu-duration{
          font-size:13px;
          color:#5F5E5A;
        }

        .edu-coursework{
          font-size:14px;
          color:#5F5E5A;
          line-height:1.8;
          margin:0;
        }

        @media(max-width:1000px){
          .edu-section{
            padding:4rem 2rem;
          }
        }

        @media(max-width:768px){
          .edu-section{
            padding:4rem 1.5rem;
          }

          .edu-row{
            grid-template-columns:55px 1fr;
            gap:14px;
          }

          .edu-dot{
            width:42px;
            height:42px;
            font-size:16px;
          }

          .edu-stem{
            min-height:140px;
          }

          .edu-title{
            font-size:24px;
          }

          .edu-school{
            font-size:18px;
          }

          .edu-body{
            padding:1.4rem;
          }

          .edu-meta{
            flex-direction:column;
            align-items:flex-start;
          }
        }

        @media(max-width:520px){
          .edu-head{
            flex-direction:column;
          }

          .edu-icon{
            width:45px;
            height:45px;
          }
        }
      `}</style>

      <section id="education" name="education" className="edu-section">
        <motion.div
          className="edu-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="edu-title">Education</h2>
          <div className="edu-line"></div>
        </motion.div>

        <div className="edu-timeline">
          {entries.map((item, index) => (
            <motion.div
              key={index}
              className="edu-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="edu-spine">
                <div
                  className="edu-dot"
                  style={{ background: item.color }}
                >
                  <item.Icon />
                </div>

                {index !== entries.length - 1 && (
                  <div className="edu-stem"></div>
                )}
              </div>

              <div
                className="edu-card"
                style={{ borderColor: item.border }}
              >
                <div
                  className="edu-top"
                  style={{ background: item.color }}
                ></div>

                <div className="edu-body">
                  <div className="edu-head">
                    <div
                      className="edu-icon"
                      style={{
                        background: item.bg,
                        color: item.color,
                        border: `0.5px solid ${item.border}`
                      }}
                    >
                      <item.Icon />
                    </div>

                    <div>
                      <h3 className="edu-school">
                        {item.school}
                      </h3>

                      <p className="edu-degree">
                        {item.degree}
                      </p>
                    </div>
                  </div>

                  <div className="edu-meta">
                    <span
                      className="edu-badge"
                      style={{
                        background: item.bg,
                        color: item.color,
                        border: `0.5px solid ${item.border}`
                      }}
                    >
                      {item.badge}
                    </span>

                    <span className="edu-duration">
                      {item.duration}
                    </span>
                  </div>

                  <p className="edu-coursework">
                    {item.coursework}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}