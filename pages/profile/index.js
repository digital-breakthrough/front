import React from "react";
import Link from "next/link";

import Meta from "../../components/Meta/index";
import Header from "../../components/Header/auth";
import Main from "../../components/Profile/Main/index";
import ProfileInformation from "../../components/Profile/Main/BasicInformation/index";

const Profile = () => (
  <div className="profile">
    <Meta title="Profile" />
    <Header />
    <Main>
      <ProfileInformation />
    </Main>
  </div>
);

export default Profile;
