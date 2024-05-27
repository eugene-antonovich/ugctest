import TeamCard from "./team-card/team-card.component";
import team from "./team.module.scss";

import max from "../../img/team/max.png";
import loki from "../../img/team/loki.png";
import lukasz from "../../img/team/lukasz.png";
import vlad from "../../img/team/vlad.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Title from "../title-component/title.component";

const Team = () => {
  return (
    <section className={team.team} id="team-section">
      <div className="container">
        <Title title={"Our team"} />
        <div className={team.cardsWrap}>
          <TeamCard
            name={"Max"}
            jobTitle={"pracownik roku"}
            image={max}
            iconLinkedIn={<FontAwesomeIcon icon={faLinkedin} />}
            linkedIn="https://www.linkedin.com/company/ledsy/?originalSubdomain=pl"
            iconInstagram={<FontAwesomeIcon icon={faInstagram} />}
            instagram="https://www.instagram.com/m.virshits916?igsh=MTdiaXFmeDdyaDBtOA=="
            iconTwitter={<FontAwesomeIcon icon={faTwitter} />}
            twitter="https://x.com/?lang=pl"
          />
          <TeamCard
            name={"Loki"}
            jobTitle={"Good boy"}
            image={loki}
            iconLinkedIn={<FontAwesomeIcon icon={faLinkedin} />}
            linkedIn="https://www.linkedin.com/company/ledsy/?originalSubdomain=pl"
            iconInstagram={<FontAwesomeIcon icon={faInstagram} />}
            instagram="https://www.instagram.com/m.virshits916?igsh=MTdiaXFmeDdyaDBtOA=="
            iconTwitter={<FontAwesomeIcon icon={faTwitter} />}
            twitter="https://x.com/?lang=pl"
          />
          <TeamCard
            name={"Lukasz"}
            jobTitle={"SEO god"}
            image={lukasz}
            iconLinkedIn={<FontAwesomeIcon icon={faLinkedin} />}
            linkedIn="https://www.linkedin.com/company/ledsy/?originalSubdomain=pl"
            iconInstagram={<FontAwesomeIcon icon={faInstagram} />}
            instagram="https://www.instagram.com/m.virshits916?igsh=MTdiaXFmeDdyaDBtOA=="
            iconTwitter={<FontAwesomeIcon icon={faTwitter} />}
            twitter="https://x.com/?lang=pl"
          />
          <TeamCard
            name={"Vladislav"}
            jobTitle={"dark magician"}
            image={vlad}
            iconLinkedIn={<FontAwesomeIcon icon={faLinkedin} />}
            linkedIn="https://www.linkedin.com/company/ledsy/?originalSubdomain=pl"
            iconInstagram={<FontAwesomeIcon icon={faInstagram} />}
            instagram="https://www.instagram.com/m.virshits916?igsh=MTdiaXFmeDdyaDBtOA=="
            iconTwitter={<FontAwesomeIcon icon={faTwitter} />}
            twitter="https://x.com/?lang=pl"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
