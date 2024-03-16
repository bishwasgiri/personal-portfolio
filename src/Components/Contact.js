import { MdMarkEmailRead } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import "../CSS/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
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
              <form action="">
                <div className="input-grp">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="input-grp">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className="input-grp">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="input-grp">
                  <button className="btn" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
