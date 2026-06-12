function Internship() {
  return (
    <>
      <style>{`
        .internship-section {
          padding: 5rem 7rem;
          background: #fff;
        }

        .internship-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 2rem;
        }

        .internship-title {
          font-size: 28px;
          font-weight: 500;
          color: #2C2C2A;
          white-space: nowrap;
          margin: 0;
        }

        .internship-line {
          flex: 1;
          height: 1px;
          background: #e5e5e3;
        }

        .internship-card {
          border: 0.5px solid #e5e5e3;
          border-radius: 18px;
          background: #fff;
          padding: 2rem 2.5rem;
          transition: all 0.3s ease;
        }

        .internship-card:hover {
          transform: translateY(-4px);
          border-color: #AFA9EC;
          box-shadow: 0 12px 24px rgba(127,119,221,0.08);
        }

        .company-name {
          font-size: 22px;
          font-weight: 600;
          color: #2C2C2A;
          margin-bottom: 10px;
        }

        .role-tag {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 500;
          background: #EEEDFE;
          color: #534AB7;
          border: 0.5px solid #AFA9EC;
          margin-bottom: 18px;
        }

        .internship-description {
          font-size: 14px;
          color: #5F5E5A;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .internship-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .highlight-card {
          border: 0.5px solid #e5e5e3;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          background: #fafafa;
          transition: all 0.2s ease;
        }

        .highlight-card:hover {
          border-color: #AFA9EC;
          background: #EEEDFE30;
        }

        .highlight-title {
          font-size: 12px;
          color: #5F5E5A;
          margin-bottom: 6px;
        }

        .highlight-value {
          font-size: 14px;
          font-weight: 600;
          color: #2C2C2A;
        }

        @media (max-width: 900px) {
          .internship-section {
            padding: 4rem 1.5rem;
          }

          .internship-card {
            padding: 1.5rem;
          }

          .internship-highlights {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="internship-section">
        <div className="internship-header">
          <h2 className="internship-title">Internship</h2>
          <div className="internship-line"></div>
        </div>

        <div className="internship-card">
          <h3 className="company-name">Better Tomorrow</h3>

          <div className="role-tag">
            Full Stack Development Intern
          </div>

          <p className="internship-description">
            Worked on MERN stack and developed an Expense Tracker
            with authentication, protected routes and real-time
            MongoDB storage. Built responsive UI components and
            integrated REST APIs.
          </p>

          <div className="internship-highlights">
            <div className="highlight-card">
              <div className="highlight-title">Tech Stack</div>
              <div className="highlight-value">MERN</div>
            </div>

            <div className="highlight-card">
              <div className="highlight-title">Project</div>
              <div className="highlight-value">Expense Tracker</div>
            </div>

            <div className="highlight-card">
              <div className="highlight-title">Focus</div>
              <div className="highlight-value">Full Stack</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Internship;