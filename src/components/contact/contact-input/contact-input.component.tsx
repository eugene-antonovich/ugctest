import input from "./contact-input.module.scss";

interface ContactInputProps {
  type: string;
  placeholder: string;
}

const ContactInput = (props: ContactInputProps) => {
  return (
    <div className={input.inputWrap}>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

export default ContactInput;
