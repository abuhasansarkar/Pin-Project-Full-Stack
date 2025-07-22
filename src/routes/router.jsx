import { createBrowserRouter } from "react-router";
import AuthPage from "./authPage/AuthPage";
import HomePage from "./homePage/HomePage";
import CreatePage from "./createPage/CreatePage";
import PostPage from "./postPage/PostPage";
import UserProfile from "./userProfile/UserProfile";
import SearchPage from "./searchPage/SearchPage";
import MainLayouts from "./layouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/messages",
        element: <h4>Messages Page</h4>,
      },
      {
        path: "/pin/:id",
        element: <PostPage />,
      },
      {
        path: "/:username",
        element: <UserProfile />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthPage />,
  },
]);
