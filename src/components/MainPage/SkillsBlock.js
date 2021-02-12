import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptopCode, faServer } from "@fortawesome/free-solid-svg-icons"

import styles from "./SkillsBlock.module.css"

const SkillsBlock = () => {
  return (
    <div className={styles.block3}>
      <div className={`${styles.skills} container`}>
        <div className={styles.col1}>
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="3x"
            color="#00ad91"
            className={styles.icon}
          />
          <h1>Frontend</h1>
          <h2>Langages :</h2>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
          </ul>
          <h2>Dev tools :</h2>
          <ul>
            <li>React.js</li>
            <li>React Native / Expo</li>
            <li>Create React App / Gatsby</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className={styles.col2}>
          <FontAwesomeIcon
            icon={faServer}
            size="3x"
            color="#00ad91"
            className={styles.icon}
          />
          <h1>Backend</h1>
          <h2>Langages :</h2>
          <ul>
            <li>JavaScript</li>
          </ul>
          <h2>Dev tools :</h2>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SkillsBlock
