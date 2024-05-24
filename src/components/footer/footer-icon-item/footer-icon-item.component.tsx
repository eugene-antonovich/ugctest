import { ReactNode } from "react";
import icon from "./footer-icon-item.module.scss";

interface FooterIconItemProps {
  icon: ReactNode;
  link: string;
}

const FooterIconItem = (props: FooterIconItemProps) => {
  return (
    <div className={icon.iconWrap}>
      <a href={props.link} target="_blank">
        {props.icon}
      </a>
    </div>
  );
};

export default FooterIconItem;
