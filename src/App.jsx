import { useState } from "react"
import "./styles.css"

export default function App () {

  const [color, setColor] = useState("")
  const [newItem, setNewItem] = useState("damn")

  const handleclick = () => {
    setColor('green')
  }
  return (
    <>

      <form action="">
        <div className="new-item-form">
          <label htmlFor="item">New item</label>
          <input value={newItem} type="text" id="item"/>
        </div>
        <button className="btn" onClick={() => setColor("darkblue")}>Add</button>
        
      </form>
      <h1>HomeComing</h1>
      <div>
        <ul className="list">
          <li>
            <label >
              <input type="checkbox" /> Christmas
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Easter
            </label>
          </li>
          <li>
            <label >
              <input type="checkbox" /> Christmas
            </label>
          </li>

        </ul>
      </div>
      <div>
        <button classname="btn"
          <label>
          </label>
          Trial
        </button>
      </div>

    </>
    
  )
}
