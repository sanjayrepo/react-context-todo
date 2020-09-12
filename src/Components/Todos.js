import React, { useContext } from "react"
import { listGroup, ListGroupItem } from "reactstrap"
import { FaCheckDouble } from "react-icons/fa"
import { TodoContext } from "../context/TodoContext"
import { REMOVE_TODO } from "../context/action.types"

const Todos = () => {
    const { todos, dispatch } = useContext(TodoContext);
    return (
        <listGroup className="mt-5 mt-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right" onClick={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        })
                    }}>
                        <FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </listGroup>
    )
}

export default Todos;