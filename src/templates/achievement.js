import React from "react"
import styles from "./achievement.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUsers,
  faHourglassHalf,
  faLink,
} from "@fortawesome/free-solid-svg-icons"
import { faImage } from "@fortawesome/free-regular-svg-icons"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Layout from "/src/components/Layout/Layout"

export default function Item({ pageContext }) {
  const { item } = pageContext
  console.log(item)
  return (
    <Layout>
      <div className={`container ${styles.achievement}`}>
        <h1>{item.name}</h1>
        <div className={styles.infos}>
          <div className={styles.case}>
            <FontAwesomeIcon
              icon={faImage}
              size="2x"
              color="#00ad91"
              className={styles.icon}
            />
            <p>{item.context}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.case}>
            <FontAwesomeIcon
              icon={faUsers}
              size="2x"
              color="#00ad91"
              className={styles.icon}
            />
            <p>{item.people}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.case}>
            <FontAwesomeIcon
              icon={faHourglassHalf}
              size="2x"
              color="#00ad91"
              className={styles.icon}
            />
            <p>{item.duration}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.case}>
            <FontAwesomeIcon
              icon={faLink}
              size="2x"
              color="#00ad91"
              className={styles.icon}
            />
            <div>
              {item.link !== "no-link" ? (
                <a href={item.link} target="blank">
                  Voir le site
                </a>
              ) : (
                <p>Pas de lien</p>
              )}
            </div>
          </div>
        </div>
        <div className={item.name !== "NovelClass" ? null : styles.carousel}>
          <Carousel>
            {item.pictures?.map((element, index) => {
              return (
                <div
                  key={index}
                  className={
                    (item.name !== "NovelClass" && item.name !== "Syn'Up") ||
                    element.includes("back-office")
                      ? styles.pictureDiv
                      : styles.pictureDivPhone
                  }
                >
                  <img
                    src={element}
                    alt="TellMeMore"
                    className={
                      (item.name !== "NovelClass" && item.name !== "Syn'Up") ||
                      element.includes("back-office")
                        ? styles.picture
                        : styles.picturePhone
                    }
                  />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className={styles.details}>
          <div>
            <h2>Description :</h2>
            <p>{item.long_description}</p>
          </div>
          <div>
            <h2>Stack :</h2>
            <ul>
              {item.stack?.map((elem, index) => {
                return <li key={index}>{elem}</li>
              })}
            </ul>
          </div>
          <div>
            <h2>Features :</h2>
            <ul>
              {item.features?.map((elem, index) => {
                return <li key={index}>{elem}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
