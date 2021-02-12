const data = require("./src/data/data")

exports.createPages = ({ actions: { createPage } }) => {
  data.forEach(item => {
    createPage({
      path: `/realisation/${item.name}/`,
      component: require.resolve("./src/templates/achievement.js"),
      context: { item },
    })
  })
}
