import React from "react";

import './index.scss';

class ProfileBasicInformation extends React.Component {
    
    constructor() {
        super();
        this.state={
            rating: 666,
            firstName: 'Иванов',
            lastName: 'Иван'
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <div id="rating" className="rating">
                        {this.state.rating} баллов
                    </div>
                    <div className="form-item">
                        <input type="text" value={this.state.firstName} />
                    </div>
                    <div className="form-item">
                        <input type="text" value={this.state.lastName} />
                    </div>
                    <div className="form-item">
                        <button>Сохранить</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProfileBasicInformation;
