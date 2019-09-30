import React from 'react'

function App() {
  return (
    <div className='App'>
      <h1>Error Boundary</h1>
      {/* lets create an error! */}
      {null.map(val => val)}
    </div>
  )
}

export default App
