import React, { UseState } from "react";
import FromTodo from './FromTodo';
import TaskList from './TaskList';

//funcion anonima
const container = () => {
    

    return (
        <div>
            <FromTodo/>
            <TaskList/>
        </div>
    )
}

export default container