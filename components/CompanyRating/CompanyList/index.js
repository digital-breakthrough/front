import React from "react";
import Link from "next/link";
import DataTable from 'react-data-table-component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./index.scss";

const data = [
    { 
        id: 1, 
        medal: <FontAwesomeIcon color="gold" icon={['fas', 'medal']} />,
        title: 'РОСАТОМ', 
        capital: '1000' 
    },
    { 
        id: 2, 
        medal: <FontAwesomeIcon color="silver" icon={['fas', 'medal']} />,
        title: 'Мегафон', 
        capital: '982' 
    },
    { 
        id: 3, 
        medal: <FontAwesomeIcon color="#cd7f32" icon={['fas', 'medal']} />,
        title: 'Mail.ru Group', 
        capital: '612' 
    },
    { 
        id: 4, 
        title: 'Росмолодежь', 
        capital: '121' 
    }, 
    { 
        id: 5, 
        title: 'РОАК', 
        capital: '92' 
    },
    { 
        id: 6, 
        title: 'РОЦИТ', 
        capital: '81' 
    },
    { 
        id: 7, 
        title: 'UMA.TECH', 
        capital: '79' 
    },
    { 
        id: 8, 
        title: 'МТС', 
        capital: '60' 
    },
    { 
        id: 9, 
        title: 'Libertex Group', 
        capital: '52' 
    },
    { 
        id: 10, 
        title: 'Finch', 
        capital: '41' 
    },
    { 
        id: 11, 
        title: 'Conan the Barbarian', 
        capital: '29' 
    },
    { 
        id: 12, 
        title: 'Conan the Barbarian', 
        capital: '10' 
    }];

const columns = [
    {
        name: '',
        selector: 'medal',
        width: '100px'
    },
    {
        name: 'Компания',
        selector: 'title'
    },
    {
        name: 'Вкладываемый каписал на 1 сотрудника',
        selector: 'capital',
        right: true
    },
];

class CompanyRatingCover extends React.Component {

    render() {
        return (
            <div className="company-list">
                <div className="wrapper">
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                </div>
            </div>
        );  
    }
}

export default CompanyRatingCover;

// вклаываемый капитал на 1 сотрудника