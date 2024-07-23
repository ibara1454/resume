export interface Profile {
  summary: Summary;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
}

export interface Summary {
  name: Name;
  jobTitle: string;
  languages: string[];
  about: string;
}

export interface Name {
  first: string;
  middle?: string;
  last: string;
}

export interface Contact {
  city: string;
  country: string;
  email: string;
  githubId?: string;
  linkedInId?: string;
  websiteUrl?: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  activities: string[];
  website: string;
}

export interface Education {
  name: string;
  degree: string;
  startDate: string;
  endDate: string;
  website: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Certification {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export const profile: Profile = {
  summary: {
    name: {
      first: 'Chiajun',
      last: 'Wang',
    },
    jobTitle: 'Full Stack Engineer',
    languages: ['English:business', 'Japanese:proficient', 'Chinese:native'],
    about:
      'Experienced Full Stack Engineer with a comprehensive background in frontend, backend, and Android development. With 6 years of practical experience. Proficient in popular architectures and frameworks. Skilled at writing clean code and improving the overall development experience. Dedicated to continuous learning and sharing knowledge.',
  },
  contact: {
    city: 'Tokyo',
    country: 'Japan',
    email: 'ibara1454@gmail.com',
    githubId: 'ibara1454',
    linkedInId: 'ibara1454',
  },
  experience: [
    {
      jobTitle:
        'Backend/Frontend Engineer → Android Engineer → Frontend Engineer',
      company: 'Mercari Inc.',
      startDate: '2021.11',
      endDate: 'Present',
      activities: [
        '(CS Tool) Worked as a frontend/backend engineer on a multi-platform team which had around 10 members.',
        '(CS Tool) Migrated the "Mercari CS Tool" from the legacy backend codebase using GraphQL.',
        '(CS Tool) Led the team to improve development process efficiency significantly using Skaffold. As a result, the launch time of the devserver was reduced from 15~30 minutes to 1 minute.',
        '(Android) Worked as an Android engineer on a multi-platform team which had around 8 members. (2~3 Android engineers)',
        '(Android) Helped and guided junior Android engineers, helping them develop their skills and knowledge.',
        '(Android) Collaborated effectively with designers and product owners to enhance user experience for new projects.',
        '(Web) Worked as a frontend engineer on a frontend team which has around 8 members.',
        '(Web) Played a key role in the success of cross-team projects by leveraging deep understanding of each team to effectively coordinate efforts and deliver results.',
        "(Social&Share Web) Played a key role as a frontend developer on 'My Collection' project. Helped to design and review the backend APIs and led multiple technical decisions.",
      ],
      website: 'https://about.mercari.com/',
      techStack: [
        'PHP',
        'Go',
        'GraphQL',
        'Kubernetes',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Kotlin',
        'Android',
        'Jetpack Compose',
      ],
    },
    {
      jobTitle: 'Android Engineer → Frontend Engineer',
      company: 'Yahoo Japan Corporation',
      startDate: '2018.04',
      endDate: '2021.10',
      activities: [
        '(Yahoo! Mail Android) Worked as an Android engineer with around 10 members.',
        '(Yahoo! Mail Android) Implemented features such as OpenID Connect authorization and IMAP client.',
        '(Yahoo! Mail Android) Improved test automation/linter. Set up CI/CD configuration/build variants.',
        '(Yahoo! Mail Android) Organized workshops regularly to help the team members improve their skills.',
        '(Yahoo! Mail Web) Worked as a frontend engineer/tech leader with around 10 members and led the team in technical decisions.',
        '(Yahoo! Mail Web) Worked on migrating the old "Yahoo! Mail" service using React.',
        '(Yahoo! Mail Web) In charge of the most complicated/difficult tasks in the project.',
        '(Yahoo! Mail Web) Designed the backend architecture for "Yahoo! Mail Web React Renewal" project using Kubernetes.',
        '(Yahoo! Mail Web) Led the decision to improve the Core Web Vitals score by applying performance optimizations, resulting in a 100%+ improvement in score.',
      ],
      website: 'https://about.yahoo.co.jp/',
      techStack: [
        'Java',
        'Kotlin',
        'Android',
        'Node.js',
        'Kubernetes',
        'TypeScript',
        'React',
        'Node.js',
      ],
    },
  ],
  education: [
    {
      name: 'University of Tsukuba',
      degree: 'Master of Engineering in Computer Science',
      startDate: '2016.04',
      endDate: '2018.03',
      website: 'https://www.tsukuba.ac.jp/',
    },
    {
      name: 'Fu Jen Catholic University',
      degree: 'Bachelor of Science in Mathematics',
      startDate: '2007.09',
      endDate: '2012.06',
      website: 'https://www.fju.edu.tw/',
    },
  ],
  skills: [
    { name: 'JavaScript', level: 'skilled' },
    { name: 'TypeScript', level: 'skilled' },
    { name: 'Node.js', level: 'skilled' },
    { name: 'React', level: 'skilled' },
    { name: 'Next.js', level: 'skilled' },
    { name: 'Vue', level: 'skilled' },
    { name: 'Tailwind CSS', level: 'skilled' },
    { name: 'GraphQL', level: 'skilled' },
    { name: 'Java', level: 'skilled' },
    { name: 'Kotlin', level: 'skilled' },
    { name: 'Android', level: 'skilled' },
    { name: 'Jetpack Compose', level: 'skilled' },
    { name: 'Kubernetes', level: 'skilled' },
    { name: 'Go', level: 'skilled' },
    { name: 'PHP', level: 'skilled' },
    { name: 'Python', level: 'skilled' },
    { name: 'Ruby', level: 'sufficient' },
    { name: 'C++', level: 'sufficient' },
    { name: 'Haskell', level: 'sufficient' },
  ],
  certifications: [
    {
      title: 'CKA',
      description: 'Certified Kubernetes Administrator',
      url: 'https://www.credly.com/badges/636db6a0-c6c1-482e-ba22-0e9784fd9538',
    },
    {
      title: 'CKAD',
      description: 'Certified Kubernetes Application Developer',
      url: 'https://www.credly.com/badges/bfb9b379-765b-478c-bee6-e3c73a0506c1',
    },
    {
      title: 'JSNAD',
      description: 'OpenJS Node.js Application Developer',
      url: 'https://www.credly.com/badges/d3321e53-22b3-4841-94cb-a7fa78c7b075',
    },
    {
      title: 'JSNSD',
      description: 'OpenJS Node.js Services Developer',
      url: 'https://www.credly.com/badges/9545d96a-60ca-436c-a586-0e14b4b31b64',
    },
  ],
};
