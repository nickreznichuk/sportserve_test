import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>Logo</Link>
    </div>
  );
};

export default Logo;
