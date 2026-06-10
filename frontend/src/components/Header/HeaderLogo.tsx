import logoIcon from '../../assets/Header/logo.png';


export function HeaderLogo(){
    return (
        <div className="logo-section">
            <div className="logo"><img src={logoIcon} alt="Logo" /></div>
            <div>
                <span className="ascend">ASCEND</span>
                <span className="tagline">BEYOND YOUR LIMITS</span>
            </div>
        </div>
    );
}