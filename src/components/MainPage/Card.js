import React from "react"
import ReactCardFlipper from "react-card-flipper"
import styles from "./Card.module.css"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const Card = ({ elem }) => {
  return (
    <ReactCardFlipper
      width="300px"
      height="200px"
      behavior="hover"
      className={styles.card}
    >
      <div className={styles.face}>
        <img
          src={elem.picture_path}
          alt="couv"
          className={styles[elem.class]}
        />
      </div>
      <div className={styles.pile}>
        <p className={styles.text}>{elem.description}</p>
        <Link to={`/realisation/${elem.name}`} className={styles.button}>
          <span className={styles.buttonText}>En savoir plus</span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={styles.icon}
            size="lg"
          />
        </Link>
      </div>
    </ReactCardFlipper>
  )
}

export default Card
