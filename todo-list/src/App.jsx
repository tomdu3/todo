import { useState } from 'react'
import { NewTodoForm } from './components/newTodoForm'
import './styles.css'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {

    // anytime we want to use the current value, we need to pass it as a function
    setTodos((currentTodos) => {
      return [...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        },
      ]
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // cannot mutate state directly like: todo.completed = !todo.completed
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 clasName="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && <div className="empty-list">No Items</div>}
        {todos.map(todo => {
          return (
            // key is required when returning multiple elements
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
                <span>{todo.title}</span>
              </label>
              <button onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
