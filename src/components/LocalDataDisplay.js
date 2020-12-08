import './LocalDataDisplay.css'
import { getWeekDay } from '../utils/utils'

const LocalDataDisplay = ({localName, local}) => {

    let data
    if (local.length > 0) {
        data = local.map((d, k) => {
            const weekDay = getWeekDay(new Date(d.forecastDate))
            return (
                <div className="DayInfoPanel" key={k}>
                    <span>{weekDay}</span>
                    <br/><br/><br/><br/>
                    <h5>Tempratura Máxima <br/> <span>{d.tMax}</span></h5>
                    <br/>
                    <h5>Tempratura Minima <br/> <span>{d.tMin}</span></h5>
                </div>
            )
        })
    }
    
    return (
        <div className="DataDisplayPanel">
            <h1>{localName}</h1>
            <div className="InfoPanels">
                {data}
            </div>
        </div>
    )
}

export default LocalDataDisplay
