import React, { useState, useEffect } from 'react'
import HGWeather from '../hgWeather'
import './style/Search.css'

const Search = (props) => {
    //Variáveis de estado
    const [userChoice, setUserChoice] = useState('')
    const [newCity, setNewCity] = useState()
    useEffect(() => {
        props.loadData(newCity)
    }, [newCity]);
    //Controle do input, adiciona letra por letra em userChoice
    const inputHandle = (e) => {
        setUserChoice(e.target.value)
    }
    // funcao que busca os dados na api e armazena em info
    const getInfo = async () => {
        const data = await HGWeather.getWeatherInfo(userChoice)
        if (data) {
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
            setNewCity(newInfo)
        } else {
            console.log("Nenhum dado encontrado")
        }
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
        </section>
    )
}

export default Search