import { useState } from "react";
import TodoItem from "./Todoitem";
import Form from "./Form";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodosList] = useState([]);

    return (
        <div>
            <Form />

            {todos.map((item) => (
                <TodoItem  key={item} item={item} />
            ))}
        </div>
    );
}
