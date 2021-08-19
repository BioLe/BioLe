module.exports = {
  SiteTitle: 'Leonardo Melo',
  Sitelogo: '#',
  SiteLogoText: 'Leonardo',
  SiteAuthor: 'Leonardo Melo',
  SiteDescription: 'Software Engineer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    github: 'https://github.com/biole',
    linkedin: 'https://www.linkedin.com/in/leonardmelo/',
  },
  SiteAddress: {
    city: 'Lisboa',
    region: 'Lisbon',
    country: 'Portugal',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'leonardo.melo@outlook.pt',
    phone: 'phone number',
  },
  SiteCopyright: '2021',
};
