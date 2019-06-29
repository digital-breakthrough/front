import React from "react";

import './index.scss';
import Avatar from './Avatar/index';
import ProfileMenu from './ProfileMenu/index'

const ProfileMain = () => (
	<div className="profile-main">
        <div className="wrapper">
            <div className="profile-avatar">
                <Avatar />
            </div>
            <div className="profile-menu">
                <ProfileMenu />
            </div>
        </div>
	</div>
);

export default ProfileMain;
