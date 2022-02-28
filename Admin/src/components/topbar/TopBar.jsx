import React, { useContext } from 'react'
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import "./topbar.css";
import { AuthContext } from '../../context/authContext/AuthContext';
import { logoutapi } from '../../context/authContext/apiCalls';

const TopBar = () => {

    const { dispatch } = useContext(AuthContext);

    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="left">
                    <span className="logo">
                        Admin
                    </span>
                </div>
                <div className="right">
                    <button onClick={() => logoutapi(dispatch)} className='logoutbutton'>Logout</button>
                    <div className="topbariconcontainer">
                        <NotificationsNone />
                        <span className="iconbadge">2</span>
                    </div>
                    <div className="topbariconcontainer">
                        <Language />
                        <span className="iconbadge">3</span>
                    </div>
                    <div className="topbariconcontainer">
                        <Settings />
                        <span className="iconbadge">2</span>
                    </div>
                    <img src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg" alt="profilepic" className="topimg" />
                </div>
            </div>
        </div>
    )
} 

export default TopBar
