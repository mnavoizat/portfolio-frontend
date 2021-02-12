const data = [
  {
    name: "Syn'Up",
    link: "no-link",
    description: "Application mobile de rencontre",
    class: "couvSynup",
    picture_path:
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613143659/portfolio/SynUp/logoSynup_axvear.png",
    people: "1 pers.",
    duration: "3 semaines",
    context: "Projet professionnel",
    long_description:
      "Réalisation d'un MVP pour une start-up (après la fin de ma formation). Application mobile mettant en relation des personnes autour d'un événement sportif ou culturel, ou bien tout simplement autour d'un verre.",
    pictures: [
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142778/portfolio/SynUp/inscription_syhkjw.gif",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142989/portfolio/SynUp/nav_events_g6pax9.gif",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142918/portfolio/SynUp/modif_event_heobay.gif",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142653/portfolio/SynUp/conversation_xqnkub.gif",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142857/portfolio/SynUp/back-office_kyhlhj.png",
    ],
    stack: [
      "React-native, expo, expo-location, axios, react-native-async-storage, moment, react-gifted-chat, redux",
      "Node.js, express, body-parser, express-fileupload, cloudinary, crypto-js, uid2, mailgun-js, geolib, ws, cors, dotenv, mongoose, Heroku, MongoDB Atlas, Forest-Admin",
    ],
    features: [
      "Système d'authentification (utilisation de l'async storage)",
      "Création/modification du profil utilisateur",
      "Création/modification d'événements avec auto-complétion d'adresse",
      "Gestion des participations aux événements",
      "Recherche/tri d'événements en fonction de la géolocalisation",
      "Chat privé avec sauvegarde des conversations (web-socket)",
      "Développement d'un outil de back-office (Forest-Admin)",
    ],
  },
  {
    name: "NovelClass",
    link: "no-link",
    description: "Application mobile de cours de ligne",
    picture_path:
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142152/portfolio/NovelClass/NovelClass_fkt8kn.png",
    class: "couvNovelClass",
    people: "4 pers.",
    duration: "2 semaines",
    context: "Projet de fin de bootcamp",
    long_description:
      "Réalisation du MVP d'une start-up dans le cadre du projet de fin de formation. NovelClass nous a demandé de développer une application mobile de cours de ligne. Au cahier des charges figurait le besoin d'une interface admministrateur pour permettre la gestion du contenu des cours. Pour ce projet, j'ai été désigné comme lead developer de l'équipe.",
    pictures: [
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142193/portfolio/NovelClass/video_inter_bsyyut.gif",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142144/portfolio/NovelClass/signup_kcoqcw.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142114/portfolio/NovelClass/login_vj73sr.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142131/portfolio/NovelClass/bienvenue_vi0cvl.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142127/portfolio/NovelClass/accueil_hxstbg.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142158/portfolio/NovelClass/recherche_ii3lo0.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142136/portfolio/NovelClass/themes_egk0fj.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142162/portfolio/NovelClass/profile_mgsdaf.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142129/portfolio/NovelClass/back-office1_c4mdlt.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142162/portfolio/NovelClass/back-office2_bor5jw.png",
    ],
    stack: [
      "React-native, expo, axios, react-native-async-storage, react-native-youtube-iframe",
      "Node.js, express, body-parser, express-fileupload, cloudinary, crypto-js, uid2, mailgun-js, cors, dotenv, mongoose, Heroku, MongoDB Atlas, Forest-Admin",
    ],
    features: [
      "Système d'authentification (utilisation de l'async storage)",
      "Navigation dans les cours (programmes/thèmes/chapitres)",
      "Outil de recherche de cours",
      "Implémentation de vidéos youtube intéractives",
      "Gestion des cours favoris",
      "Détection des vidéos terminées",
      "Modification du profil",
      "Développement d'un outil de back-office (Forest-Admin) afin d'implémenter facilement des cours et des vidéos intéractives en base de données",
    ],
  },
  {
    name: "TellMeMore",
    description: "Réplique de TypeForm",
    link: "https://tell-me-more.netlify.app/",
    picture_path:
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613141989/portfolio/TellMeMore/logoTellMeMore_nfnez7.svg",
    class: "couvTellMeMore",
    people: "1 pers.",
    duration: "1 semaine",
    context: "Certification de bootcamp",
    long_description: "Réplique du site de sondage TypeForm",
    pictures: [
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142022/portfolio/TellMeMore/accueil_ooxgmb.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613141999/portfolio/TellMeMore/questions_ldgctd.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142002/portfolio/TellMeMore/reponses_of8ngc.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613141992/portfolio/TellMeMore/question_note_d5iqbh.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613141998/portfolio/TellMeMore/question_texte_lkzp2q.png",
    ],
    stack: [
      "React, create-react-app, axios, react-router-dom, Netlify",
      "Node.js, express, express-formidable, cors, dotenv, mongoose, Heroku, MongoDB Atlas",
    ],
    features: [
      "Ajout/suppression/modification de formulaires et de questions",
      "Sauvegarde des réponses en base de données",
    ],
  },
  {
    name: "Vinted",
    description: "Réplique du site Vinted",
    link: "https://vinted-frontend.netlify.app/",
    picture_path:
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142912/portfolio/Vinted/vinted_azs5rt.jpg",
    class: "couvVinted",
    people: "1 pers.",
    duration: "1 semaine",
    context: "Projet de formation",
    long_description:
      "Réplique du site de vente de vêtement de seconde main Vinted réalisée dans le cadre de ma formation",
    pictures: [
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142963/portfolio/Vinted/accueil_rduayv.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142957/portfolio/Vinted/produit_rpawea.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142952/portfolio/Vinted/signup_llriyj.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142927/portfolio/Vinted/formulaire_yycoul.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142865/portfolio/Vinted/panier_tygzpr.png",
    ],
    stack: [
      "React, create-react-app, axios, react-router-dom, react-dropzone, react-loader-spinner, react-responsive-carousel, js-cookie, stripe, Netlify",
      "Node.js, express, express-formidable, cors, dotenv, crypto-js, uid2, stripe, cloudinary, mongoose, Heroku, MongoDB Atlas",
    ],
    features: [
      "Système d'authentification (utilisation des cookies)",
      "Affichage d'une liste de produit avec pagination (faite à la main)",
      "Outil de recherche et tri (ordre croissant/décroissant de prix, prin min/max)",
      "Ajout/suppression de produits",
      "Hébergement des images sur Cloudinary",
      "Drag and drop pour déposer les photos",
      "Panier avec paiement en ligne via Stripe",
    ],
  },
  {
    name: "Marvel",
    description: "Site recensant tous les personnages et comics de Marvel",
    link: "https://marvel-frontend.netlify.app/",
    picture_path:
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142639/portfolio/Marvel/Marvel_b9feyx.jpg",
    class: "couvMarvel",
    people: "1 pers.",
    duration: "3 jours",
    context: "Projet de formation",
    long_description: "Site recensant tous les personnages et comics de Marvel",
    pictures: [
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142814/portfolio/Marvel/characters_t9v9ho.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142934/portfolio/Marvel/comics_xhxlhf.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142906/portfolio/Marvel/character_vgof4r.png",
      "https://res.cloudinary.com/difbtxrbq/image/upload/v1613142906/portfolio/Marvel/favs_cfbtpf.png",
    ],
    stack: [
      "React, create-react-app, axios, react-router-dom, react-loader-spinner, Netlify",
      "Node.js, express, express-formidable, cors, dotenv, Heroku",
    ],
    features: [
      "Utilisation de l'API Marvel",
      "Affichage des personnages et des comics Marvel avec pagination (faite à la main)",
      "Outil de recherche par mot-clé",
      "Système de favoris géré avec les cookies",
    ],
  },
]

module.exports = data
