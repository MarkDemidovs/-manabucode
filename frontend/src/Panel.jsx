export default function Panel({title, difficulty, description, link}) {
    return(<a href={link}>
        <div className="panelDiv">
            <div className="row1D">
                <h6 className="titlePanel">{title}</h6>
                <h6 className="difPanel">{difficulty}</h6>
            </div>

            <p className="row2D">{description}</p>
        </div>
        </a>
    )
}