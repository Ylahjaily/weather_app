import React, {Component} from 'react'
import {DailyPrevision} from './Component/DailyPrevision'
import {WeeklyPrevisionList} from  './Component/WeeklyPrevisionList'
import {SearchBar} from './Component/SearchBar'
import './App.css'

class App extends Component {
  state= {
    
    previsions : [],
    isLoading : false,
    isLoaded : false,
    errors : null
    }

     handleSubmit = e => {
      e.preventDefault()
      this.setState({
        isLoading : true
      })

      const data = e.target.city.value
      console.log(data)
      fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${data}&cnt=7&appid=c0c4a4b4047b97ebc5948ac9c48c0559`)
      .then((response)=> {
        if(response.status !== 200)
          {
            this.setState({
              errors: "City not found",
              isLoaded : false,
              isLoading : false
            })
            console.log(this.state)
          }
          return response
      })
      .then((response)=> response.json())
      .then((previsions)=> {
        this.setState({
          previsions,
          isLoaded : true,
          isLoading : false
        })
      })
    }
    
  render(){
    
    const {previsions, isLoaded , isLoading, errors} = this.state
    if(isLoaded === true && !errors)
    {
      const cityInformations = previsions.city
      const dailyPrevision = previsions.list[0]
      const weeklyPrevisions = previsions.list.slice(1,6)

    return (
      <div className="App">
         <SearchBar
            handleSubmit={this.handleSubmit}
            isLoading={isLoading}
            errors={errors}
        />
        <DailyPrevision
          dailyPrevision={dailyPrevision}
          cityInformations = {cityInformations}
         />
        <WeeklyPrevisionList weeklyPrevisions = {weeklyPrevisions}/>
      </div>
    );
  }else{
    return(
      <div className="App">
         <SearchBar
            handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
}

export default App;
