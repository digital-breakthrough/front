import React from "react";
import Popup from "reactjs-popup";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from "next/link";

import "./index.scss";

class SpecialistPopupSignIn extends React.Component {

    constructor() {
        super();
    
        this.state = {
            isOpened: false
        };

    }

    componentDidMount() {
        document.getElementById("bg").addEventListener("click", () => {
            this.setState({isOpened: false});
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.isOpened !== nextProps.isOpened) {
            this.setState({ isOpened: nextProps.isOpened});
        }
      }

    render() {

        return (
            <div>
                <div className={"popup-signup " + (this.state.isOpened ? '--opened' : '--closed')}>
                    <div className="head">
                        Вход
                    </div>
                    <div className="main">
                        <input placeholder="Email" type="text" /> <br />
                        <input placeholder="Password" type="password" /> <br />
                        <div className="submit">
                            <button>Войти</button>
                        </div>
                    </div>
                    <div className="social-network">
                        <label>Войти с помощью соц. сети</label> <br />
                        <div className="items">
                            <div className="item facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </div>
                            <div className="item google">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                            </div>
                            <div className="item vk">
                                <FontAwesomeIcon icon={['fab', 'vk']} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bg" className={"bg " + (this.state.isOpened ? '--opened' : '--closed')}></div>
            </div>
        );
    }
}

export default SpecialistPopupSignIn;
