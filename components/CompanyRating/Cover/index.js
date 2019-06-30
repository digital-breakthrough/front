import React from "react";
import CompanyRatingCoverImg from "../../../static/companyRatingCover.jpg";

import "./index.scss";

class CompanyRatingCover extends React.Component {

    render() {
        return (
            <div className="company-rating-cover">
                <img src={CompanyRatingCoverImg} />
                <div className="title">Рейтинг компаний</div>
            </div>
        );
    }
}

export default CompanyRatingCover;
