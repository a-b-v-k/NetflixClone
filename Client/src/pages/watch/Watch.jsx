import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Video from './movie.mkv'
import "./watch.scss"

const Watch = () => {
    const location = useLocation();
    const details = location.state;
    console.log(details)
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackOutlined className="backicon"/>
                    Home
                </div>
            </Link>
            <video 
                src={details.video}
                className="video"
                autoPlay
                progress="loading"
                controls
            />
        </div>
    );
}

export default Watch
