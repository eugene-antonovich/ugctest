import list from "./footer-list-item.module.scss";

interface FooterListItemProps {
  title: string;
  link: string;
}

const FooterListItem = (props: FooterListItemProps) => {
  return (
    <li className={list.listItemWrap}>
      <a href={"#" + props.link}>{props.title}</a>
    </li>
  );
};

export default FooterListItem;
