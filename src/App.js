import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DataProtection from "./pages/DataProtection";
import Indemnity from "./pages/Indemnity";
import TermsAndConditions from "./pages/TermsAndConditions";
import Pacam from "./pages/Pacam";
import Securities from "./pages/Securities";

function App() {
  const router = createBrowserRouter([
    {
      path: "/data-protection",
      element: (
        <DataProtection />
      ),
    },
    {
      path: "/pacam",
      element: (
        <Pacam />
      ),
    },
    {
      path: "/securities",
      element: (
        <Securities />
      ),
    },
    {
      path: "/trustees",
      element: (
        <Securities />
      ),
    },

  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
