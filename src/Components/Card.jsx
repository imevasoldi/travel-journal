const Card = (props) => {
    return (
        <div className="card--">
            <img src={props.imageUrl} className="main--image"/>
            <div className="card--info">
                <div className="location--">
                    <img className="location--img" src="Fill 219.png"/>
                    <span className="location--title">{props.location.toUpperCase()}</span>
                    <a 
                        href={props.googleMapsUrl} 
                        target="_blank" 
                        className="location--link"
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1>{props.title}</h1>
                <span className="dates--">{props.startDate} - {props.endDate}</span>
                <p className="description--">{props.description}</p>
            </div>

        </div>
    )
}

export default Card

