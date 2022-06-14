import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/krober45/ReactPortfolio',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  name: 'Khari Robertson',
  role: 'Full stack developer',
  description:
    'UW bootcamp student from Baltimore. highly interested in cutting edge technology/coding. Ready to Work!',
  resume: 'https://example.com',
  social: {
    github: 'https://github.com/krober45',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Reel Meal',
    description:
      'help a user quickly plan an evening by giving them a movie and meal recipe option based on either criteria that the user gives, in the form of a single dropdown menu for each search, or by simply having the webpage randomly obtain an option from one or both search values.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://github.com/NJscc/group_project_one',
    livePreview: 'https://njscc.github.io/group_project_one/',
  },
  {
    name: 'SESH',
    description:
      'When user login , user will be able to search songs as per Genre and playlist.',
    stack: ['swiper.js', 'npm', 'handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Surbhiarora3/Sesh',
  },
  {
    name: 'StitchMe',
    description:
      'Users can sign into their profile, upload a new project, and post todos, steps, and images of their project',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/krober45/StitchMe',
    livePreview: 'https://stitchmeproject.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'krober45@gmail.com',
}

export { header, about, projects, skills, contact }
