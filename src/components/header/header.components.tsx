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
              <HeaderListItem title={"Home"} />
              <HeaderListItem title={"Abou us"} />
              <HeaderListItem title={"Features"} />
              <HeaderListItem title={"Pricing"} />
              <HeaderListItem title={"Application"} />
              <HeaderListItem title={"Team"} />
              <HeaderListItem title={"Contact"} />
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
