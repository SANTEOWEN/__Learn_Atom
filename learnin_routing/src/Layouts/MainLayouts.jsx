import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayouts = ({isLogged}) => {
    return (
        <>
            <Navbar isLogged={isLogged}/>
            <Outlet />
        </>
    )
}

export default MainLayouts