import React from "react"
import styles from "./AchievementsBlock.module.css"
import Card from "./Card"

const data = require("../../data/data")

const AchievementsBlock = () => {
  return (
    <div className={styles.block4}>
      <div className="container">
        <h1>Mes réalisations</h1>
        <div className={styles.cardsContainer}>
          {data.map((elem, index) => {
            return <Card key={index} elem={elem}></Card>
          })}
        </div>
      </div>
    </div>
  )
}

export default AchievementsBlock
