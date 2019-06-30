import React from "react";
import Link from "next/link";
import Meta from "../components/Meta/index";
import Header from "../components/Header/index";

import CompanyRatingCover from "../components/CompanyRating/Cover/index";
import CompanyRattingList from "../components/CompanyRating/CompanyList/index";
import PopupSignin from "../components/Specialist/PopupSignIn/index";
import Footer from "../components/Footer/index";

const Home = () => (
  <div>
    <Meta title="Home" />
    <Header />
    <CompanyRatingCover />
    <CompanyRattingList />
    <PopupSignin />
    <Footer />
  </div>
);

export default Home;
