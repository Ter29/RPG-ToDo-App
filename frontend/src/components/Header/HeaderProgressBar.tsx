export function HeaderProgressBar(){
    return ( <div className="progress-section">
        <div>
            <span className="level">1</span>
            LVL
        </div>
        <div className="progress-bar">
            <div className="progress-bar-txt">
                <span className="">
                    0 XP
                </span>
                <span className="txt-xp-to-nxt-lvl">
                    100 XP
                </span>
                <div className="bar"></div>
            </div>
        </div>
    </div>);
}