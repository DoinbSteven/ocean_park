import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Countdown from 'react-countdown'

// const Completionist = () => <span>You are good to go!</span>
// const renderer = ({ hours, minutes, seconds, completed }) => {
//    if (completed) {
//       // Render a completed state
//       return <Completionist />
//    } else {
//       // Render a countdown
//       return <span>{hours}:{minutes}:{seconds}</span>
//    }
// }
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <App />
      {/* <Countdown
         date={Date.now() + 10000}
         intervalDelay={0}
         precision={3}
         renderer={props => <div>{props.total}</div>}
      />, */}
   </BrowserRouter>


)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

