import React from "react";
import Link from "next/link";

import './index.scss';

const ProfileMenu = () => (
    <div className="items">
        <div className="item">
            <Link href="#">
                <a>Основная информация</a>
            </Link>
        </div>
        <div className="item">
            <Link href="#">
                <a>Опыт работы</a>
            </Link>
        </div>
        <div className="item">
            <Link href="#">
                <a>Подтвержденные навыки</a>
            </Link>
        </div>
        <div className="item">
            <Link href="#">
                <a>Рекомендации для развития</a>
            </Link>
        </div>
	</div>
);

export default ProfileMenu;
