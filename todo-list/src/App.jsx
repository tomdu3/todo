import { useState } from 'react'
import './styles.css'

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    // anytime we want to use the current value, we need to pass it as a function
    setTodos((currentTodos) => {
      return [...currentTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false
        },
      ]
    });
    setNewItem('');
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
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
