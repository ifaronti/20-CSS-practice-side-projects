import React, {useEffect, useState} from "react"
import Card from "./components/Card"
import Profile from "./components/ProfileCard"

export default function App() {
  let [activityData, setActivityData] = useState([])
  let [timeFrame, setTimeFrame] = useState('Weekly')

  useEffect(() => {
    fetch('data.json')
        .then(response => response.json())
        .then((json) => setActivityData(json))
}, [])

function daily(){
  setTimeFrame('Daily')
}
function weekly(){
  setTimeFrame('Weekly')
}
function monthly(){
  setTimeFrame('Monthly')
}

let dataFrame = activityData.map(time => {
  return timeFrame === 'Daily' ? 
    <Card
      title = {time.title}
      timeFrame = {timeFrame}
      current = {time.timeframes.daily.current}
      previous = {time.timeframes.daily.previous}
    />
    : 
    timeFrame === 'Weekly' ? 
    <Card
      title = {time.title}
      timeFrame = {timeFrame}
      current = {time.timeframes.weekly.current}
      previous = {time.timeframes.weekly.previous}
    
    />
    :
    <Card
      title = {time.title}
      timeFrame = {timeFrame}
      current = {time.timeframes.monthly.current}
      previous = {time.timeframes.monthly.previous}
    />
})

  return(
    <div className="app">
      <div className="content-wrap">
        <Profile
          daily ={daily}
          weekly = {weekly}
          monthly = {monthly}
          timeFrame = {timeFrame}
        />
        <div className="frame-wrap">
          {dataFrame}
        </div>
      </div>
    </div>
  )
}