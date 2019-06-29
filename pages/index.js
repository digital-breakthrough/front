import React from "react";
import Link from "next/link";
import Meta from "../components/Meta/index";
import Header from "../components/Header/index";

import SpecialistCover from "../components/Specialist/Cover/index";
import SpecialistCourses from "../components/Specialist/Courses/index";
import PopupSignin from "../components/Specialist/PopupSignIn/index";

const Home = () => (
  <div>
    <Meta title="Home" />
    <Header />
    <SpecialistCover />
    <SpecialistCourses />
    <PopupSignin />
  </div>
);

export default Home;
