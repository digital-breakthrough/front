import React from "react";
import Link from "next/link";
import LogoImg from "../../static/logo.png";

import './index.scss';

const Nav = () => (
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
						<Link href="/">
							<a>Компании</a>
						</Link>
					</li>
					<li>
						<Link href="/">
							<a>Образовательной организации</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="auth">
				<ul>
					<li>
						<Link href="/signup">
							<a className="signup">Регистрация</a>
						</Link>
					</li>
					<li>
						<Link href="/signin">
							<a className="signin">Войти</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Nav;
