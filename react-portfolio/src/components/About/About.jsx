import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Test Engineer</h3>
              <p>
              I'm an Automated Test Engineer with experience in creating robust end-to-end test scripts using Playwright and TypeScript,
               and performing load testing with Artillery to ensure performance and scalability.
               Skilled in modern testing practices, scripting, and quality assurance to deliver reliable, high-quality software.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>QA/QC Engineer</h3>
              <p>
              I have experience in all types of manual testing, identifying and reporting bugs in Azure DevOps and Jira, managing and testing portals,
              and preparing detailed testcases and test execution plans.
              Skilled in QA/QC processes to ensure high-quality software delivery and smooth user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Creative Technologist </h3>
              <p>
              I’m also skilled in modern scripting and web technologies, 
              with a keen interest in building websites using AI-powered tools and
               solutions to create innovative and efficient user experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
