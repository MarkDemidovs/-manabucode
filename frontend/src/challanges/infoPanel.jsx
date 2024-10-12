export default function InfoPanel({title, description, difficulty}) {
    return (<div className="infoPanel">
        <h3>{title}</h3>
        <h3>{difficulty}</h3>
        <p className="descArea">{description}</p>
    </div>)
}
