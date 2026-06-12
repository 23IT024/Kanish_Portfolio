import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFileAlt
} from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const name = fd.get("name") || "";
    const email = fd.get("email") || "";
    const message = fd.get("message") || "";

    const subject = `Portfolio contact from ${name || email}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    const mailto = `mailto:sjkanish2006@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's mail client with composed message
    window.location.href = mailto;
  };

  return (
    <>
      <style>{`
        .contact-section{
          padding:5rem 7rem;
          background:#fff;
        }

        .contact-header{
          display:flex;
          align-items:center;
          gap:16px;
          margin-bottom:2rem;
        }

        .contact-title{
          font-size:28px;
          font-weight:500;
          color:#2C2C2A;
          white-space:nowrap;
          margin:0;
        }

        .contact-line{
          flex:1;
          height:1px;
          background:#e5e5e3;
        }

        .contact-container{
          display:grid;
          grid-template-columns:1.3fr 0.8fr;
          gap:24px;
        }

        .contact-card{
          border:0.5px solid #e5e5e3;
          border-radius:18px;
          background:#fff;
          padding:2rem;
          transition:all .3s ease;
        }

        .contact-card:hover{
          border-color:#AFA9EC;
          box-shadow:0 10px 30px rgba(127,119,221,.08);
        }

        .contact-subtitle{
          font-size:22px;
          font-weight:600;
          color:#2C2C2A;
          margin-bottom:10px;
        }

        .contact-description{
          font-size:14px;
          color:#5F5E5A;
          line-height:1.8;
          margin-bottom:1.5rem;
        }

        .contact-form{
          display:flex;
          flex-direction:column;
          gap:14px;
        }

        .contact-form input,
        .contact-form textarea{
          width:100%;
          padding:14px 16px;
          border:0.5px solid #e5e5e3;
          border-radius:12px;
          font-size:14px;
          outline:none;
          transition:.2s;
          box-sizing:border-box;
        }

        .contact-form input:focus,
        .contact-form textarea:focus{
          border-color:#AFA9EC;
        }

        .contact-form textarea{
          min-height:140px;
          resize:none;
        }

        .contact-btn{
          border:none;
          padding:14px;
          border-radius:12px;
          background:#7F77DD;
          color:#fff;
          font-size:14px;
          font-weight:500;
          cursor:pointer;
          transition:.3s;
        }

        .contact-btn:hover{
          background:#6b63cf;
        }

        .info-column{
          display:flex;
          flex-direction:column;
          gap:16px;
        }

        .info-card{
          border:0.5px solid #e5e5e3;
          border-radius:18px;
          background:#fff;
          padding:18px;
          display:flex;
          align-items:center;
          gap:16px;
          transition:.3s;
        }

        .info-left{ display:flex; align-items:center; gap:16px; flex:1; }

        .info-action{
          padding:8px 12px; border-radius:10px; background:#7F77DD; color:#fff;
          text-decoration:none; font-size:13px; font-weight:500; white-space:nowrap;
        }

        .info-action:hover{ background:#6b63cf; }

        .info-card:hover{
          transform:translateY(-4px);
        }

        .info-icon{
          width:52px;
          height:52px;
          border-radius:14px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:20px;
          flex-shrink:0;
        }

        .phone{
          background:#EEEDFE;
          color:#7F77DD;
          border:0.5px solid #AFA9EC;
        }

        .email{
          background:#E1F5EE;
          color:#0F6E56;
          border:0.5px solid #5DCAA5;
        }

        .location{
          background:#FAECE7;
          color:#D85A30;
          border:0.5px solid #F0997B;
        }

        .social{
          background:#E6F1FB;
          color:#378ADD;
          border:0.5px solid #85B7EB;
        }

        .info-content h4{
          margin:0 0 6px;
          color:#2C2C2A;
          font-size:15px;
        }

        .info-content p,
        .info-content a{
          margin:0;
          color:#5F5E5A;
          font-size:14px;
          text-decoration:none;
          word-break:break-word;
        }

        .info-content a:hover{
          color:#7F77DD;
        }

        @media(max-width:1000px){
          .contact-section{
            padding:4rem 2rem;
          }

          .contact-container{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:700px){
          .contact-section{
            padding:4rem 1.5rem;
          }

          .contact-title{
            font-size:24px;
          }

          .contact-card{
            padding:1.5rem;
          }

          .info-card{
            padding:14px;
          }
        }
      `}</style>

      <section
        id="contact"
        name="contact"
        className="contact-section"
      >
        <div className="contact-header">
          <h2 className="contact-title">
            Get In Touch
          </h2>
          <div className="contact-line"></div>
        </div>

        <div className="contact-container">

          <div className="contact-card">
            <h3 className="contact-subtitle">
              Let's Connect 👋
            </h3>

            <p className="contact-description">
              I'm always interested in discussing new
              opportunities, innovative projects, and
              collaborations. Feel free to send me a
              message and I'll get back to you as soon
              as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
              />

              <button
                type="submit"
                className="contact-btn"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="info-column">

            <div className="info-card">
              <div className="info-left">
                <div className="info-icon phone">
                  <FaPhone />
                </div>

                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 8668063354</p>
                </div>
              </div>

              <a className="info-action" href="tel:+918668063354">
                Call
              </a>
            </div>

            <div className="info-card">
              <div className="info-left">
                <div className="info-icon email">
                  <FaEnvelope />
                </div>

                <div className="info-content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:sjkanish2006@gmail.com">sjkanish2006@gmail.com</a>
                  </p>
                </div>
              </div>

              <a className="info-action" href="mailto:sjkanish2006@gmail.com">
                Email
              </a>
            </div>

            <div className="info-card">
              <div className="info-left">
                <div className="info-icon location">
                  <FaMapMarkerAlt />
                </div>

                <div className="info-content">
                  <h4>Location</h4>
                    <p>
                      Coimbatore,
                      Tamil Nadu, India
                    </p>
                </div>
              </div>

              <a
                className="info-action"
                href="https://www.google.com/maps/search/?api=1&query=Coimbatore%2C+Tamil+Nadu+India"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </div>

            <div className="info-card">
              <div className="info-left">
                <div className="info-icon social">
                  <FaLinkedin />
                </div>

                <div className="info-content">
                  <h4>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/kanish-s-84a8322ab"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              <a
                className="info-action"
                href="https://www.linkedin.com/in/kanish-s-84a8322ab"
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </div>

            <div className="info-card">
              <div className="info-left">
                <div className="info-icon social">
                  <FaGithub />
                </div>

                <div className="info-content">
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/23IT024"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repositories
                  </a>
                </div>
              </div>

              <a
                className="info-action"
                href="https://github.com/23IT024"
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </div>

            <div className="info-card">
              <div className="info-left">
                <div className="info-icon social">
                  <FaFileAlt />
                </div>

                <div className="info-content">
                  <h4>Resume</h4>
                  <a
                    href="https://drive.google.com/drive/folders/1LrHRM_xaNaQyKYEBA366O7TyvNAUWTW-?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume
                  </a>
                </div>
              </div>

              <a
                className="info-action"
                href="https://drive.google.com/drive/folders/1LrHRM_xaNaQyKYEBA366O7TyvNAUWTW-?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
