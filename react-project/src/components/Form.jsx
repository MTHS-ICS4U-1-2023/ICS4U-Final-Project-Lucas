export default function Form {
    function handleSubmit(e) {
        e.preventDefault();
        setTodosList([...todos, todo])
        setTodo("")
    }
    return (
        <form on onSubmit={handleSubmit}>
            <input 
                onChange={(e) => setTodo(e.target.value)} 
                value={todo}
                type="text" 
            />
            <button type="submit">Add</button>
        </form>
    );
}