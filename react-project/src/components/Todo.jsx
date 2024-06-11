import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodosList] = useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        setTodosList([...todos, todo])
        setTodo("")
    }
    return (
        <div>
            <form on onSubmit={handleSubmit}>
                <input 
                    onChange={(e) => setTodo(e.target.value)} 
                    value={todo}
                    type="text" 
                />
                <button type="submit">Add</button>
            </form>
            {console.log(todos)}
        </div>
    );
}
