import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    yara,
    shopify,
    carrent,
    jobit,
    tripguide,
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
        icon: web
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
        icon: starbucks,
        iconBg: '#383E56',
        date: 'March 2019 - April 2021',
        points: [
            'Finished JS-Softuni course path with a certificate for excellent grade',
            'Learned JS fundamentals and advanced features',
            'Developed few SPA applications on vanilla JS',
            'Unit testing with Mocha and Chai'
        ]
    },
    // {
    //     title: 'Web Developer',
    //     company_name: 'Shopify',
    //     icon: shopify,
    //     iconBg: '#383E56',
    //     date: 'Jan 2022 - Jan 2023',
    //     points: [
    //         'Developing and maintaining web applications using React.js and other related technologies.',
    //         'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
    //         'Implementing responsive design and ensuring cross-browser compatibility.',
    //         'Participating in code reviews and providing constructive feedback to other developers.'
    //     ]
    // },
    {
        title: 'React-Typescript Developer',
        company_name: 'Yara International',
        icon: yara,
        iconBg: '#E6DEDD',
        date: 'Feb 2023 - Present',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.'
        ]
    },
    
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Boyan proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Boyan does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        testimonial: "After Boyan optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Denis Kanh',
        designation: 'Custumer Support',
        company: 'Crypto.com',
        image: 'https://randomuser.me/api/portraits/women/6.jpg'
    }
];

const projects = [
    {
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient'
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient'
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient'
            }
        ],
        image: carrent,
        source_code_link: 'https://github.com/'
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
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
                name: 'scss',
                color: 'pink-text-gradient'
            }
        ],
        image: jobit,
        source_code_link: 'https://github.com/'
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient'
            },
            {
                name: 'supabase',
                color: 'green-text-gradient'
            },
            {
                name: 'css',
                color: 'pink-text-gradient'
            }
        ],
        image: tripguide,
        source_code_link: 'https://github.com/'
    }
];

export { services, technologies, experiences, testimonials, projects };
