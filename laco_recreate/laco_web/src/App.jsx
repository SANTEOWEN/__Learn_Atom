import LandingPage from "./Pages/Landing";
import MainLayouts from "./Layouts/MainLayouts";
import Login from "./Pages/Login";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
import Allcourses from "./sections/coursesPages/Allcourses";
import { lazy } from "react";


const History = lazy(() => import('./sections/History'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<LandingPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/courses" element={<Allcourses />} />

        {/* <Route path="/bscs" element={<Bscs />} />
        <Route path="/bsit" element={<Bsit />} />
        <Route path="/bshm" element={<Bshm />} />
        <Route path="/bsed" element={<Bsed />} />
        <Route path="/bsba" element={<Bsba />} /> */}
      </Route>

      {/* This route is for login auth. */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
