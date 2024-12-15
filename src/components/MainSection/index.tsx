import React from "react";
import styles from "./index.module.scss";
import catImage from "../../assets/main-cat.png";
import mobileCatImage from "../../assets/mobile-cat.png";
import Button from "../Button";

const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.text}>
        <h1 className={styles.heading}>
          Show us your skills and copy this landing page
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button dark text={"Call To Action Here"} />
      </div>
      <div className={styles.imageWrapper}>
        <img src={catImage} alt="Cool Cat" className={styles.image} />
        <img
          src={mobileCatImage}
          alt="Cool Cat"
          className={styles.imageMobile}
        />
      </div>
    </section>
  );
};

export default MainSection;
