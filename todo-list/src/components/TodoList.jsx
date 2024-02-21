import { TodoItem } from "./TodoItem";

export function TodoList({ todos , toggleTodo, deleteTodo }) {
  return (
  <ul className="list">
        {todos.length === 0 && <div className="empty-list">No Items</div>}
        {todos.map(todo => {
          return <TodoItem {...todo} 
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo} />
        })}
      </ul>
  );
}

