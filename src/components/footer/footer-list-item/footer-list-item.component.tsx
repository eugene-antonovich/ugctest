import list from "./footer-list-item.module.scss";

interface FooterListItemProps {
  title: string,
  link: string
}

const FooterListItem = (props: FooterListItemProps) => {
  return (
        <li className={list.listItemWrap}>{props.title}</li>
  )
};

export default FooterListItem;
