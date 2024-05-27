import {
  faBoltLightning,
  faCalendar,
  faComments,
  faEnvelope,
  faMobileScreen,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../title-component/title.component";
import features from "./features.module.scss";
import image from "../../img/feature-img.png";
import Card from "./cards/card.component";

const Features = () => {
  return (
    <section className={features.features} id="features-section">
      <div className="container">
        <Title title={"features for our app"} />
        <div className={features.featuresWrap}>
          <div className={features.leftCardsWrap}>
            <div className={features.cardWrap}>
              <Card
                title={"DIGITAL ORDERING"}
                description={
                  "The European languages a members the same family their separate tence type specimen book."
                }
                side={true}
              />
              <div className={features.icon}>
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
            </div>

            <div className={features.cardWrap}>
              <Card
                title={"POS INTEGRATION"}
                description={
                  "The languages only differ in thamar their and their a tha most common cure words consectetur."
                }
                side={true}
              />
              <div className={features.icon}>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>

            <div className={features.cardWrap}>
              <Card
                title={"MARKETING"}
                description={
                  "If you are going passage Ipsum you need to be sure there publising desk anything embarrassing."
                }
                side={true}
              />
              <div className={features.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>

          <div className={features.imgWrap}>
            <img src={image} alt="img" />
          </div>
          <div className={features.rightCardsWrap}>
            <div className={features.cardWrap}>
              <div className={features.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>

              <Card
                title={"LOGISTICS"}
                description={
                  "The European languages a members the same family their separate tence type specimen book."
                }
                side={false}
              />
            </div>

            <div className={features.cardWrap}>
              <div className={features.icon}>
                <FontAwesomeIcon icon={faComments} />
              </div>

              <Card
                title={"ANALYTICS"}
                description={
                  "The languages only differ in thamar their and their a tha most common cure words consectetur."
                }
                side={false}
              />
            </div>

            <div className={features.cardWrap}>
              <div className={features.icon}>
                <FontAwesomeIcon icon={faBoltLightning} />
              </div>

              <Card
                title={"DATA MANAGEMENT"}
                description={
                  "If you are going passage Ipsum you need to be sure there publising desk anything embarrassing."
                }
                side={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
