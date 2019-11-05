import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, ItemOver } from "./layouts";

// Route Views
import BlogOverview from "./views/Blog/BlogOverview";
import AddNewPost from "./views/Blog/AddNewPost";
import ComponentsOverview from "./views/ComponentsOverview";
import BlogPosts from "./views/Blog/BlogPosts";

// Main comps
import UserProfileLite from "./views/Profile/UserProfileLite";
import Assignments from "./views/Assignments";
import Books from "./views/Books";
import Explorer from "./views/Explorer";
import Newspapers from "./views/Newspapers";
import Pastpapers from "./views/Pastpapers";
import UserStore from "./views/UserStore";
import WishList from "./views/WishList";
import Login from "./views/Auth/Login";
import SignUp from "./views/Auth/SignUp";
import Profile from "./views/Profile";
import PrivacyPolicy from "./views/PrivacyPolicy";
import TermsConditions from "./views/TermsConditions";
import About from "./views/About";
import Contact from "./views/Contact/Contact";
import Page404 from "./views/404Error/404Error";
import ItemOverView from "./views/OverView";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/explorer-overview" />
  },
  {
    path: "/explorer-overview",
    layout: DefaultLayout,
    component: Explorer
  },
  {
    path: "/assignments",
    layout: DefaultLayout,
    component: Assignments
  },
  {
    path: "/book-store",
    layout: DefaultLayout,
    component: Books
  },
  {
    path: "/news-papers",
    layout: DefaultLayout,
    component: Newspapers
  },
  {
    path: "/past-papers",
    layout: DefaultLayout,
    component: Pastpapers
  },
  {
    path: "/item-over-view",
    layout: ItemOver,
    component: ItemOverView
  },
  {
    path: "/user-store",
    layout: DefaultLayout,
    component: UserStore
  },
  {
    path: "/wish-list",
    layout: DefaultLayout,
    component: WishList
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/sign-up",
    layout: DefaultLayout,
    component: SignUp
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: Profile
  },
  {
    path: "/privacy-policy",
    layout: DefaultLayout,
    component: PrivacyPolicy
  },
  {
    path: "/terms-conditions",
    layout: DefaultLayout,
    component: TermsConditions
  },
  {
    path: "/about",
    layout: DefaultLayout,
    component: About
  },
  {
    path: "/contact",
    layout: DefaultLayout,
    component: Contact
  },
  {
    path: "/comps",
    layout: DefaultLayout,
    component: ComponentsOverview
  }
];
