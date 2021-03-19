import React, { useState } from 'react'
import getWeatherInfo from './hgWeather'
import Title from './Title'

const App = () => {
    //Variáveis de estado
    const [info, setInfo] = useState()
    const [userChoice, setUserChoice] = useState('')

    const inputHandle = (e) => {
        setUserChoice(e.target.value)
    }

    const getInfo = async () => {
        let data = await getWeatherInfo(userChoice)
        data = JSON.parse(data)
        setInfo(data)
        console.log(info.results)
    }
    return <div>
        <h1>
            Olá, Selecione uma cidade
        </h1>
        <label>
            <input type="text" name="search" value={userChoice} onChange={inputHandle} />
        </label>
        <button onClick={getInfo}>Buscar</button>
        {console.log(JSON.stringify(info))}
    </div>
}

export default App