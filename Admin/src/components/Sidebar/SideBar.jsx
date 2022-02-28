import {DynamicFeed, Equalizer, Info, LineStyle, ListAlt, Mail, Message, PersonOutline, Storefront, Timeline, TrendingUp, Work } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <Link to="/" className='link'>
                                <LineStyle className="listicon"/>
                                Home
                            </Link>
                        </li>
                        <li className="sidebarlistitem">
                            <Timeline className="listicon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <TrendingUp className="listicon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <Link to="/users" className="link">
                                <PersonOutline className="listicon"/>
                                Users
                            </Link>
                        </li>
                        <li className="sidebarlistitem">
                            <Link to="/movies" className="link">
                                <Storefront className="listicon"/>
                                movies
                            </Link>
                        </li>
                        <li className="sidebarlistitem">
                            <Link to="/lists" className="link">
                                <ListAlt className="listicon"/>
                                Lists
                            </Link>
                        </li>
                        <li className="sidebarlistitem">
                            <Equalizer className="listicon"/>
                            Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">
                        Notifications
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <Mail className="listicon"/>
                            Mail
                        </li>
                        <li className="sidebarlistitem">
                            <DynamicFeed className="listicon"/>
                            Feedback
                        </li>
                        <li className="sidebarlistitem">
                            <Message className="listicon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">
                        Staff
                    </h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <Work className="listicon"/>
                            Manage
                        </li>
                        <li className="sidebarlistitem">
                            <Timeline className="listicon"/>
                            Analytics
                        </li>
                        <li className="sidebarlistitem">
                            <Info className="listicon"/>
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
