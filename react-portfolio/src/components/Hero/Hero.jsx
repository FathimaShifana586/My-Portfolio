import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fathima Shifana</h1>
        <p className={styles.description}>
        I’m a Software Test Engineer with 1.5 years of experience in Quality Assurance,
         Test Automation, Load & Performance Testing. Skilled in modern scripting and web technologies. 
         Reach out if you’d like to learn more!
        </p>
        <a href="mailto:fshifana@gto.com.sa" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
