import React, { useState } from 'react'
import HGWeather from '../hgWeather'
import List from './List'
import './Search.css'




const Search = (props) => {
    //Variáveis de estado
    const [city, setCity] = useState('')
    const [temp, setTemp] = useState('')
    const [wind, setWind] = useState('')
    const [condition, setCondition] = useState('')
    const [description, setDescription] = useState('')
    const [days, setDays] = useState()
    const [userChoice, setUserChoice] = useState('')
    //Controle do input, adiciona letra por letra em userChoice
    const inputHandle = (e) => {
        setUserChoice(e.target.value)
    }
    // funcao que busca os dados na api e armazena em info
    const getInfo = async () => {
        const data = await HGWeather.getWeatherInfo(userChoice)
        let newInfo = data.map((item) => {
            return {
                city: item.items.results.city,
                temp: item.items.results.temp,
                slug: item.items.results.condition_code,
                desc: item.items.results.description,
                days: item.items.results.forecast,
                wind: item.items.results.wind_speedy
            }
        })
        setCity(newInfo.map((item) => item.city))
        setTemp(newInfo.map((item) => item.temp))
        setCondition(newInfo.map((item) => item.slug))
        setDescription(newInfo.map((item) => item.desc))
        setDays(newInfo.map((item) => item.days))
        setWind(newInfo.map((item) => item.wind))
    }
    //
    return (
        <section>
            <div className="search-area">
                <label>
                    <h1>
                        Qual cidade<br /> você está procurando?
                    </h1>
                    <input type="text" name="search" placeholder="Ex: São Paulo" value={userChoice} onChange={inputHandle} />
                    <button onClick={getInfo}>
                        Buscar
                    </button>
                </label>

            </div>
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
                    : ''}
            </div>
        </section>
    )
}

export default Search