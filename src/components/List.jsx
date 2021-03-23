import React, { useState, useEffect } from 'react'
import './style/List.css'

const List = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        function setNewInfo(data) {
            setData(data[0])
        }
        if (props.list) {
            setNewInfo(props.list)
        } else { setData(null) }
    }, [props.list]);
    return (
        <div className="list-area">
            { data ?
                data.map((item, key) => {
                    return (
                        <div className="list-item" key={key}>
                            <div className="item-image">
                                <img src={
                                    `assets/icons/conditions/${item.condition}.png`} alt="weather" />
                            </div>
                            <div className="item-temp-area">
                                <h4>{`${item.max}º/`}</h4>
                                <h4>{`${item.min}º`}</h4>
                            </div>
                            <div className="item-data">
                                <h4>{item.weekday}</h4>
                                <h5>{item.date}</h5>
                            </div>
                        </div>
                    )
                })
                :
                <></>
            }
        </div>
    )
}
export default List