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

export type Experience = SinglePositionExperience | MultiPositionExperience;

export interface SinglePositionExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  activities: string[];
  website: string;
}

export function isSinglePositionExperience(
  experience: Experience,
): experience is SinglePositionExperience {
  return (experience as SinglePositionExperience).activities !== undefined;
}

export interface MultiPositionExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  positions: Position[];
  website: string;
}

export function isMultiPositionExperience(
  experience: Experience,
): experience is MultiPositionExperience {
  return (experience as MultiPositionExperience).positions !== undefined;
}

export interface Position {
  jobTitle: string;
  activities: string[];
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
      'Experienced Frontend-focused Full Stack Engineer with a comprehensive background in frontend, backend, and Android development. With 6 years of practical experience. Proficient in popular architectures and frameworks. Skilled at writing clean code and improving the overall development experience. Dedicated to continuous learning and sharing knowledge.',
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
      positions: [
        {
          jobTitle: 'Backend/Frontend Engineer - Mercari CS Tool',
          activities: [
            'Worked as a frontend/backend engineer on a multi-platform team which had around 10 members, developing the "Mercari CS Tool" using technologies such as React, PHP, Go, GraphQL, and Kubernetes.',
            'Contributed on the "CS Tool backend migration" project, consolidating the legacy backend codebase to an unified GraphQL service.',
            'Led the team to improve development efficiency significantly using Skaffold. As a result, the reflection time of changes was reduced from 15~30 minutes to 1 just minute.',
          ],
        },
        {
          jobTitle: 'Android Engineer - Mercari Marketplace',
          activities: [
            'Served as a key Android engineer in an 8-member (2~3 Android engineers) multi-platform team, developing the "Mercari" Android application using Kotlin and Jetpack Compose.',
            'Mentored junior Android engineers, fostering their skills and knowledge to enhance team capabilities.',
            'Collaborated closely with designers and product owners, proposing and implementing numerous user experience improvements for new projects.',
          ],
        },
        {
          jobTitle: 'Frontend Engineer - Mercari Marketplace',
          activities: [
            'Contributed as a frontend engineer in an 8-member frontend team, developing the "Mercari" marketplace website using technologies such as TypeScript, React, Jotai, and Next.js.',
            'Contributed to the success of cross-team projects by leveraging comprehensive understanding of each team to effectively coordinate efforts and deliver results.',
            'Played a pivotal role as frontend developer for the "My Collection" project. assisting in designing and reviewing the backend APIs and led multiple technical decisions.',
          ],
        },
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
      positions: [
        {
          jobTitle: 'Android Engineer - Yahoo! Mail Android',
          activities: [
            'Worked as an Android engineer in a team of 10, developing the "Yahoo! Mail" Android application using technologies such as RxJava, MVVM architecture, and Clean architecture.',
            'Implemented core features including the OpenID Connect authorization method and IMAP client.',
            'Utilized critical knowledge to enhance test automation, improve linting processes, and set up CI/CD configurations and multiple build variants.',
            'Beyond product development, regularly organized workshops to foster skill improvement among team members.',
          ],
        },
        {
          jobTitle: 'Frontend Engineer - Yahoo! Mail Web',
          activities: [
            'Served as a frontend engineer/tech lead in "Yahoo! Mail Web" team, employing technologies such as React, Redux, and Kubernetes in the "Yahoo! Mail Web React Renewal" project.',
            'Took charge of highly specialized and complex tasks, including performance optimization and authorization implementation.',
            "Led an effort to improve the website's performance with respect to Core Web Vitals, achieving an exceptional 100%+ improvement in score.",
            'Designed the backend architecture from scratch for the "Yahoo! Mail Web React Renewal" project using Kubernetes.',
          ],
        },
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
