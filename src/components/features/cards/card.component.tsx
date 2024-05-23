import card from "./card.module.scss";

interface CardProps {
  title: string;
  description: string;
  side: boolean;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={[props.side ? card.cardTextwrap : card.cardTextWrapRight].join(
        ""
      )}
    >
      <h3 className={card.cardTitle}>{props.title}</h3>
      <p className={card.cardDescription}>{props.description}</p>
    </div>
  );
};

export default Card; 
