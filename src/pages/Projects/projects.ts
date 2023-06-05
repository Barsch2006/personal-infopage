interface IProjectsPreview {
    title: string;
    description: string;
    frameworks: Framework[];
    url?: string;
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
    'Vuetify',
    'Vue.js', 
    'Python', 
    'SQL', 
    'MongoDB', 
    'Node.js', 
    'TypeScript'
] as const;

const projects: IProjectsPreview[] = [
    {
        title: 'DolphinSchool-Client',
        description: 'A school management system (Web Client)',
        frameworks: ['Vuetify', 'Vue.js', 'TypeScript'],
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
        frameworks: ['Node.js', 'MongoDB', 'TypeScript'],
        url: 'https://github.com/filip326/DolphinSchool-Server',
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
