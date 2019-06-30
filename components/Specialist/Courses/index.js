import React from "react";

import './index.scss';
const courseList = [{
    id: 1,
    title: 'Algorithmic Toolbox',
    description: 'The class covers basic algorithmic techniques and ideas for computational problems arising frequently in practical applications: sorting and searching, divide and conquer, greedy algorithms, dynamic programming, and many others, You will learn how to sort and search data, how to break a large problem into pieces and solve them recursively; how to pack your knapsack using greedy algorithms, and how to search for similarities between genes using dynamic programming. You will practice solving computational problems, designing new algorithms, and implementing them as efficient software tools.',
    specialisation: 'IT'
}, {
    id: 2,
    title: 'Algorithmic Toolbox',
    description: 'The class covers basic algorithmic techniques and ideas for computational problems arising frequently in practical applications: sorting and searching, divide and conquer, greedy algorithms, dynamic programming, and many others, You will learn how to sort and search data, how to break a large problem into pieces and solve them recursively; how to pack your knapsack using greedy algorithms, and how to search for similarities between genes using dynamic programming. You will practice solving computational problems, designing new algorithms, and implementing them as efficient software tools.',
    specialisation: 'IT'
}, {
    id: 3,
    title: 'Algorithmic Toolbox',
    description: 'The class covers basic algorithmic techniques and ideas for computational problems arising frequently in practical applications: sorting and searching, divide and conquer, greedy algorithms, dynamic programming, and many others, You will learn how to sort and search data, how to break a large problem into pieces and solve them recursively; how to pack your knapsack using greedy algorithms, and how to search for similarities between genes using dynamic programming. You will practice solving computational problems, designing new algorithms, and implementing them as efficient software tools.',
    specialisation: 'IT'
}, {
    id: 4,
    title: 'Algorithmic Toolbox',
    description: 'The class covers basic algorithmic techniques and ideas for computational problems arising frequently in practical applications: sorting and searching, divide and conquer, greedy algorithms, dynamic programming, and many others, You will learn how to sort and search data, how to break a large problem into pieces and solve them recursively; how to pack your knapsack using greedy algorithms, and how to search for similarities between genes using dynamic programming. You will practice solving computational problems, designing new algorithms, and implementing them as efficient software tools.',
    specialisation: 'IT'
}];

const SpecialistCourses = () => (
    <div className="specialist-course">
        <div className="wrap">
            <h2>Подходящие курсы</h2>
            <div className="list">
                {
                    courseList.map(course => {
                        return (
                            <div key={course.id} className="item">
                                <div className="title">
                                    {course.title}
                                </div>
                                <div className="description">
                                    {course.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
);

export default SpecialistCourses;
