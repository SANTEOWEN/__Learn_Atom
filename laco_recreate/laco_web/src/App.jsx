import LandingPage from "./Pages/Landing";
import MainLayouts from "./Layouts/MainLayouts";
import Login from "./Pages/Login";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route } from "react-router-dom";
import History from "./sections/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<LandingPage />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* This route is for login auth. */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
