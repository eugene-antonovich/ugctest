import header from "./header.module.scss";

interface HeaderListItemProps {
  title: string;
}
const HeaderListItem = (props: HeaderListItemProps) => {
  return <li className={header.headerListItem}>{props.title}</li>;
};

export default HeaderListItem;
