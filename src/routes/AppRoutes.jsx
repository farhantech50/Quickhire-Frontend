import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Main";
import PageLoader from "../components/PageLoader";
import LandingPage from "../pages/LandingPage/LandingPage";
import AccessDenied from "../pages/LandingPage/AccessDenied";
import NotFound from "../pages/LandingPage/NotFound";
import { ToastContainer } from "react-toastify";
import JobList from "../pages/Jobs/JobList";
import JobDetails from "../pages/Jobs/JobDetails";
import AdminPage from "../pages/Jobs/AdminPage";
const routes = [
  {
    path: "/jobs",
    element: <JobList />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetails />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
];

const AppRoutes = () => {
  return (
    <Router>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PageLoader>{element}</PageLoader>}
            />
          ))}
        </Route>

        <Route path="/unauthorized" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
