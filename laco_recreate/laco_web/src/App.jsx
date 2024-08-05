import LandingPage from "./Pages/Landing";
import MainLayouts from "./Layouts/MainLayouts";
import Login from "./Pages/Login";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route, createRoutesFromElements } from "react-router-dom";
import Allcourses from "./sections/coursesPages/Allcourses";
import History from "./sections/History";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bscs from "./sections/coursesPages/courses/Bscs";
import Bsba from "./sections/coursesPages/courses/Bsba";
import Bsit from "./sections/coursesPages/courses/Bsit";
import Bshm from "./sections/coursesPages/courses/Bshm";
import Bsed from "./sections/coursesPages/courses/Bsed";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<LandingPage />} />
      <Route path="history" element={<History />} />

      <Route path="Courses" element={<Allcourses />}>
        <Route path="bscs" element={<Bscs />} />
        <Route path="bsit" element={<Bsed />} />
        <Route path="bshm" element={<Bshm />} />
        <Route path="bsed" element={<Bsit />} />
        <Route path="bsba" element={<Bsba />} />
      </Route>

      < Route path="/login" element={< Login />} />
      < Route path="*" element={< PageNotFound />} />


    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
