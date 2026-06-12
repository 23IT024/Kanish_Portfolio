function Achievements() {
  const achievements = [
    {
      title: "🏆 Hackathon Winner",
      subtitle: "24-Hour National Level Hackathon",
      description:
        "Led a team to develop an innovative solution under strict deadlines and secured 1st place with a cash prize of ₹5,000.",
      color: "#7F77DD",
      bg: "#EEEDFE",
      border: "#AFA9EC"
    },
    {
      title: "🥈 Project Expo Runner-Up",
      subtitle: "Department Project Exhibition",
      description:
        "Presented a full-stack application and received recognition for innovation, implementation, and user experience.",
      color: "#D85A30",
      bg: "#FAECE7",
      border: "#F0997B"
    },
    {
      title: "📄 Technical Presentation",
      subtitle: "Paper Presentation Competition",
      description:
        "Researched and presented emerging technologies, securing a top position among participating teams.",
      color: "#0F6E56",
      bg: "#E1F5EE",
      border: "#5DCAA5"
    },
    {
      title: "💻 Competitive Programming",
      subtitle: "LeetCode • GeeksforGeeks • Skillrack",
      description:
        "Solved 800+ coding problems covering Data Structures, Algorithms, SQL, and problem-solving concepts.",
      color: "#378ADD",
      bg: "#E6F1FB",
      border: "#85B7EB"
    },
    {
      title: "🚀 Full Stack Development",
      subtitle: "MERN Stack Projects",
      description:
        "Built and deployed multiple full-stack applications including Expense Tracker, Portfolio Website, and Authentication Systems.",
      color: "#1D9E75",
      bg: "#E1F5EE",
      border: "#5DCAA5"
    },
    {
      title: "🎓 Academic Excellence",
      subtitle: "Information Technology",
      description:
        "Maintained strong academic performance while actively participating in hackathons, coding contests, and technical events.",
      color: "#D4537E",
      bg: "#FBEAF0",
      border: "#ED93B1"
    }
  ];

  return (
    <>
      <style>{`
        .achievement-section{
          padding:5rem 7rem;
          background:#fff;
        }

        .achievement-header{
          display:flex;
          align-items:center;
          gap:16px;
          margin-bottom:2rem;
        }

        .achievement-title{
          font-size:28px;
          font-weight:500;
          color:#2C2C2A;
          white-space:nowrap;
          margin:0;
        }

        .achievement-line{
          flex:1;
          height:1px;
          background:#e5e5e3;
        }

        .achievement-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }

        .achievement-card{
          border:0.5px solid #e5e5e3;
          border-radius:18px;
          background:#fff;
          overflow:hidden;
          transition:all .3s ease;
        }

        .achievement-card:hover{
          transform:translateY(-6px);
        }

        .achievement-top{
          height:5px;
        }

        .achievement-content{
          padding:1.8rem;
        }

        .achievement-badge{
          display:inline-block;
          padding:6px 14px;
          border-radius:50px;
          font-size:11px;
          font-weight:500;
          margin-bottom:14px;
        }

        .achievement-name{
          font-size:18px;
          font-weight:600;
          color:#2C2C2A;
          margin-bottom:8px;
        }

        .achievement-subtitle{
          font-size:14px;
          font-weight:500;
          margin-bottom:12px;
        }

        .achievement-description{
          font-size:14px;
          color:#5F5E5A;
          line-height:1.8;
          margin:0;
        }

        @media(max-width:1000px){
          .achievement-section{
            padding:4rem 2rem;
          }

          .achievement-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media(max-width:700px){
          .achievement-section{
            padding:4rem 1.5rem;
          }

          .achievement-grid{
            grid-template-columns:1fr;
          }

          .achievement-title{
            font-size:24px;
          }
        }
      `}</style>

      <section className="achievement-section">
        <div className="achievement-header">
          <h2 className="achievement-title">
            Achievements
          </h2>
          <div className="achievement-line"></div>
        </div>

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card"
              style={{ borderColor: item.border }}
            >
              <div
                className="achievement-top"
                style={{ background: item.color }}
              />

              <div className="achievement-content">
                <div
                  className="achievement-badge"
                  style={{
                    background: item.bg,
                    color: item.color,
                    border: `0.5px solid ${item.border}`
                  }}
                >
                  Achievement
                </div>

                <h3 className="achievement-name">
                  {item.title}
                </h3>

                <div
                  className="achievement-subtitle"
                  style={{ color: item.color }}
                >
                  {item.subtitle}
                </div>

                <p className="achievement-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Achievements;

