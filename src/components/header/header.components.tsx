import header from "./header.module.scss";
import logo from "../../img/header-logo.png";
import HeaderListItem from "./heade-list-item.component";

const Header = () => {
  return (
    <header className={header.header}>
      <div className="container">
        <div className={header.headerWrap}>
          <div className={header.headerLogoWrap}>
            <img src={logo} alt="logo" />
          </div>
          <div className={header.headerMenuListWrap}>
            <ul className={header.headerMenuList}>
              <HeaderListItem title={"Home"} linkSection={"home-section"} />
              <HeaderListItem
                title={"Features"}
                linkSection={"features-section"}
              />
              <HeaderListItem
                title={"Pricing"}
                linkSection={"pricing-section"}
              />
              <HeaderListItem
                title={"How it's work"}
                linkSection={"how-it's-work-section"}
              />
              <HeaderListItem title={"Team"} linkSection={"team-section"} />
              <HeaderListItem
                title={"Contact"}
                linkSection={"contact-section"}
              />
            </ul>
          </div>
          <div className={header.headerLoginButtonWrap}>
            <button className={header.headerLoginButton}>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
