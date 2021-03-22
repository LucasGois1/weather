import React from 'react'
import './List.css'

const List = (props) => {
    const data = props.list
    return (
        <div className="list-area">
            {data[0]
                .map((item, key) => {
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
            }
        </div>
    )
}
export default List