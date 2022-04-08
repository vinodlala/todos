import React from 'react';

import useSound from "use-sound";
import hooray from './../assets/hooray.wav'; // Your sound file path here
import oops from './../assets/oops.ogg'; // Your sound file path here
import paper from './../assets/paper.mp3'; // Your sound file path here


const Todo = ({ text, todo, todos, setTodos }) => {
    const [playHooray] = useSound(hooray);
    const [playOops] = useSound(oops);
    const [playPaper] = useSound(paper);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        playPaper();
    };
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    if (!item.completed) {
                        playHooray();
                    } else {
                        playOops();
                    }
                    return {
                        ...item, completed: !item.completed
                    };
                }
                return item;
            })
        );
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler}className='complete-btn'><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;
