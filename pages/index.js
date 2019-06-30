import React from "react";
import Meta from "../components/Meta/index";
import Header from "../components/Header/index";

import SpecialistCover from "../components/Specialist/Cover/index";
import SpecialistCourses from "../components/Specialist/Courses/index";
import PopupSignin from "../components/Specialist/PopupSignIn/index";
import Footer from "../components/Footer/index";

const Home = () => (
	<div>
		<Meta title="Home" />
		<Header />
		<SpecialistCover />
		<SpecialistCourses />
		<PopupSignin />
		<Footer />
	</div>
);

export default Home;
