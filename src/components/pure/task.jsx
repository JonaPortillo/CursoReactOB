import {Task} from '../../models/task.class'
import React from 'react';
import PropTypes from 'prop-types';


const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Description: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;