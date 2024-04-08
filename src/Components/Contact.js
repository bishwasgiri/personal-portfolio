import { MdMarkEmailRead } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { forwardRef } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { useState } from "react";

import "../CSS/contact.css";

const Contact = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // console.log(email, subject, message);
    const response = await fetch("http://localhost:4000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
    });

    const json = await response.json();

    if (response.ok) {
      const value = json.message;
      setError(value);
      setIsLoading(false);
      setEmail("");
      setSubject("");
      setMessage("");
    }
    if (!response.ok) {
      const value = json.error;
      setError(value);
      setIsLoading(false);
    }
  };
  return (
    <div className="contact-container" ref={ref}>
      <div className="contact-header">
        <div className="contact-heading">Contact</div>
      </div>
      <div className="contact-content">
        <div className="contact-card">
          <div className="contacts">
            <div className="contact">
              <MdMarkEmailRead size={50} />
              <span className="actual-contact">giribishwas4@gmail.com</span>
            </div>
            <div className="contact">
              <TbPhoneCall size={50} />
              <span className="actual-contact">9808103562</span>
            </div>
            <div className="contact">
              <FaLinkedin size={50} />
              <span className="actual-contact">Linked In</span>
            </div>
          </div>
          <div className="messages">
            <div className="form">
              <form action="" onSubmit={handleSendMail}>
                <div className="input-grp">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>
                <div className="input-grp">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={handleSubject}
                  />
                </div>
                <div className="input-grp">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={handleMessage}
                  ></textarea>
                </div>

                <div className="input-grp">
                  {error && <div className="message">{error}</div>}
                  <button className="btn" type="submit">
                    <span className="touch">
                      {isLoading ? "Sending.." : "Send"}
                    </span>
                    <CiLocationArrow1 size={25} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
