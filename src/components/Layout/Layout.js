import React, { useState } from "react"
import styles from "./Layout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
} from "@material-ui/core"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

const useStyles = makeStyles({
  paper: {
    background: "#424242",
    color: "white",
  },
  text: {
    fontSize: 14,
  },
})

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)

  const drawerStyles = useStyles()

  return (
    <div>
      <div className={styles.header}>
        <button
          onClick={() => {
            setIsDrawerOpen(!isDrawerOpen)
          }}
          className={styles.burger}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <Drawer
          anchor="left"
          position="fixed"
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(!isDrawerOpen)
          }}
          className={styles.drawer}
          classes={{ paper: drawerStyles.paper }}
        >
          <List className={styles.list}>
            <Link to="/" className={styles.listItem}>
              <ListItem button>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <ListItem button onClick={() => setIsListOpen(!isListOpen)}>
              <ListItemText primary="Réalisations" />
              {isListOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isListOpen} timeout="auto" unmountOnExit>
              <List>
                {["Syn'Up", "NovelClass", "TellMeMore", "Vinted", "Marvel"].map(
                  (text, index) => {
                    return (
                      <Link
                        to={`/realisation/${text}`}
                        className={styles.listItem}
                        key={index}
                      >
                        <ListItem
                          button
                          key={text}
                          className={styles.subListItem}
                        >
                          <ListItemText
                            primary={text}
                            classes={{ primary: drawerStyles.text }}
                          />
                        </ListItem>
                      </Link>
                    )
                  }
                )}
              </List>
            </Collapse>
            <Divider />
            <Link to="/contact" className={styles.listItem}>
              <ListItem button>
                <ListItemText>Me contacter</ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
      {children}
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.infos}>
            <div className={styles.links}>
              <a
                href="https://github.com/mnavoizat"
                className={styles.rond}
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
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
                  size="lg"
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
                  size="lg"
                  color="white"
                  className={styles.icon}
                />
              </a>
            </div>
            <div className={styles.gatsby}>
              <a href="https://www.gatsbyjs.com/">
                <span className={styles.link}>Made with </span>
                <img
                  src="/images/icon-48x48.png"
                  className={styles.img}
                  alt="gatsby logo"
                />
                <span className={styles.link}>- 2021</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
