import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SearchPage from "@pages/SearchPage";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "search", element: <SearchPage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
