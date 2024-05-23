import Title from "../title-component/title.component";
import ContactInput from "./contact-input/contact-input.component";
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
