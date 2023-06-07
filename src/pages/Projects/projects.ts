interface IProjectsPreview {
    id: number;
    title: string;
    description: string;
    frameworks: Framework[];
    url?: string;
    finished: boolean;
    moreInfo: MoreInfo[];
    contributors: IContributor[];
}

type MoreInfoTypes = 'img' | 'text';
type Framework = typeof frameworks[number];

interface IContributor {
    name: string;
    url: string;
}

interface MoreInfo {
    text?: string;
    img?: string;
    type: MoreInfoTypes;
}

const frameworks = [
    // (Programmier-)sprachen
    'Python',
    'SQL',
    'TypeScript',
    'Java',
    'JavaScript',
    'Node.js',
    'C#',
    'Dart',
    'HTML/CSS',
    // Frontend Frameworks
    'Vue.js',
    // Backend Frameworks
    'Express.js',
    // Datenbank Systeme
    'MongoDB',
    'SQLite',
    // Sonstiges
    'Vuetify',
    'Flutter',
] as const;

const projects: IProjectsPreview[] = [
    {
        id: 0,
        contributors: [
            {
                name: 'heeecker',
                url: 'https://github.com/filip326'
            },
            {
                name: 'Christian.sh',
                url: 'https://github.com/Barsch2006'
            },
            {
                name: 'Mickhat',
                url: 'https://github.com/Mickhat'
            },
            {
                name: 'oglimmer',
                url: 'https://github.com/oglimmer'
            }
        ],
        title: 'FloBot',
        description: 'Moderation Bot in TypeScript',
        frameworks: ['Node.js', 'SQLite', 'TypeScript'],
        finished: true,
        url: 'https://github.com/Mickhat/FloBot/',
        moreInfo: [
            {
                text: `Ein Discord Bot für die Moderation von Florian Dalwigks Discord Server. Es wurde in TypeScript umgesetzt und nutzt eine SQLIte Datenbank.
                Der Bot hat ein Report- und Moderationssystem, sowie noch einige nette Features wie z.B. ein Memesystem.`,
                type: 'text'
            },
        ]
    },
    {
        id: 1,
        contributors: [
            {
                name: 'heeecker',
                url: 'https://github.com/filip326'
            },
            {
                name: 'Christian.sh',
                url: 'https://github.com/Barsch2006'
            }
        ],
        title: 'ATec-Eventplaner',
        description: 'Ein Veranstaltungsplaner für die ATec unserer Schule. Man kann Veranstaltungen anmelden und als Administrator managen.',
        frameworks: ['Node.js', 'HTML/CSS', 'JavaScript'],
        finished: false,
        moreInfo: [
            {
                text: `Ein Veranstaltungsplaner für die ATec unserer Schule. Man kann Veranstaltungen anmelden und 
                als Administrator managen. Das Projekt wird vermutlich in Zukunft nochmal neu aufgerollt und 
                mit Vue.js und MongoDB neu implementiert.`,
                type: 'text'
            },
        ]
    },
    {
        id: 2,
        contributors: [
            {
                name: 'heeecker',
                url: 'https://github.com/filip326'
            },
            {
                name: 'Christian.sh',
                url: 'https://github.com/Barsch2006'
            }
        ],
        title: 'DolphinSchool-Client',
        description: 'A school management system (Client)',
        frameworks: ['Vue.js', 'Vuetify', 'Node.js', 'TypeScript'],
        finished: false,
        moreInfo: [
            {
                text: 'A school management system',
                type: 'text'
            },
            {
                text: 'Something better than edunite and LANiS, We hope.',
                type: 'text'
            }
        ]
    },
    {
        id: 3,
        contributors: [
            {
                name: 'heeecker',
                url: 'https://github.com/filip326'
            },
            {
                name: 'Christian.sh',
                url: 'https://github.com/Barsch2006'
            }
        ],
        title: 'DolphinSchool-Server',
        description: 'A school management system (Server)',
        frameworks: ['Express.js', 'Node.js', 'MongoDB', 'TypeScript'],
        finished: false,
        moreInfo: [
            {
                text: 'A school management system',
                type: 'text'
            },
            {
                text: 'Something better than edunite and LANiS, We hope.',
                type: 'text'
            }
        ]
    },
    {
        id: 4,
        contributors: [
            {
                name: 'heeecker',
                url: 'https://github.com/filip326'
            },
            {
                name: 'Christian.sh',
                url: 'https://github.com/Barsch2006'
            }
        ],
        title: 'prowo-algo-2023',
        description: 'Algorythm to sort students into their projects for the prowo 2023',
        frameworks: ['Python'],
        finished: false,
        moreInfo: [
            {
                text: 'Algorythm to sort students into their projects for the prowo 2023',
                type: 'text'
            },
        ]
    }
];

export default projects;
export {
    projects,
    frameworks,
    type IProjectsPreview,
    type Framework,
};
