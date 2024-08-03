import { schl_1, schl_2, schl_7, schl_4, schl_5, schl_8 } from "../assets/school_photos/photos"
import { event_1, event_2, event_3 } from "../assets/events_photos/events"
import { faBan, faUsers, faHouseCircleCheck, faWifi, faComputer } from '@fortawesome/free-solid-svg-icons'
import { color } from "framer-motion"


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
        nav: "Contact Us",
        route: "/contact"
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
        content: "Graduation day marks the culmination of years of hard work. Students will gather at the University Auditorium to celebrate this milestone."
    },
    {
        id: 2,
        img: event_2,
        date: "May 28, 2024",
        title: "Baccalaureate Mass",
        content: "Join us for a moment of reflection and celebration as you prepare for new adventures."
    },
    {
        id: 3,
        img: event_3,
        date: "April 22, 2024",
        title: "School Retreat",
        content: "Reflect on your journey, bond with fellow graduates, and prepare for the adventures ahead at the La Consolacion College Novaliches retreat."
    }
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

export const historySchool = [

    {
        id: 2,
        title: "15 Years of Excellence",
        date: "2005",
        content: "La Consolacion College Novaliches has demonstrated exceptional academic performance and a strong commitment to excellence and innovation.",
        color: "#f75842"
    },
    {
        id: 3,
        title: "100% Enrollment",
        date: "2021",
        content: "La Consolacion College Novaliches has achieved a 100% enrollment rate.",
        color: "#00bf8e"
    },
    {
        id: 4,
        title: "200+ Faculty Members",
        date: "2023",
        content: "La Consolacion College Novaliches has over 200 faculty members committed to student development and community well-being.",
        color: "#f7c453"
    },
    {
        id: 5,
        title: "Awards and Recognition",
        date: "2023",
        content: "La Consolacion College Novaliches has been recognized with prestigious awards, such as Best College of the Year and National School of the Arts.",
        color: "#00bf8e"
    }

]