import '../styles/TodoList.css';

// Add a TodoList component that displays a list of todo items
export function TodoList(props) {
    return (<>
        <ul>
            {props.todos.map(todo => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.completed} />
                    {todo.text}
                </li>
            ))}
        </ul>
        <button>Remove Completed</button>
    </>)
}