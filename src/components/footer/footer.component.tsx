import FooterIconItem from "./footer-icon-item/footer-icon-item.component";
import FooterListItem from "./footer-list-item/footer-list-item.component";
import footer from "./footer.module.scss";

import logo from "../../img/header-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlay,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className="container">
        <div className={footer.footerWrap}>
          <div className={footer.footerLogo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={footer.footerIconsWrap}>
            <FooterIconItem
              icon={<FontAwesomeIcon icon={faFacebook} />}
              link={"https://pl-pl.facebook.com/"}
            />
            <FooterIconItem
              icon={<FontAwesomeIcon icon={faTwitter} />}
              link={"https://x.com/"}
            />
            <FooterIconItem
              icon={<FontAwesomeIcon icon={faGooglePlay} />}
              link={"https://play.google.com/store/games?hl=ru&gl=US&pli=1"}
            />
            <FooterIconItem
              icon={<FontAwesomeIcon icon={faLinkedin} />}
              link={"https://www.linkedin.com/feed/"}
            />
          </div>
          <div className={footer.footerListWrap}>
            <ul className={footer.footerList}>
              <FooterListItem title={"Home"} link={"home-section"} />
              <FooterListItem title={"Features"} link={"features-section"} />
              <FooterListItem title={"Pricing"} link={"pricing-section"} />
              <FooterListItem
                title={"How it's work"}
                link={"how-it's-work-section"}
              />
              <FooterListItem title={"Team"} link={"team-section"} />
              <FooterListItem title={"Contact"} link={"contact-section"} />
            </ul>
          </div>
        </div>
      </div>
      <div className={footer.footerBottomWrap}>
        <h6 className={footer.footerTitle}>
          © 2024 Appspery. Design with by Themesdesign.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
