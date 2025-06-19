import React from 'react'
import Button from './component/Button'
import './App.css'

function App() {
  return (
    <div className='image-container'>
      <h1>Paper Trading without Any Risks</h1>
      <div className="desc">
        <p>Practice Building of your Trading Skills in stock, Crypto and Forex Without Any Risk</p>
        <p>Get Started Today with $10000 virtual Money</p>
      </div>
      <Button label="Start Your Trading" bgColor="#ff6900" textColor="#fff"/><br />
      <Button label="Sign Up/Login" bgColor="#2c2f33" textColor="#fff"/><br />
      <Button label="Contact Us" bgColor="#7289da" textColor="#fff"/>
    </div>
  )
}








export default App