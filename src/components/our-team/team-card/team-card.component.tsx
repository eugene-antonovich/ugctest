import { ReactNode } from "react";
import card from "./team-card.module.scss";

interface TeamCardProps {
  name: string;
  jobTitle: string;
  image: string;
  iconLinkedIn?: ReactNode;
  iconInstagram?: ReactNode;
  iconTwitter?: ReactNode;
  linkedIn?: string;
  instagram?: string;
  twitter?: string;
}
const TeamCard = (props: TeamCardProps) => {
  return (
    <div className={card.cardWrap}>
      <div className={card.cardPersonWrap}>
        <h4 className={card.cardName}>{props.name}</h4>
        <h4 className={card.cardJobTitle}>{props.jobTitle}</h4>
      </div>
      <div className={card.cardImageWrap}>
        <img src={props.image} alt="image" />
        <div className={card.cardSocialWrap}>
          {props.linkedIn && (
            <a href={props.linkedIn} target="_blank">
              {props.iconLinkedIn}
            </a>
          )}
          {props.instagram && (
            <a href={props.instagram} target="_blank">
              {props.iconInstagram}
            </a>
          )}
          {props.twitter && (
            <a href={props.twitter} target="_blank">
              {props.iconTwitter}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
