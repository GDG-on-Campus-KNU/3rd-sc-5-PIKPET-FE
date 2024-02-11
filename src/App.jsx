import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
