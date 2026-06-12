function Certifications() {
  const certifications = [
    {
      title: "C/C++ DSA",
      provider: "Udemy",
      color: "#7F77DD",
      bg: "#EEEDFE",
      border: "#AFA9EC"
    },
    {
      title: "Java Programming",
      provider: "Udemy",
      color: "#D85A30",
      bg: "#FAECE7",
      border: "#F0997B"
    },
    {
      title: "SQL",
      provider: "HackerRank",
      color: "#0F6E56",
      bg: "#E1F5EE",
      border: "#5DCAA5"
    }
  ];

  return (
    <>
      <style>{`
        .cert-section{
          padding:5rem 7rem;
          background:#fff;
        }

        .cert-header{
          display:flex;
          align-items:center;
          gap:16px;
          margin-bottom:2rem;
        }

        .cert-title{
          font-size:28px;
          font-weight:500;
          color:#2C2C2A;
          white-space:nowrap;
          margin:0;
        }

        .cert-line{
          flex:1;
          height:1px;
          background:#e5e5e3;
        }

        .cert-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:18px;
        }

        .cert-card{
          border:0.5px solid #e5e5e3;
          border-radius:18px;
          background:#fff;
          overflow:hidden;
          transition:all .3s ease;
        }

        .cert-card:hover{
          transform:translateY(-6px);
        }

        .cert-top{
          height:5px;
        }

        .cert-content{
          padding:1.8rem;
        }

        .cert-badge{
          display:inline-block;
          padding:6px 14px;
          border-radius:50px;
          font-size:11px;
          font-weight:500;
          margin-bottom:14px;
        }

        .cert-name{
          font-size:20px;
          font-weight:600;
          color:#2C2C2A;
          margin-bottom:10px;
        }

        .cert-provider{
          font-size:14px;
          color:#5F5E5A;
          line-height:1.8;
        }

        @media(max-width:1000px){
          .cert-section{
            padding:4rem 2rem;
          }

          .cert-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media(max-width:700px){
          .cert-section{
            padding:4rem 1.5rem;
          }

          .cert-grid{
            grid-template-columns:1fr;
          }

          .cert-title{
            font-size:24px;
          }
        }
      `}</style>

      <section className="cert-section">
        <div className="cert-header">
          <h2 className="cert-title">
            Certifications
          </h2>
          <div className="cert-line"></div>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card"
              style={{ borderColor: cert.border }}
            >
              <div
                className="cert-top"
                style={{ background: cert.color }}
              ></div>

              <div className="cert-content">
                <div
                  className="cert-badge"
                  style={{
                    background: cert.bg,
                    color: cert.color,
                    border: `0.5px solid ${cert.border}`
                  }}
                >
                  Certified
                </div>

                <h3 className="cert-name">
                  {cert.title}
                </h3>

                <p className="cert-provider">
                  Issued by <strong>{cert.provider}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Certifications;