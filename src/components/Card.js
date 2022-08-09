import React from "react"



export default function Card(props) {
    console.log(props)

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {badgeText && <div className="card__badge">{badgeText}</div>}
        <img src={(`./images/${props.item.coverImg}`)} alt="" className="card__image"/>
        <div className="rating">
        <img src={"./images/star.png"} alt="" className="card__star"/>
            <span>{props.item.stats.rating}</span>
            <span className="grey">({props.item.stats.reviewCount}) • </span>
            <span className="grey">{props.item.location}</span>
        </div>
        <p className="card__Title">
            {props.item.title}
            </p>
        <p className="card__cost">
        <span className="bold">${props.item.price}</span> / Person
        </p>
        </div>
    )
}