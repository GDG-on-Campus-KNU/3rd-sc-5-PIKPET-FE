import { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import SearchPage from "@pages/SearchPage";
import SearchResultPage from "@pages/SearchResultPage";
import MypagePage from "@pages/MypagePage";
import InterestsPage from "@pages/InterestsPage";
import PetInfoDetailPage from "@pages/PetInfoDetailPage";
import ShelterLocationPage from "@pages/ShelterLocationPage";
import ApplyPage from "@pages/ApplyPage";

const router = createBrowserRouter([
  { index: true, path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "search", element: <SearchPage /> },
  { path: "result", element: <SearchResultPage /> },
  { path: "mypage", element: <MypagePage /> },
  { path: "interests", element: <InterestsPage /> },
  { path: "/pet/:petId", element: <PetInfoDetailPage /> },
  { path: "/pet/:petId/location", element: <ShelterLocationPage /> },
  { path: "/apply", element: <ApplyPage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
