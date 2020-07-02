import moment from 'moment'

export const getDateDayNumber = (value) => {
    let dateToReturn = new Date()
    dateToReturn.setTime(value*1000)
    return dateToReturn.getDate()
}

export const formatDate = (value) => {
    return moment().format('DD/MM/YYYY')
}

export const getDateDay = (value) => {
    let dateToReturn = new Date()
    dateToReturn.setTime(value*1000)
    let dayToFind = dateToReturn.getDay()

    switch(dayToFind){
        case 0:
            return "Sun"
        
        case 1:
            return "Mon"
            
        case 2:
            return "Tue"
            
        case 3:
            return "Wed"
            
        case 4:
            return "Thu"
            
        case 5:
            return "Fri"
            
        case 6:
            return "Sat"                         
    }
}