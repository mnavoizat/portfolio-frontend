import React, { useState } from "react"
import styles from "./Body.module.css"
import TextField from "@material-ui/core/TextField"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"
import axios from "axios"
import { Link } from "gatsby"
import validator from "validator"
// if (typeof window !== "undefined") {
//   // import MuiPhoneNumber from "material-ui-phone-number"
//   const MuiPhoneNumber = import("material-ui-phone-number")
// }

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00ad91",
    },
  },
})

const Body = () => {
  const [name, setName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState(false)
  const [message, setMessage] = useState("")
  const [finished, setFinished] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    if (validator.isEmail(email)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    if (phone) {
      if (validator.isMobilePhone(phone.replace(/\s/g, ""), "any")) {
        setPhoneError(false)
      } else {
        setPhoneError(true)
      }
    } else {
      setPhoneError(false)
    }

    if (
      validator.isEmail(email) &&
      (phone ? validator.isMobilePhone(phone.replace(/\s/g, ""), "any") : true)
    ) {
      setFinished(true)

      try {
        const response = await axios.post(
          "https://portfolio-mzt-backend.herokuapp.com/mail",
          {
            name,
            firstName,
            email,
            phone,
            message,
          }
        )
        console.log(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  return (
    <div>
      <div className={styles.top}></div>
      <div className={styles.bot}>
        <div className="container">
          <div className={styles.form}>
            {!finished ? (
              <>
                <div className={styles.col1}>
                  <h1>Me contacter</h1>
                  <ThemeProvider theme={theme}>
                    <form onSubmit={handleSubmit} className={styles.formDiv}>
                      <div className={styles.line}>
                        <div className={styles.inputDiv}>
                          <TextField
                            id="standard-basic"
                            label="Nom"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={styles.input}
                          />
                        </div>
                        <div className={styles.inputDiv}>
                          <TextField
                            id="standard-basic"
                            label="Prénom"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            className={styles.input}
                          />
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.inputDiv}>
                          <TextField
                            id="standard-basic"
                            label="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={styles.input}
                            error={emailError}
                            helperText={emailError && "Email incorrect"}
                          />
                        </div>
                        <div className={styles.inputDiv}>
                          {/* {typeof window !== "undefined" && (
                            <MuiPhoneNumber
                              defaultCountry={"fr"}
                              label="Téléphone (facultatif)"
                              value={phone}
                              onChange={value => setPhone(value)}
                              className={styles.input}
                              error={phoneError}
                              helperText={phoneError && "Numéro incorrect"}
                            />
                          )} */}
                          <TextField
                            id="standard-basic"
                            label="Téléphone (facultatif)"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            className={styles.input}
                            error={phoneError}
                            helperText={phoneError && "Numéro incorrect"}
                          />
                        </div>
                      </div>
                      <div className={styles.line}>
                        <div className={styles.inputDiv}>
                          <TextField
                            id="standard-basic"
                            label="Message"
                            multiline
                            rowsMax={10}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className={styles.input}
                          />
                        </div>
                      </div>
                      <div className={styles.buttonDiv}>
                        <button
                          type="submit"
                          className={
                            name && firstName && email && message
                              ? styles.button
                              : styles.buttonDis
                          }
                          disabled={
                            name && firstName && email && message ? false : true
                          }
                        >
                          <p className={styles.buttonText}>Envoyer</p>
                        </button>
                      </div>
                    </form>
                  </ThemeProvider>
                </div>
                <div className={styles.col2}>
                  <div className={styles.links}>
                    <a
                      href="https://github.com/mnavoizat"
                      className={styles.rond}
                      target="blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="3x"
                        className={styles.icon}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maxime-navoizat/"
                      className={styles.rond}
                      target="blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="3x"
                        color="white"
                        className={styles.icon}
                      />
                    </a>
                    <a
                      href="https://cv-maxime-navoizat.netlify.app/"
                      className={styles.rond}
                      target="blank"
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        size="3x"
                        color="white"
                        className={styles.icon}
                      />
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.finish}>
                <div className={styles.finishText}>
                  <p>Merci pour votre message.</p>
                  <p>Je reviendrai vers vous au plus vite.</p>
                </div>
                <Link to="/" className={styles.button}>
                  <p className={styles.buttonText}>Retour</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
