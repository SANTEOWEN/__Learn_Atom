import { useLocation } from "@tanstack/react-router"

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

export const navLinksOne = [
  {
    'name': 'History',
    'path': '/History',
  },
  {
    'name': 'Mission & Vision',
    'path': '/Mission-vision',
  },
  {
    'name': 'Privacy Policy',
    'path': '/Privacy-Policy',
  },
  {
    'name': 'Frequently Asked Questions',
    'path': '/FAQ',
  }
]

export const dynamicColor = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes('History')) {
    return 'bg-blue-500';
  } else if (path.includes('Mission-vision')) {
    return 'bg-green-500';
  } else if (path.includes('Privacy-Policy')) {
    return 'bg-yellow-500';
  } else if (path.includes('FAQ')) {
    return 'bg-red-500';
  } else {
    return 'bg-gray-500';
  }

}

