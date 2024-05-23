import title from "./title.module.scss";

interface TitleProps {
  title: string;
}
const Title = (props: TitleProps) => {
  return (
    <div className={title.titleWrap}>
      <span className={title.titlePseudo}></span>
      <h2 className={title.title}>{props.title}</h2>
      <span className={title.titlePseudo}></span>
    </div>
  );
};

export default Title;
