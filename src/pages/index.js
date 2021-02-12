import React from "react"

import TitleBlock from "../components/MainPage/TitleBlock"
import PresentationBlock from "../components/MainPage/PresentationBlock"
import SkillsBlock from "../components/MainPage/SkillsBlock"
import AchievementsBlock from "../components/MainPage/AchievementsBlock"
import SEO from "../components/seo"
import Layout from "/src/components/Layout/Layout"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <TitleBlock />
      <PresentationBlock />
      <SkillsBlock />
      <AchievementsBlock />
    </Layout>
  )
}
