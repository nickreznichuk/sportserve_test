import React, { useState } from "react";
import styles from "./index.module.scss";
import NavigateLink from "../NavigateLink";
import Logo from "../Logo";
import Account from "../Account";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import classNames from "classnames";

const Header = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);
  return (
    <div className={styles.header__wrapper}>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <NavigateLink to="#about" text="About us" />
          <NavigateLink to="#contact" text="Contact us" />
          <NavigateLink to="#team" text="The team" />
        </nav>
        <Account />
        <div
          className={styles.hamburgerMenu}
          onClick={() => setShowHamburgerMenu((prev) => !prev)}
        >
          {showHamburgerMenu ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </header>
      <nav
        className={classNames(
          styles.mobileNav,
          showHamburgerMenu && styles.mobileNav__active,
        )}
      >
        <NavigateLink to="#about" text="About us" />
        <NavigateLink to="#contact" text="Contact us" />
        <NavigateLink to="#team" text="The team" />
      </nav>
    </div>
  );
};

export default Header;
