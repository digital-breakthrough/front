import React from "react";

import './index.scss';

class ProfileRecomendSkills extends React.Component {

    constructor() {
        super();
        this.state = {
            skills: [
                {
                    id: 1,
                    title: 'Написание программного кода',
                    description: 'Написание программного кода с использованием языков программирования',
                    link: "http://myskills.ssuedu.ru/ex/enrol/index.php?id=3"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="skills">
                    {
                        this.state.skills.map(skill => {
                            return (
                                <div className="skill" key={skill.id}>
                                    <div className="title">
                                        {skill.title}
                                    </div>
                                    <div className="description">
                                        {skill.description}
                                    </div>
                                    <div className="course">
                                        <button onClick={() => {
                                            window.open(skill.link);
                                        }}>
                                            Перейти на страницу курса
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default ProfileRecomendSkills;
