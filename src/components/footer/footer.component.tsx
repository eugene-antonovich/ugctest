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
              <FooterListItem title={"Home"} link={""} />
              <FooterListItem title={"About Us"} link={""} />
              <FooterListItem title={"Features"} link={""} />
              <FooterListItem title={"Pricing"} link={""} />
              <FooterListItem title={"Application"} link={""} />
              <FooterListItem title={"Team"} link={""} />
              <FooterListItem title={"Contact"} link={""} />
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
