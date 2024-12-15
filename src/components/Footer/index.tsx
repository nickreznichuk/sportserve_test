import React from "react";
import styles from "./index.module.scss";
import NavigateLink from "../NavigateLink";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Logo />
        <nav className={styles.nav}>
          <NavigateLink to="#" text="Disclaimer" />
          <NavigateLink to="#" text="Privacy Policy" />
          <NavigateLink to="#" text="Cookies Policy" />
        </nav>
        <nav className={styles.nav}>
          <Link
            className={styles.socialLink}
            to={"https://x.com/"}
            target="_blank"
          >
            <BsTwitterX color="#000000" />
          </Link>
          <Link
            className={styles.socialLink}
            to={"https://www.linkedin.com/"}
            target="_blank"
          >
            <FaLinkedinIn color="#000000" />
          </Link>
          <Link
            className={styles.socialLink}
            to={"https://www.instagram.com/"}
            target="_blank"
          >
            <FaInstagram color="#000000" />
          </Link>
          <Link
            className={styles.socialLink}
            to={"https://www.facebook.com/"}
            target="_blank"
          >
            <FaFacebook color="#000000" />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
