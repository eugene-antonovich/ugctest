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
    <section className={contact.contact}>
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
    </section>
  );
};

export default Contact;
