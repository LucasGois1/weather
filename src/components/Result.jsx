import React from 'react'
import { useSelector } from 'react-redux'
import List from './List'
import './style/Result.css'


const Result = () => {
    const city = useSelector(state => state.info.city)
    const temp = useSelector(state => state.info.temp)
    const wind = useSelector(state => state.info.wind)
    const condition = useSelector(state => state.info.slug)
    const description = useSelector(state => state.info.desc)
    const loading = useSelector(state => state.info.loading)

    if (loading) {
        return (
            <div className="result-area">
                <img src="assets/icons/conditions/loading.svg" alt="" />
            </div>)
    } else {
        return (
            city ?
                <div className="result-area">
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
                                    <h3>
                                        {`${temp}ºC`}
                                    </h3>
                                </div>
                                <div className="info-wind">
                                    <img src={`assets/icons/png/98.png`} width="30" height="30" alt="wind" />
                                    <h3>
                                        {wind}
                                    </h3>
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
                            <List></List>
                        </div>
                    </div>
                </div> : <></>
        )
    }
}

export default Result