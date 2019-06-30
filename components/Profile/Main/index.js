import React from "react";

import './index.scss';
import Avatar from './Avatar/index';
import ProfileMenu from './ProfileMenu/index'

class ProfileMain extends React.Component {
    render() {
        return (
            <div className="profile-main">
                <div className="wrapper">
                    <div className="profile-avatar">
                        <Avatar />
                    </div>
                    <div className="profile-menu">
                        <ProfileMenu />
                    </div>
                    <div className="">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMain;
