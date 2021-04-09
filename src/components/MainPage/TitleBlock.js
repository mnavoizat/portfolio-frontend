import React from "react"
import styles from "./TitleBlock.module.css"

const TitleBlock = () => {
  return (
    <div className={styles.block1}>
      <h1>Maxime Navoizat</h1>
      <div className={styles.subTitle}>
        <div className={styles.line}></div>
        <h2>Développeur JS fullstack web et mobile</h2>
      </div>
      <img
        src="/images/profile.jpg"
        alt="profile"
        className={styles.profilePic}
      />
    </div>
  )
}

export default TitleBlock
