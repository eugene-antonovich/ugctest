import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../title-component/title.component";
import ContactInput from "./contact-input/contact-input.component";
import ContactItem from "./contact-item/contact-item.component";
import contact from "./contact.module.scss";

const Contact = () => {
  return (
      <section className={contact.contact} id="contact-section">
        <div className="container">
          <Title title={"Contact us!"} />
          <div className={contact.contactWrap}>
            <ContactInput type={"text"} placeholder={"Your name"} />
            <ContactInput type={"tel"} placeholder={"Your phone number"} />
            <ContactInput type={"email"} placeholder={"Your email"} />
            <div className={contact.contactTextareaWrap}>
              <textarea rows={15} placeholder="Your message..."></textarea>
            </div>
            <button className={contact.contactButton}>Send message</button>

            <div className={contact.contactItemsWrap}>
              <ContactItem
                icon={<FontAwesomeIcon icon={faLocationDot} />}
                title={"Location"}
                description={"Rybnicka 64, 52-016 Wrocław"}
              />
              <ContactItem
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                title={"Email"}
                description={"Email: Example@gmail.com"}
              />
              <ContactItem
                icon={<FontAwesomeIcon icon={faPhone} />}
                title={"Phone"}
                description={"+48 124 236 0693"}
              />
            </div>
          </div>
        </div>
        <div className={contact.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40095.61881328165!2d16.998286996516477!3d51.09044718601567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2c870513769%3A0x40fa0c8c9c68bd31!2sLedsy%20Custom%20Neon!5e0!3m2!1sru!2spl!4v1716555365575!5m2!1sru!2spl"
            loading="lazy"
          ></iframe>
        </div>
      </section>
  );
};

export default Contact;
