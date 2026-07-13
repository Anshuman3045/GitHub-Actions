import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className = "parent">
      <h1>React + Vite + Tailwind</h1>
      <div className = "top">
        <button>Save it.<Bookmark /></button>
      </div>
    </div>
  )
}

export default App