import React, { useEffect, useState } from 'react'
import "./widgetsm.css";
import { Visibility } from "@material-ui/icons";
import axios from 'axios';

const WidgetSm = () => {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try{
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setNewUsers(res.data);
            }
            catch(err) {
                console.log(err);
            }
        }
        getNewUsers();
    }, [])

    return (
        <div className="widgetsm">
            <span className="widgetsmtitle">
                New Join Members
            </span>
            <ul className="widgetsmlist">
                {newUsers.map((user, index) => (
                    <li className="widgetsmlistitem" key={index}>
                    <div className="widgetsmuser">
                    <img className='widgetsmimg' 
                    src={user.profilePic || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} 
                    alt="profilepic" />
                        <span className="widgetsmusername">
                            {user.username}
                        </span>
                    </div>
                    <button className="widgetsmbutton">
                        <Visibility className="widgetsmicon" style={{fontSize: 14}}/>
                        Display
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm
