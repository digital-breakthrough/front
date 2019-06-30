import React from "react";
import Link from "next/link";

import Meta from "../../components/Meta/index";
import Header from "../../components/Header/auth";
import Main from "../../components/Profile/Main/index";
import ProfileRecommend from "../../components/Profile/Main/RecomendSkills/index";

const Profile = () => (
  <div className="profile">
    <Meta title="Profile" />
    <Header />
    <Main>
      <ProfileRecommend />
    </Main>
  </div>
);

export default Profile;
