import header from "./header.module.scss";

interface HeaderListItemProps {
  title: string;
  linkSection: string;
}
const HeaderListItem = (props: HeaderListItemProps) => {
  return (
    <li className={header.headerListItem}>
      <a href={"#" + props.linkSection}>{props.title}</a>
    </li>
  );
};

export default HeaderListItem;
