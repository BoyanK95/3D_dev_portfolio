import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    softuni,
    yara,
    meetupAppCover,
    jobit,
    mernApp,
    threejs
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About'
    },
    {
        id: 'work',
        title: 'Work'
    },
    {
        id: 'contact',
        title: 'Contact'
    }
];

const services = [
    {
        title: 'React Developer',
        icon: web
    },
    {
        title: 'Next.js',
        icon: web
    },
    {
        title: 'Wordpress/Shopify',
        icon: creator
    },
    {
        title: 'React Native Developer in training',
        icon: mobile
    }
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html
    },
    {
        name: 'CSS 3',
        icon: css
    },
    {
        name: 'JavaScript',
        icon: javascript
    },
    {
        name: 'TypeScript',
        icon: typescript
    },
    {
        name: 'React JS',
        icon: reactjs
    },
    {
        name: 'Redux Toolkit',
        icon: redux
    },
    {
        name: 'Next JS',
        icon: nextjs
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind
    },
    {
        name: 'Node JS',
        icon: nodejs
    },
    {
        name: 'MongoDB',
        icon: mongodb
    },
    {
        name: 'Three JS',
        icon: threejs
    },
    {
        name: 'git',
        icon: git
    },
    {
        name: 'figma',
        icon: figma
    },
    {
        name: 'docker',
        icon: docker
    }
];

const experiences = [
    {
        title: 'JS Softuni program',
        company_name: 'Softuni',
        icon: softuni,
        iconBg: '#383E56',
        date: 'March 2019 - April 2021',
        points: [
            'Finished JS-Softuni course path with a certificate for excellent grade',
            'Learned JS fundamentals and advanced features',
            'Developed few SPA applications on vanilla JS',
            'Unit testing with Mocha and Chai'
        ]
    },
    {
        title: 'React-Typescript Developer',
        company_name: 'Yara International',
        icon: yara,
        iconBg: '#E6DEDD',
        date: 'Feb 2023 - Present',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with worldwide diverse teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.'
        ]
    },
    
];

const testimonials = [
    {
        testimonial:
            'I have worked with Boyan on several projects and I can say that he is a very reliable developer. He is always willing to help me with any problem I may have.',
        name: 'Ivaylo Ivanov',
        designation: 'Senior Software Engineer',
        company: 'EGT',
        image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients needs like Boyan Koychev.",
        name: 'Georgi Dimitrov',
        designation: 'Software Engineer',
        company: 'Cognite',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        testimonial: "After Boyan optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Denis Kanh',
        designation: 'Custumer Support',
        company: 'Crypto.com',
    }
];

const projects = [
    {
        name: 'MeetUp App',
        description:
            'Single-page application platform created with NextJS that allows users to create a meet up.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient'
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient'
            },
            {
                name: 'vercel',
                color: 'gray-text-gradient'
            }
        ],
        image: meetupAppCover,
        source_code_link: 'https://github.com/BoyanK95/Meetup-App'
    },
    {
        name: 'Warehouse App',
        description:
            'Warehouse management application created with ReactJS for the front end and NestJS for the backend api using REST services and PosgreSQL for database ',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient'
            },
            {
                name: 'restapi',
                color: 'green-text-gradient'
            },
            {
                name: 'nest',
                color: 'pink-text-gradient'
            }
        ],
        image: jobit,
        source_code_link: 'https://github.com/BoyanK95/FinalProject_yara_internship2023'
    },
    {
        name: 'Balcan Properties',
        description:
            'A MERN stack application that allows users to search for properties to rent buy and also to post their own apartments or houses in any given city ',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient'
            },
            {
                name: 'mongoDB',
                color: 'green-text-gradient'
            },
            {
                name: 'css',
                color: 'pink-text-gradient'
            }
        ],
        image: mernApp,
        source_code_link: 'https://github.com/BoyanK95/BoyanProperties'
    }
];

export { services, technologies, experiences, testimonials, projects };
