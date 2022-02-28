import React, { useContext, useState } from 'react';
import "./navbar.scss";
import { ArrowDropDownSharp, Notifications, Search } from "@material-ui/icons"; 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import {logoutapi} from "../../authContext/apiCalls";

const Navbar = () => {
    const [isScrolled, setisScrolled] = useState(false);

    window.onscroll = () => {
        setisScrolled(window.pageYOffset <= 100 ? false : true);
        return () => window.onscroll = null;
    };

    const {user, dispatch} = useContext(AuthContext);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}> 
            <div className="container">
                <div className="left">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo'/>
                    <Link to="/" className='link'>
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span>Movies</span>
                    </Link>
                        <span>New and Popular</span>
                        <span>My list</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>{user.username}</span>
                    <Notifications className='icon'/>
                    <img src='https://4ec5a3ca-a-258b6f3f-s-sites.googlegroups.com/a/goodmen.info/workcanada/assistants/female_generic_profile.png?attachauth=ANoY7cociavkvSx66pJXoMOdVdsFU8jV7zfdgEQmyTgFiQE8Tzju9MDb8KjSNluS9o6H_vmf8oVoxlXJrn7Us_LtcUGr1cn2t3MaA8S2WmGugaskL5esKK2Ga0aGUoZnoDk0ND5BuZaaqx3OcXDN_grUjaHb8hSoqCsVQYvtTeeneoi1eC1WJHdbr5_fupBQGzqY7xOdCK9mhBUfdo9TZZKDhlPmeTR1Z8fXudPldZhphvEWMmiT0Vo%3D&attredirects=0' alt='profilepic' />
                    <div className="profile">
                        <ArrowDropDownSharp className='icon'/>
                        <div className="options">
                            <button>Settings</button>
                            <button onClick={()=>{logoutapi(dispatch)}}>
                                    Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar