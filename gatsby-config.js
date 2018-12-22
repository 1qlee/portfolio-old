module.exports = {
  siteMetadata: {
    title: 'Wonkyu Lee',
    github: 'https://github.com/1qlee',
    linkedin: 'https://www.linkedin.com/in/wonkyulee93/',
    twitter: 'https://twitter.com/wonq33',
    email: 'mailto:wonq33@gmail.com',
    resume: 'https://www.dropbox.com/s/k4nlv3kd5g355bv/Wonkyu%20Lee%20-%20Resume_2018.pdf'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
  ],
}
