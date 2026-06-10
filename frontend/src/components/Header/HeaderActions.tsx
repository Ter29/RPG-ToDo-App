import notificationIcon from '../../assets/Header/notification.png';
import settingIcon from '../../assets/Header/setting.png';
import userIcon from '../../assets/Header/user.png';

export function HeaderActions(){
    return (
        <div className="header-actions">
            <button className="hd-act-button" type='button'>
                <img src={notificationIcon} alt="Notification" />
            </button>
            <button className="hd-act-button" type='button'>
                <img src={settingIcon} alt="Settings" />
            </button>
            <button className="hd-act-button" type='button'>
                <img src={userIcon} alt="User profile" />
            </button>
        </div>
    );
}