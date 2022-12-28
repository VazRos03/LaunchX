import React, { useState } from "react";

const FromTodo = props => {
    const [description, setDescription] = useState("");
    const{addItem} = props;

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(description);

        addItem({
            done: false,
            id: (new Date()).toString,
            description
        });

        setDescription("");
    }

    

    return(
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input 
                    type="text" 
                    className="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}//esto es para detectar que el usuario esta escribiendo
                    />
                    <button
                        className="button-blue"
                        disabled={description ? "" : "disable"}//validando si esta vacio o no con un operador ternario
                    > 
                     agregando tarea
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FromTodo