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

export const PreviousProjectsList = [
    {
        projectName: "Project1",
        projecDescription: "Project1 Description",
        projectClient: "Project1 Client",
        projectMainImage: '/HeroImage.jpg'
    },
    {
        projectName: "Project2",
        projecDescription: "Project2 Description",
        projectClient: "Project2 Client",
        projectMainImage: '/HeroImage.jpg'
    },
    {
        projectName: "Project3",
        projecDescription: "Project3 Description",
        projectClient: "Project3 Client",
        projectMainImage: '/HeroImage.jpg'
    },
    {
        projectName: "Project4",
        projecDescription: "Project4 Description",
        projectClient: "Project4 Client",
        projectMainImage: '/HeroImage.jpg'
    },
    {
        projectName: "Project5",
        projecDescription: "Project5 Description",
        projectClient: "Project5 Client",
        projectMainImage: '/HeroImage.jpg'
    },
    {
        projectName: "Project6",
        projecDescription: "Project6 Description",
        projectClient: "Project6 Client",
        projectMainImage: '/HeroImage.jpg'
    },
/*     {
        projectName: "Project7",
        projecDescription: "Project7 Description",
        projectClient: "Project7 Client",
        projectMainImage: '/HeroImage.jpg'
    },
    {
        projectName: "Project8",
        projecDescription: "Project8 Description",
        projectClient: "Project8 Client",
        projectMainImage: '/HeroImage.jpg'
    } */
]
