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
        {todos.map(todo => {
          return (
            // key is required when returning multiple elements
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                <span>{todo.title}</span>
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
