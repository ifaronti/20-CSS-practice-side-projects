export default function Profile(props){
    return(
        <div className="profile-card">
            <div className="profile">
                <img className="proImg" src= {`${process.env.PUBLIC_URL}/assets/images/image-jeremy.png`} alt="" />
                <div className="report-name">
                    <p className="report">Report for</p>
                    <h1 className="name">Jeremy Robson</h1>
                </div>
            </div>
            <div className="times">
                <div className="button-wrap">
                    <button onClick={props.daily} className={props.timeFrame === 'Daily' ? "time-frame currentFrame": "time-frame"}>Daily</button>
                    <button onClick={props.weekly} className={props.timeFrame === 'Weekly' ? "time-frame currentFrame": "time-frame"}>Weekly</button>
                    <button onClick={props.monthly} className={props.timeFrame === 'Monthly' ? "time-frame currentFrame": "time-frame"}>Monthly</button>
                </div>
            </div>
        </div>
    )
}