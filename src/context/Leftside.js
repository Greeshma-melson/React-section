import { useState, useEffect } from 'react';
import { getTodo } from "./api";
import { prodSubject } from "./Srevices";
// import { from } from "rxjs";

function Leftside() {
    const [todo, settodo] = useState([]);
    const [righttodo, setDonetodo] = useState([]);
    useEffect(() => {
        getTodo().then(response => response.json())
            .then(response => {
                settodo(response);
            });
    }, []);
    useEffect(() => {
        var movingTodo1 = JSON.parse(JSON.stringify(todo));
        movingTodo1.slice(0, 7).map((todo) => {
            if (todo.completed) {
                var movingTodo = righttodo;
                movingTodo.push(todo);
                setDonetodo(movingTodo);
                prodSubject.next(movingTodo);
            }
        });
    }, [todo]);

    function sendProduct(valu, check) {
        var movingTodo = JSON.parse(JSON.stringify(righttodo));
        if (check === true) {
            valu.completed = true;
            movingTodo.push(valu);
            setDonetodo(movingTodo);
            prodSubject.next(movingTodo);
        } else {
            var todoIndex = righttodo.findIndex(doneT => doneT.id === valu.id);
            valu.completed = false;
            setDonetodo(movingTodo);
            if (todoIndex >= 0) {
                movingTodo.splice(todoIndex, 1);
                prodSubject.next(movingTodo);
            }
        }


    }

    return (
        <div>
            <table className='table '>
                <thead className='tabHed'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.slice(0, 7).map((td, i) =>
                            <tr key={"keyName" + i}>
                                <td>{td.id}</td>
                                <td>{td.title}</td>
                                <td><input type="checkbox"
                                    checked={td.completed}
                                    onChange={e => sendProduct(td, e.target.checked)}
                                /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Leftside;