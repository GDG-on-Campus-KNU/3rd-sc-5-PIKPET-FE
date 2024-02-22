import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SearchPage from "@pages/SearchPage";
import SearchResultPage from "@pages/SearchResultPage";
import MypagePage from "@pages/MypagePage";
import InterestsPage from "@pages/InterestsPage";
import PetInfoDetailPage from "@pages/PetInfoDetailPage";
import ShelterLocationPage from "@pages/ShelterLocationPage";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { exact: true, path: "search", element: <SearchPage /> },
  { path: "search?:queryString", element: <SearchResultPage /> },
  { path: "mypage", element: <MypagePage /> },
  { path: "interests", element: <InterestsPage /> },
  { path: "/pet/:petId", element: <PetInfoDetailPage /> },
  { path: "/pet/:petId/location", element: <ShelterLocationPage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
