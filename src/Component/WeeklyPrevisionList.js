import React from 'react'
import {WeeklyPrevision} from './WeeklyPrevision'
import './WeeklyPrevisionList.css'

export const WeeklyPrevisionList = ({weeklyPrevisions}) => {
    console.log(weeklyPrevisions)
    return (
        <div className="weekly_wrapper">
            {weeklyPrevisions.map((element)=>
                <WeeklyPrevision key ={element.dt} prevision={element}/>
            )}
        </div>
    )
}