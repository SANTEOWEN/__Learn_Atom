import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'

function MainLayouts() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayouts