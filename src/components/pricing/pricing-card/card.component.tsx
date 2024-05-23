import { faCircleCheck, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import card from "./card.module.scss";

interface CardProps {
  price: number;
  tarif: string;
  included: string[];
  notIncluded: string[];
}
const Card = (props: CardProps) => {
  return (
    <div className={card.cardWrap}>
      <div className={card.cardPriceWrap}>
        <span className={card.cardPrice}>
          {props.price}
          <div className={card.cardPriceIcon}>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        </span>
      </div>

      <span className={card.cardTarif}>{props.tarif}</span>
      <ul className={card.cardList}>
        {props.included.map((item, index) => (
          <div className={card.cardItemWrap}>
            <div className={card.cardItemIcon}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>

            <li className={card.cardIncluded} key={index}>
              {item}
            </li>
          </div>
        ))}
        {props.notIncluded.map((item, index) => (
          <div className={card.cardItemWrap}>
            <div className={card.cardItemIconNotIncluded}>
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <li className={card.cardNotIncluded} key={index}>
              {item}
            </li>
          </div>
        ))}
      </ul>
      <button className={card.cardButton}>Sign in</button>
    </div>
  );
};

export default Card;
