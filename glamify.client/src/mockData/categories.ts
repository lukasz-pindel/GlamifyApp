import barberLogo from './../assets/homePage/barber.jpg';
import spaLogo from './../assets/homePage/SPA.jpg';
import nailLogo from './../assets/homePage/nail.jpg';
import massageLogo from './../assets/homePage/massage.jpg';

export const categoryData = [
    {
        id: 1,
        name: "Barbers",
        description: "Find the best barbers in town.",
        logo: barberLogo,
        path: "/barbers"
    },
    {
        id: 2,
        name: "Spas",
        description: "Relax and rejuvenate at top spas.",
        logo: spaLogo,
        path: "/spas"
    },
    {
        id: 3,
        name: "Nail Salons",
        description: "Get gorgeous nail services.",
        logo: nailLogo,
        path: "/nailSalons"
    },
    {
        id: 4,
        name: "Massage Places",
        description: "Relieve stress with a soothing massage.",
        logo: massageLogo,
        path: "/massages"
    }
];