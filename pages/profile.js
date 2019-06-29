import React from "react";
import Link from "next/link";

import Meta from "../components/Meta/index";
import Header from "../components/Header/index";
import Main from "../components/Profile/Main/index";

const Profile = () => (
  <div className="profile">
    <Meta title="Profile" />
    <Header />
    <Main />
  </div>
);

export default Profile;
