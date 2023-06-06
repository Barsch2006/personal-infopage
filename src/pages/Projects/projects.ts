interface IProjectsPreview {
    title: string;
    description: string;
    frameworks: Framework[];
    url?: string;
    finished: boolean;
    moreInfo: MoreInfo[];
}

type MoreInfoTypes = 'img' | 'text';
type Framework = typeof frameworks[number];

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
        title: 'DolphinSchool-Client',
        description: 'A school management system (Web Client)',
        frameworks: ['Node.js', 'TypeScript', 'Vue.js', 'Vuetify'],
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
        title: 'DolphinSchool-Server',
        description: 'A school management system (Server)',
        frameworks: ['Express.js', 'Node.js', 'MongoDB', 'TypeScript'],
        url: 'https://github.com/filip326/DolphinSchool-Server',
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
    }
];

export default projects;
export {
    projects,
    frameworks,
    type IProjectsPreview,
    type Framework,
};
