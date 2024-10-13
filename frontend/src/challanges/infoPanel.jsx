export default function InfoPanel({title, description, difficulty}) {
    return (<div className="infoPanel">
        <h3>{title}</h3>
        <h3>{difficulty}</h3>
        <p className="descArea">{description}</p>
        <a href="../"><button className="buttonBack">Back to Main Page</button></a>
    </div>)
}
