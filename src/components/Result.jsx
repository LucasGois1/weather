import React, { useState, useEffect } from 'react'
import List from './List'
import './style/Result.css'


const Result = (props) => {
    const [city, setCity] = useState(null)
    const [temp, setTemp] = useState(null)
    const [wind, setWind] = useState(null)
    const [condition, setCondition] = useState(null)
    const [description, setDescription] = useState(null)
    const [days, setDays] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        function setNewInfo(data) {
            setData(data)
        }
        if (props.newInfo) {
            setNewInfo(props.newInfo)
        }
    }, [props.newInfo]);
    useEffect(() => {
        function updateData(data) {
            setCity(data.map((item) => item.city))
            setTemp(data.map((item) => item.temp))
            setCondition(data.map((item) => item.slug))
            setDescription(data.map((item) => item.desc))
            setDays(data.map((item) => item.days))
            setWind(data.map((item) => item.wind))
        }
        if (data) {
            updateData(data)
        }

    }, [data]);
    return (
        <div className="result-area">
            {city ?
                <div className="result-card">

                    <div className="card-header">
                        <div className="card-title-area">

                            <div className="card-title">
                                <h1>
                                    {city}
                                </h1>
                            </div>
                            <div className="info-temp">
                                <img src={`assets/icons/png/99.png`} width="30" height="30" alt="temp" />
                                <h2>
                                    {`${temp}ºC`}
                                </h2>
                            </div>
                            <div className="info-wind">
                                <img src={`assets/icons/png/98.png`} width="30" height="30" alt="wind" />
                                <h2>
                                    {wind}
                                </h2>
                            </div>
                        </div>

                        <div className="card-image">
                            <img src={`assets/icons/png/${condition}.png`} alt="weather" />
                            <h2>
                                {description}
                            </h2>
                        </div>
                    </div>
                    <div className="card-body">
                        {days ? <List list={days}></List> : <></>}
                    </div>
                </div>
                : ''
            }
        </div>
    )
}

export default Result