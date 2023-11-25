import BookOpenIcon from "@/components/icons/BookOpenIcon";
import ChartBarIcon from "@/components/icons/ChartBarIcon";
import HomeIcons from "@/components/icons/HomeIcons";
import InfosIcon from "@/components/icons/InfosIcon";
import WrenchScrewIcon from "@/components/icons/WrenchScrewIcon";

export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const WHATSAPPNUMBER = process.env.NEXT_PUBLIC_WHATSAPPNUMBER

export const NavbarLinks = [
    {
        name: "À Propos",
        link: `${API_URL}/#about`,
        element: "about",
        icon: <HomeIcons iconClass='w-10 h-10'/>
    },
    {
        name: "Qui Sommes Nous",
        link: `${API_URL}/#whoWeAre`,
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
        link: `${API_URL}/#previouProjects`,
        element: "projects",
        icon: <ChartBarIcon iconClass='w-10 h-10'/>
    },
    {
        name: "Contacts",
        link: `${API_URL}/#contacts`,
        element: "contacts",
        icon: <InfosIcon iconClass='w-10 h-10'/>
    }
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
