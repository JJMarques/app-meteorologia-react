import './LocalDataDisplay.css'
import { getWeekDay, getWindData } from '../utils/utils'

const LocalDataDisplay = ({localName, local}) => {

    let data
    if (local.length > 0) {
        data = local.map((d, k) => {
            
            const weekDay = getWeekDay(new Date(d.forecastDate))
            const windData = getWindData(d.classWindSpeed)

            return (
                <div className="DayInfoPanel" key={k}>
                    <span>{weekDay}</span>
                    <br/><br/><br/><br/>
                    <h5>Temperatura Máx. <br/> <span>{parseInt(d.tMax)}º</span></h5>
                    <br/>
                    <h5>Temperatura Min. <br/> <span>{parseInt(d.tMin)}º</span></h5>
                    <br/>
                    <h5>Precipitação <br/> <span>{parseInt(d.precipitaProb)}%</span> </h5>
                    <br/>
                    <h5>{windData.length > 0 && windData}</h5>
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
