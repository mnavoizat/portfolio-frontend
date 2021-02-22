import React from "react"
import styles from "./PresentationBlock.module.css"

const PresentationBlock = () => {
  return (
    <div className={styles.block2}>
      <div className="container">
        <p className={styles.bonjour}>Bonjour ! </p>
        <p className={styles.other}>
          Maxime, 31 ans. Après avoir travaillé 8 ans dans l'industrie
          nucléaire, d'abord en tant qu'ingénieur d'études puis en tant que
          responsable technique, j'ai décidé de me reconvertir et de devenir
          développeur web afin de travailler sur des projets à échelle humaine.
          Etant arrivé au terme d'une formation intensive de 3 mois au Reacteur,
          je suis actuellement à la recherche d'un poste/stage de développeur
          JavaScript sur Paris.
        </p>
        <p className={styles.bonjour}>
          Au plaisir de collaborer prochainement avec vous !
        </p>
      </div>
    </div>
  )
}

export default PresentationBlock
