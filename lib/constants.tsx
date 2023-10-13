import BookOpenIcon from "@/components/icons/BookOpenIcon";
import ChartBarIcon from "@/components/icons/ChartBarIcon";
import HomeIcons from "@/components/icons/HomeIcons";
import InfosIcon from "@/components/icons/InfosIcon";
import WrenchScrewIcon from "@/components/icons/WrenchScrewIcon";

export const NavbarLinks = [
    {
        name: "À Propos",
        link: "#about",
        element: "about",
        icon: <HomeIcons iconClass='w-10 h-10'/>
    },
    {
        name: "Qui Sommes Nous",
        link: "#whoWeAre",
        element: "whoWeAre",
        icon: <BookOpenIcon iconClass='w-10 h-10'/>
    },
    {
        name: "Activités",
        link: "#activities",
        element: "activities",
        icon: <WrenchScrewIcon iconClass='w-10 h-10'/>
    },
    {
        name: "Projets",
        link: "#previouProjects",
        element: "projects",
        icon: <ChartBarIcon iconClass='w-10 h-10'/>
    },
    {
        name: "Contacts",
        link: "#contacts",
        element: "contacts",
        icon: <InfosIcon iconClass='w-10 h-10'/>
    }
]

export const ActivitesList = [
    {
        activityName: "Télécom",
        activityDescription: "Fourniture et installation réseau informatique, point d'accès, tetra radio, serveurs, fibre optique, telephony",
        image: '/server-image.jpeg'
    },
    {
        activityName: "Systeme d'alarme",
        activityDescription: "Fourniture et installation de système de vidéosurveillance, contrôle d'accès, lutte contre l'incendie",
        image: '/fire-alarm-devices-image.jpg'
    },
    {
        activityName: "Electricité bâtiment",
        activityDescription: "Fourniture et installation matériel électrique basse tension, domotique et éclairage publique",
        image: '/low-voltage-image.jpg'
    },
]

export const clientsLogo = [
    '/logos/mzabi-group-no-bg.png', 
    '/logos/randa-group-no-bg.png',
    '/logos/lavazza-group-no-bg.png',
    '/logos/monoprix-group-no-bg.png',
    '/logos/zen-group-no-bg.png', 
    '/logos/hertz-group-no-bg.png',
    '/logos/stir-group-no-bg.png',
    '/logos/chemie-couleur-group-no-bg.png',
    '/logos/royal-group-no-bg.png',
    '/logos/mosaique-group-no-bg.png',
    '/logos/italie-group-no-bg.png',
    '/logos/sopreco-group-no-bg.png'     
]

export const suppliersLogo = [
    '/logos/elkron-group-no-bg.png', 
    '/logos/technoalarm-group-no-bg.png',    
    '/logos/zkteko-group-no-bg.png',
    '/logos/dahua-group-no-bg.png',
    '/logos/hikvision-group-no-bg.png',
    '/logos/panasonic-group-no-bg.png', 
    '/logos/legrand-group-no-bg.png',
    '/logos/urmet-group-no-bg.png',
    '/logos/teletek-group-no-bg.png',
    '/logos/motorline-group-no-bg.png',
    '/logos/comelit-group-no-bg.png',
    '/logos/lg-group-no-bg.png' 
]

export const PreviousProjectsList = [
    {
        projectName: "Project 1",
        projecDescription: "Project1 Description",
        projectClient: "Project 1 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:50 
            }
        ]
    },
    {
        projectName: "Project2",
        projecDescription: "Project2 Description",
        projectClient: "Project2 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:80
            }
        ]
    },
    {
        projectName: "Project3",
        projecDescription: "Project3 Description",
        projectClient: "Project3 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:60 
            }
        ]
    },
    {
        projectName: "Project4",
        projecDescription: "Project4 Description",
        projectClient: "Project4 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:100
            }
        ]
    },
    {
        projectName: "Project5",
        projecDescription: "Project5 Description",
        projectClient: "Project5 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:90 
            }
        ]
    },
    {
        projectName: "Project6",
        projecDescription: "Project6 Description",
        projectClient: "Project6 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:65 
            }
        ]
    },
     {
        projectName: "Project7",
        projecDescription: "Project7 Description",
        projectClient: "Project7 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:55 
            }
        ]
    },
    {
        projectName: "Project8",
        projecDescription: "Project8 Description",
        projectClient: "Project8 Client",
        projectImages:
        [
            {
                url:'/HeroImage.jpg',
                width:200,
                height:60 
            }
        ]
    } 
]