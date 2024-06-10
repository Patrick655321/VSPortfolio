import { useState } from 'react'

import topArrows from '../img/topArrows.jpg'
import "../styling/TopBar.css"


export default function TopBar() {
  const [textBox, setTextBox] = useState("portfolio")
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Hello World")
    }
  return (
    <div id="topbar">
        <img src={topArrows} alt="arrows" />
        <form onSubmit={handleSubmit}>
                <input type="text" value={textBox} />
        </form>
      
    </div>
  )
}