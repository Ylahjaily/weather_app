import React from 'react'
import {fromKelvinToCelsius} from '../utils/temperatureConverter'
import {formatDate} from '../utils/timeConverter'
import './DailyPrevision.css'

export const DailyPrevision = ({dailyPrevision: {dt, temp:{day}, humidity,weather,speed}, cityInformations:{name, country} }) => {
   const description = weather[0].description
   
   const windSpeed = speed
    return (
        <div className="wrapper">
            <div className="location-name">{name} , {country} </div>
            <div className="sub-content">
                <div>
                    <div className="location-temperature">{fromKelvinToCelsius(day)}<span>°C</span></div>
                </div>
                <div className="location-details">
                    <div>{formatDate(dt)}</div>
                    <div>{description}</div>
                    <div>wind: {windSpeed} mph </div>
                    <div>humidity: {humidity}%</div>
                </div>
            </div>
        </div>
    )
}