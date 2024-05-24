import { ReactNode } from "react";
import item from "./contact-item.module.scss";

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ContactItem = (props: ContactItemProps) => {
  return (
    <div className={item.itemWrap}>
      <div className={item.itemIconWrap}>{props.icon}</div>
      <h4 className={item.itemTitle}>{props.title}</h4>
      <p className={item.itemDescription}>{props.description}</p>
    </div>
  );
};

export default ContactItem;
