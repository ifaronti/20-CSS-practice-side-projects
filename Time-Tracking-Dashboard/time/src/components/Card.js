export default function Card(props){
    let title = props.title
    let timeFrame = props.timeFrame    
    return(
        <div className="card--box">
            <div className={`${title} card--top`}>
                <img className="title-logo" src={`${process.env.PUBLIC_URL}/assets/images/${props.title}.svg`} alt="" />
            </div>
            <div className="card--bottom">
                <div className="card-content">
                    <div className="work-options">
                        <p className="title">{title}</p>
                        <img className="options" src={`${process.env.PUBLIC_URL}/assets/images/icon-ellipsis.svg`} alt="" />
                    </div>
                    <div className="current-previous">
                        <h2 className="time-numbers">{props.current}hrs</h2>
                        <p className="prevTime">{timeFrame === 'Daily' ? 'Yesterday':(timeFrame === 'Weekly'? 'Last Week':'Last Month')} - {props.previous}hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}