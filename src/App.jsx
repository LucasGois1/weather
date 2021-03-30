import React from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Search from './components/Search'
import Result from './components/Result'
import Footer from './components/Footer'
import './components/style/App.css'

const App = () => {
    const data = useSelector(state => state.info)
    return (
        <div className="body">
            <Header></Header>
            <section>
                <Search>
                </Search>
                {data !== undefined ? <Result newInfo={data}></Result> : <></>}
            </section>
            <Footer></Footer>
        </div>
    )
}

export default App