import React from "react";
import Link from "next/link";
import PopupSignIn from "../Specialist/PopupSignIn/index";
import LogoImg from "../../static/logo.png";

import './index.scss';

class Nav extends React.Component {

	constructor() {
		super();
		this.state = {
			popupSignInIsOpened: false
		}
	}

	openPopupSignIn() {
		this.setState({ popupSignInIsOpened: true});
	}

	render() {
		return (
			<nav className="header">
				<div className="wrap">
					<div className="logo">
						<img src={LogoImg} />
					</div>
					<div className="nav">
						<ul>
							<li>
								<Link href="/">
									<a>Специалисту</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>Компании</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>Образовательной организации</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="auth">
						<ul>
							<li>
								<button className="signup">
									<a>Регистрация</a>
								</button>
							</li>
							<li>
								<button onClick={this.openPopupSignIn.bind(this)} className="signin">
									<a>Войти</a>
								</button>
							</li>
						</ul>
					</div>
				</div>
				<PopupSignIn isOpened={this.state.popupSignInIsOpened}/>
			</nav>
		)
	}
};

export default Nav;
