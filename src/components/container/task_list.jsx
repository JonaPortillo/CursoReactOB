import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL);

    const changeState = (id) =>{
        console.log('TODO:Cambiar el estado de una tarea')
    }

    return (
        <div>
            <h1>
                Your taks:
            </h1>
            {/* TODO: Aplicar for o map para renderizar una lista */}
            <TaskComponent
            task={defaultTask}>
            </TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
