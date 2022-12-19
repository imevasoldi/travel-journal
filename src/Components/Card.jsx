const Card = () => {
    return (
        <div className="card--">
            <img src="mountain-bike.png" className="main--image"/>
            <div className="card--info">
                <div className="location--">
                    <img className="location--img" src="star.png"/>
                    <span className="location--title">JAPAN</span>
                    <a href="https://google.com" className="location--link">View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <span className="dates--">Start Date - End Date</span>
                <p className="description--">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>

        </div>
    )
}

export default Card

