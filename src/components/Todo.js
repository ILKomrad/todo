import React from 'react';
import TaskContainer from '../containers/TaskContainer';
import FilterContainer from '../containers/FilterContainer';

export function Todo() {
    return (
        <div>
            <FilterContainer />
            <TaskContainer />
        </div>
    )
}