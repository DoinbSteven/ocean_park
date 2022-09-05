import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import ImageCommon from '../images/ImageCommon'
import '../rotation.css'
function RotationChart() {
  const images = [
    ImageCommon.pic1,
    ImageCommon.pic2,
    ImageCommon.pic3,
    ImageCommon.pic4,
  ]
  let [currentPointIndex, setCurrentPointIndex] = useState(0)
  let [timer, setTimer] = useState(0)

  const clickPoint = (currentPointIndex, timer, setTimer, e) => {
    clearTimeout(timer)
    setCurrentPointIndex(parseInt(e.target.value))

    let timers = setInterval(() => {
      document.querySelector('.right-btn').click()
    }, 1000)
    setTimer(timers)
  }

  useEffect(() => {
    changeImage(currentPointIndex)
    changPoint(currentPointIndex)
  })

  useEffect(() => {
    let timers = setInterval(() => {
      document.querySelector('.right-btn').click()
    }, 1000)
    setTimer(timers)
  }, [])

  const changeImage = (currentPointIndex) => {
    document.querySelector('.images').style = `transition:all 0.3s;
        transform:translateX(-${900 * currentPointIndex}px)`
  }

  const changPoint = (currentPointIndex) => {
    let poistList = document.querySelectorAll('.pointList li')
    for (let i = 0; i < poistList.length; i++) {
      poistList[i].className = ''
    }
    poistList[currentPointIndex].className = 'current'
  }

  const btnLeftClick = (currentPointIndex) => {
    let index =
      currentPointIndex == 0
        ? document.querySelectorAll('.images li').length - 1
        : currentPointIndex - 1
    setCurrentPointIndex(index)
  }

  const btnRightClick = (currentPointIndex) => {
    let index =
      currentPointIndex == document.querySelectorAll('.images li').length - 1
        ? 0
        : currentPointIndex + 1
    setCurrentPointIndex(index)
  }
  return (
    <div id="container">
      <ul className="images">
        <li>
          <img src={images[0]} />
        </li>
        <li>
          <img src={images[1]} />
        </li>
        <li>
          <img src={images[2]} />
        </li>
        <li>
          <img src={images[3]} />
        </li>
      </ul>
      <div
        className="btn left-btn"
        onClick={() => {
          btnLeftClick(currentPointIndex)
        }}>
        &lt;
      </div>
      <div
        className="btn right-btn"
        onClick={() => btnRightClick(currentPointIndex)}>
        &gt;
      </div>
      <ul
        className="pointList"
        onClick={(e) => {
          clickPoint(currentPointIndex, timer, setTimer, e)
        }}>
        <li className="current" value="0"></li>
        <li value="1"></li>
        <li value="2"></li>
        <li value="3"></li>
      </ul>
    </div>
  )
}
export default RotationChart
