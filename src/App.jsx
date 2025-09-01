import "./App.css";
import "./componentStyles.css";
import data from "./assets/mockdata";
import RootLayout from "./Pages/RootLayout";
import Overview from "./Pages/Overview";
import Blogs from "./Pages/Blogs";
import Shop from "./Pages/Shop";
import Settings from "./Pages/Settings";

import {
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
  NavLink,
  Route,
  RouterProvider,
} from "react-router";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Overview data={data} />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
