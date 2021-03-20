import React, { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Footer from './components/Footer'
import './components/App.css'

const App = () => {

    return (
        <div className="body">
            <Header></Header>
            <Search />
            <Footer></Footer>
        </div>
    )
}

export default App