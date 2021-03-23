import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Result from './components/Result'
import Footer from './components/Footer'
import './components/style/App.css'

const App = () => {
    const [data, setData] = useState()
    function selectedCity(city) {
        setData(city)
    }
    return (
        <div className="body">
            <Header></Header>
            <section>
                <Search loadData={selectedCity} />
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