import React from "react";

import './index.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="wrapper">
                    <div className="columns">
                        <div className="column">
                            <div className="title">
                                Мой опыт
                            </div>
                            <div className="link">
                                <a>О сервисе</a>
                            </div>
                            <div className="link">
                                <a>Услуги и цены</a>
                            </div>
                            <div className="link">
                                <a>Новости</a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                Помощь
                            </div>
                            <div className="link">
                                <a>Для специалиста</a>
                            </div>
                            <div className="link">
                                <a>Для компании</a>
                            </div>
                            <div className="link">
                                <a>Для образовательной организации</a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                Документы
                            </div>
                            <div className="link">
                                <a>Соглашение с пользователем</a>
                            </div>
                            <div className="link">
                                <a>Правила оказаниня услуг</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;
