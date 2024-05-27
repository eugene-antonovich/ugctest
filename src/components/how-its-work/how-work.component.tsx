import Title from "../title-component/title.component";
import work from "./how-work.module.scss";
import img from "../../img/how-work-img.png";
import WorkItem from "./how-work-item/how-work.item.component";
import {
  faBell,
  faEnvelope,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HowWork = () => {
  return (
    <section className={work.work} id="how-it's-work-section">
      <div className="container">
        <Title title={"How it's work"} />
        <div className={work.workWrap}>
          <div className={work.workLeftWrap}>
            <p className={work.workLeftWrapDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore aliqua. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore aliqua. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore aliqua.
            </p>
            <h3 className={work.workLeftWrapTitle}>BENEFITS OF APP</h3>

            <div className={work.workItemsWrap}>
              <WorkItem
                icon={<FontAwesomeIcon icon={faBell} />}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua ."
                }
              />

              <WorkItem
                icon={<FontAwesomeIcon icon={faStar} />}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua."
                }
              />

              <WorkItem
                icon={<FontAwesomeIcon icon={faEnvelope} />}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua."
                }
              />

              <WorkItem
                icon={<FontAwesomeIcon icon={faHeart} />}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua."
                }
              />
            </div>
          </div>

          <div className={work.workRightWrap}>
            <img src={img} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
