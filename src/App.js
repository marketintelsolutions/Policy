import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pacam from "./pages/PacamData";
import Indemnity from "./pages/Indemnity";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/data-protection",
      element: (
        <Pacam />
      ),
    },
    {
      path: "/indemnity",
      element: (
        <Indemnity />
      ),
    },
    {
      path: "/terms-and-conditions",
      element: (
        <TermsAndConditions />
      ),
    },

  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
