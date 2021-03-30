import React from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Search from './components/Search'
import Result from './components/Result'
import Footer from './components/Footer'
import './components/style/App.css'

console.log(process.env.REACT_APP_WEATHER_API_KEY)

const App = () => {
    const data = useSelector(state => state.info)


    return (
        <div className="body">
            <Header></Header>
            <section>
                <Search>
                </Search>
                {data ?
                    <Result newInfo={data}></Result>
                    :
                    <div className="result-area"></div>
                }
            </section>
            <Footer></Footer>
        </div>
    )
}

export default App