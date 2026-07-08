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
  location: string;
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
  location: string;
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
  location: string;
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
    languages: [
      'English: B2 (business)',
      'Japanese: C2 (proficient)',
      'Chinese: native',
    ],
    about:
      'Full Stack Engineer with 8+ years shipping consumer products at scale — a 20M+ MAU marketplace and a 10M+ download mail app — across frontend, backend, and Android. Deep expertise in TypeScript, React, Node.js, Kotlin, and Kubernetes on AWS/GCP. Led AI developer tooling adoption (Claude Code, GitHub Copilot, self-hosted LLM services) across a 40-engineer organization.',
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
      jobTitle: 'Full Stack Engineer',
      company: 'Woven by Toyota, Inc.',
      location: 'Tokyo, Japan',
      startDate: '2024.12',
      endDate: 'Present',
      techStack: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'React',
        'AWS',
        'Kubernetes',
        'Android',
      ],
      activities: [
        "Built an internal access control and visitor registration platform (TypeScript, React, Node.js, Kubernetes) on a 20-engineer team, and drove the team's first public-internet launch through security, compliance, and penetration-testing reviews.",
        'Led AI developer tooling adoption across a 40-engineer organization: built a self-hosted LLM code completion service on AWS before GitHub Copilot was approved internally, then drove Copilot and Claude Code rollout including automated PR review integration.',
        'Consolidated 6 frontend services into 2 and migrated them off the company-wide monorepo, cutting release load and code duplication ahead of Official Launch.',
        'Led migration to Next.js, removing the backend-wrapper dependency that blocked frontend-only feature delivery; shipped the CSR phase with SSR migration in progress.',
        'Designed the end-to-end release workflow and CI/CD pipelines, enabling continuous feature development during 5+ day QA cycles with zero critical incidents across 10 months of operation.',
        'Drove architecture review for Woven App integration: rejected an authentication library already adopted by peer teams over long-term maintainability risk, and delivered a best-practice alternative.',
        'Established frontend development guidelines, code review standards, and a unit testing culture, raising coverage from 10% to 50%; mentored 2+ frontend engineers via code reviews and pairing.',
        'Closed the project management gap on a PM-less team by introducing lightweight processes (project templates, progress tracking, sprint reviews, platform-split retros) and delegating ownership, enabling systematic delivery without management overhead.',
      ],
      website: 'https://woven.toyota/en/',
    },
    {
      jobTitle:
        'Backend/Frontend Engineer → Android Engineer → Frontend Engineer',
      company: 'Mercari, Inc.',
      location: 'Tokyo, Japan',
      startDate: '2021.11',
      endDate: '2024.11',
      positions: [
        {
          jobTitle: 'Backend/Frontend Engineer - Mercari CS Tool',
          activities: [
            'Built and maintained Mercari CS Tool (GCP, React, PHP, Go, GraphQL, Kubernetes), the internal platform powering customer support operations for the Mercari marketplace.',
            'Migrated a legacy PHP backend with raw SQL queries to a unified GraphQL service, enabling API reuse across teams and modernizing the stack.',
            'Introduced a Skaffold-based local development workflow, cutting hot-reload time from 15–30 minutes to under 1 minute.',
          ],
        },
        {
          jobTitle: 'Android Engineer - Mercari Marketplace',
          activities: [
            'Developed features for the Mercari Android app (Kotlin, Jetpack Compose) as one of 3 Android engineers on an 8-person cross-platform team.',
            'Mentored 2+ junior engineers through code reviews and pair programming, accelerating their ramp-up to independent contributors.',
            'Partnered with design and product to propose and ship UX improvements for new feature launches.',
          ],
        },
        {
          jobTitle: 'Frontend Engineer - Mercari Marketplace',
          activities: [
            'Developed the Mercari marketplace web app (TypeScript, React, Next.js, Jotai) serving 20M+ MAU, as one of 8 frontend engineers.',
            'Led frontend architecture for the "My Collection" feature and co-designed BFF APIs with the backend team, balancing maintainability against API call volume.',
          ],
        },
      ],
      website: 'https://about.mercari.com/',
      techStack: [
        'GCP',
        'PHP',
        'Go',
        'GraphQL',
        'Kubernetes',
        'SQL',
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
      location: 'Tokyo, Japan',
      startDate: '2018.04',
      endDate: '2021.10',
      positions: [
        {
          jobTitle: 'Android Engineer - Yahoo! Mail Android',
          activities: [
            'Built core features for the Yahoo! Mail Android app (10M+ downloads) using RxJava, MVVM, and Clean Architecture on a 10-engineer team.',
            'Implemented OpenID Connect authentication and an IMAP client library; established CI/CD pipelines with automated testing and lint checks across multiple build variants.',
          ],
        },
        {
          jobTitle: 'Frontend Engineer - Yahoo! Mail Web',
          activities: [
            "Served as tech lead for Yahoo! Mail Web React migration (React, Redux, Kubernetes), modernizing the frontend stack of one of Japan's largest webmail services and improving Lighthouse score from 30+ to 60+.",
            'Architected Kubernetes-based backend infrastructure for renewed web app, designing service topology, deployment strategy, and autoscaling policies.',
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
      ],
    },
  ],
  education: [
    {
      name: 'University of Tsukuba',
      degree: 'Master of Engineering in Computer Science',
      location: 'Tsukuba, Japan',
      startDate: '2016.04',
      endDate: '2018.03',
      website: 'https://www.tsukuba.ac.jp/',
    },
    {
      name: 'Fu Jen Catholic University',
      degree: 'Bachelor of Science in Mathematics',
      location: 'New Taipei, Taiwan',
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
    { name: 'GCP', level: 'skilled' },
    { name: 'AWS', level: 'skilled' },
    { name: 'Kubernetes', level: 'skilled' },
    { name: 'Go', level: 'skilled' },
    { name: 'PHP', level: 'skilled' },
    { name: 'Python', level: 'skilled' },
    { name: 'Ruby', level: 'sufficient' },
    { name: 'C++', level: 'sufficient' },
    { name: 'Haskell', level: 'sufficient' },
    { name: 'SQL', level: 'sufficient' },
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
