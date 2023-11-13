import BookOpenIcon from "@/components/icons/BookOpenIcon";
import ChartBarIcon from "@/components/icons/ChartBarIcon";
import HomeIcons from "@/components/icons/HomeIcons";
import InfosIcon from "@/components/icons/InfosIcon";
import WrenchScrewIcon from "@/components/icons/WrenchScrewIcon";

export const API_URL = process.env.NEXT_PUBLIC_API_URL

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
        projectName: "Fourniture et installation courant faible",
        projecDescription: "Camera surveillance, systeme anti-instrusion, fibre optique, reseau informatique, telephonique",
        projectClient: "Group Mzabi",
        projectImages:
        [
            {
                url:'/projets/mzabi/mzabi-image-001.jpg',
                width:200,
                height:40 
            },
            {
                url:'/projets/mzabi/mzabi-image-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/mzabi/mzabi-image-003.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/mzabi/mzabi-image-004.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/mzabi/mzabi-image-005.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/mzabi/mzabi-image-006.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/mzabi/mzabi-image-007.jpg',
                width:200,
                height:55 
            }
        ]
    },
    {
        projectName: "Fourniture et installation courant faible et eclairage",
        projectClient: "Elcom"  ,
        projecDescription: "Camera surveillance, systeme anti-instrusion, fibre optique, reseau informatique, voix-Ip, eclairage",
        projectImages:
        [
            {
                url:'/projets/elcom/image-elcom-001.jpg',
                width:200,
                height:60 
            },
            {
                url:'/projets/elcom/image-elcom-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/elcom/image-elcom-003.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/elcom/image-elcom-004.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/elcom/image-elcom-005.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/elcom/image-elcom-006.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/elcom/image-elcom-007.jpg',
                width:200,
                height:55 
            }
        ]
    },
    {
        projectName: "Fourniture et installation courant faible",
        projecDescription: "Camera surveillance, systeme anti-instrusion, fibre optique, reseau informatique, telephonique",
        projectClient: "CGM",
        projectImages:
        [
            {
                url:'/projets/cgm/image-cgm-001.jpg',
                width:200,
                height:40 
            },
            {
                url:'/projets/cgm/image-cgm-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/cgm/image-cgm-003.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/cgm/image-cgm-004.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/cgm/image-cgm-005.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/cgm/image-cgm-006.jpg',
                width:200,
                height:55 
            }
        ]
    },
    {
        projectName: "Fourniture et installation courant faible",
        projecDescription: "Reseau informatique, systeme TV  ",
        projectClient: "Hotel Regency Gammaret",
        projectImages:
        [
            {
                url:'/projets/regency/image-regency-001.jpg',
                width:200,
                height:60 
            },
            {
                url:'/projets/regency/image-regency-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/regency/image-regency-003.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/regency/image-regency-004.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/regency/image-regency-005.jpg',
                width:200,
                height:55 
            },
        ]
    },
    {
        projectName: "Fourniture et installation courant faible",
        projecDescription: "Cameras de surveillance, Point d'acces,",
        projectClient: "Monoprix",
        projectImages:
        [
            {
                url:'/projets/monoprix/image-monoprix-001.jpg',
                width:200,
                height:60 
            },
            {
                url:'/projets/monoprix/image-monoprix-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/monoprix/image-monoprix-003.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/monoprix/image-monoprix-004.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/monoprix/image-monoprix-005.jpg',
                width:200,
                height:55 
            },
        ]
    },
    {
        projectName: "Fourniture et installation courant faible",
        projecDescription: "Cameras De Surveillance",
        projectClient: "Ste BMB",
        projectImages:
        [
            {
                url:'/projets/bmb/image-bmb-001.jpg',
                width:200,
                height:50 
            },
            {
                url:'/projets/bmb/image-bmb-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/bmb/image-bmb-003.jpg',
                width:200,
                height:55 
            }
        ]
    },
    {
        projectName: "Fourniture et installation système alarme",
        projecDescription: "Detection incendie et alarme",
        projectClient: "Ste Bonelle Soliman",
        projectImages:
        [
            {
                url:'/projets/bonal/image-bonal-001.jpg',
                width:200,
                height:50 
            },
            {
                url:'/projets/bonal/image-bonal-002.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/bonal/image-bonal-003.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/bonal/image-bonal-004.jpg',
                width:200,
                height:55 
            },
            {
                url:'/projets/bonal/image-bonal-004.jpg',
                width:200,
                height:55 
            }
        ]
    }
]