import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import getWeatherInfo from '../hgWeather'

import './style/Search.css'

const Search = () => {
    //Variáveis de estado
    const [userChoice, setUserChoice] = useState('')

    const dispatch = useDispatch()
    //Controle do input, adiciona letra por letra em userChoice
    const inputHandle = (e) => {
        setUserChoice(e.target.value)
    }
    // funcao que busca os dados na api e armazena em info
    const getInfo = async () => {
        dispatch({
            type: 'SET_LOADING',
            payload: {
                loading: true
            }
        })
        const data = await getWeatherInfo(userChoice)
        console.log(data.results)
        if (data) {
            const newInfo = {
                city: data.results.city,
                temp: data.results.temp,
                slug: data.results.condition_code,
                desc: data.results.description,
                days: data.results.forecast,
                wind: data.results.wind_speedy
            }
            dispatch({
                type: 'SET_INFO',
                payload: {
                    city: newInfo.city,
                    temp: newInfo.temp,
                    slug: newInfo.slug,
                    desc: newInfo.desc,
                    days: newInfo.days,
                    wind: newInfo.wind
                }
            })
            dispatch({
                type: 'SET_LOADING',
                payload: {
                    loading: false
                }
            })
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