import React from 'react'
import './WeeklyPrevision.css'
import {fromKelvinToCelsius} from '../utils/temperatureConverter'
import {getDateDayNumber, getDateDay} from '../utils/timeConverter'

export const WeeklyPrevision = ({prevision : { temp :{ day }, dt}}) => {
    return (
        <div className="weekly_prevision">
            <div className = "weekly_prevision_day">{getDateDayNumber(dt)}</div>
            <div className = "weekly_prevision_temp">{fromKelvinToCelsius(day)}</div>
            <div className = "weekly_prevision_date_number">{getDateDay(dt)}</div>
        </div>
    )
}