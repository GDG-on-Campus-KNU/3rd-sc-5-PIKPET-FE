import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SearchPage from "@pages/SearchPage";
import SearchResultPage from "@pages/SearchResultPage";
import MypagePage from "@pages/MypagePage";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "search", element: <SearchPage /> },
  { path: "search/result", element: <SearchResultPage /> },
  { path: "mypage", element: <MypagePage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
