import React from "react";

import './index.scss';

class ProfileProvenSkills extends React.Component {
    
    constructor() {
        super();
        this.state={
            rating: 0,
            firstName: 'Иванов',
            lastName: 'Иван',
            skills: [
                {
                    id: 1,
                    title: 'Навык общения с клиентов',
                    description: 'Как вести себя с клиентом, чтобы не оттолкнуть назойливостью, но в то же время показать заинтересованность?',
                    points: 18,
                    allPoints: 20
                },
                {
                    id: 2,
                    title: 'Основы Python',
                    description: 'Как вести себя с клиентом, чтобы не оттолкнуть назойливостью, но в то же время показать заинтересованность?',
                    points: 18,
                    allPoints: 20
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
                                        <button>
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

export default ProfileProvenSkills;
