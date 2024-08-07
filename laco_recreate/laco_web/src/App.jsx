import { Suspense, lazy } from "react";

import { Route, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./Pages/Landing";
import MainLayouts from "./Layouts/MainLayouts";
import PageNotFound from "./components/PageNotFound";
import Allcourses from "./sections/coursesPages/Allcourses";
// import History from "./sections/History";
import Bscs from "./sections/coursesPages/courses/Bscs";
import Bsba from "./sections/coursesPages/courses/Bsba";
import Bsit from "./sections/coursesPages/courses/Bsit";
import Bshm from "./sections/coursesPages/courses/Bshm";
import Bsed from "./sections/coursesPages/courses/Bsed";
import Faq from "./sections/Faq";
import Privacy from "./sections/Privacy";
import MissionVision from "./sections/MissionVision";

import Loading from "./components/Loading";

const History = lazy(() => import('./sections/History'))



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route index element={<LandingPage />} />
      <Route path="history" element={
        <Suspense fallback={() => <Loading />}>
          <History />
        </Suspense>
      } />

      <Route path="Courses" element={<Allcourses />}>
        <Route path="bscs" element={<Bscs />} />
        <Route path="bsed" element={<Bsed />} />
        <Route path="bshm" element={<Bshm />} />
        <Route path="bsit" element={<Bsit />} />
        <Route path="bsba" element={<Bsba />} />
      </Route>

      <Route path="faq" element={<Faq />} />
      <Route path="Privacy-policy" element={<Privacy />} />
      <Route path="Mission_vision" element={<MissionVision />} />

      <Route path="*" element={< PageNotFound />} />
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
