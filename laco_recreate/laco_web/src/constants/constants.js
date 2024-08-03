import { schl_1, schl_2, schl_7, schl_4, schl_5, schl_8 } from "../assets/school_photos/photos"
import { event_1, event_2, event_3 } from "../assets/events_photos/events"
import { faBan, faUsers, faHouseCircleCheck, faWifi, faComputer } from '@fortawesome/free-solid-svg-icons'


export const schoolImages = [
    {
        imgUrl: schl_8,
        name: "image_7",
        description: "LAMAW1"
    },
    {
        imgUrl: schl_2,
        name: "image_2",
        description: "LAMAW1"
    },
    {
        imgUrl: schl_7,
        name: "image_3",
        description: "LAMAW1"
    },
    {
        imgUrl: schl_4,
        name: "image_4",
        description: "LAMAW1"
    },
    {
        imgUrl: schl_5,
        name: "image_5",
        description: "LAMAW1"
    },
    {
        imgUrl: schl_1,
        name: "image_1",
        description: "LAMAW1"
    },
]

export const navList = [
    {
        id: 1,
        nav: "Home",
        route: "/home",
    },
    {
        id: 2,
        nav: "About",
        route: "/About",
    },
    {
        id: 3,
        nav: "History",
        route: "/History",
    },
    {
        id: 4,
        nav: "Mission & Vission",
        route: "/MissionVission",
    },
    {
        id: 5,
        nav: "Data Privacy",
        route: "/DataPrivacy",
    },
    {
        id: 6,
        nav: "Admissions",
        route: "/Admissions",
    },
    {
        id: 7,
        nav: "Program Offerings",
        route: "/ProgramOfferings",
    },
    {
        id: 8,
        nav: "About",
        route: "/About",
    },
    {
        id: 9,
        nav: "History",
        route: "/History"
    },
    {
        id: 10,
        nav: "Mission & Vission",
        route: "/MissionVission"
    },
]

export const navLinksOne = [
    {
        id: 1,
        name: 'History',
        route: "/History"
    },
    {
        id: 2,
        name: 'Mission & Vission',
        route: "/MissionVission"
    },
    {
        id: 3,
        name: 'Privacy Policy',
        route: "/DataPrivacy"
    },
    {
        id: 4,
        name: 'Program Offerings',
        route: "/ProgramOfferings"
    },
]

export const events = [
    {
        id: 1,
        img: event_1,
        date: "May 30, 2024",
        title: "Commencement Activity",
        content: "Graduation day is a momentous occasion marking the culmination of years of hard work, dedication, and perseverance. As the sun rises on June 15, 2024, the University Auditorium will be abuzz with excitement and anticipation. Students, adorned in their caps and gowns, will gather with their families and friends to celebrate this significant milestone."
    },
    {
        id: 2,
        img: event_2,
        date: "May 28, 2024",
        title: "Baccalaureate Mass",
        content: "Congratulations on reaching this significant milestone in your academic journey! As you prepare to embark on new adventures and face exciting challenges ahead, we invite you to join us in a moment of reflection, gratitude, and celebration at our Baccalaureate Mass."
    },
    {
        id: 3,
        img: event_3,
        date: "Aprill 22, 2024",
        title: "School Retreat",
        content: "Congratulations on reaching this incredible milestone! As you embark on this exciting new chapter, we invite you to join us for a transformative school retreat at La Consolacion College Novaliches. This retreat is the perfect opportunity to reflect on your journey, bond with fellow graduates, and prepare for the adventures that lie ahead."
    },
]

export const reasons = [
    {
        id: 1,
        icon: faBan,
        title: "No Entrance Exam",
        content: "Freshmen don't need to take an entrance exam, undergo an interview, or meet cut-off grades.",
        color: "#f75842"

    },
    {
        id: 2,
        icon: faHouseCircleCheck,
        title: "Learning Environment",
        content: "Immerse yourself in an optimal learning environment, where every room is equipped with air conditioning.",
        color: "#00bf8e"
    },
    {
        id: 3,
        icon: faWifi,
        title: "Campus & Facilities",
        content: "The entire campus is covered by Wi-Fi, and two laboratories, each furnished with a comprehensive set of computers.",
        color: "#f7c453"
    },
    {
        id: 4,
        icon: faUsers,
        title: "Accepting Students",
        content: "Accepting freshmen, transferees, returning students, ALS passers, and foreign students.",
        color: "#00bf8e"
    },
    {
        id: 5,
        icon: faComputer,
        title: "Online Learning",
        content: "Online Learning for College and Senior High School, and DepEd voucher accepted for SHS.",
        color: "#024173"
    }
]