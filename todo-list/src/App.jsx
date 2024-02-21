import { useState } from 'react'
import './styles.css'

export default function App() {
  const [newItem, setNewItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newItem)
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
        <li>
          <label>
            <input type="checkbox" />
            <span>Item 1</span>
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>Item 2</span>
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}
