import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./features.scss";

const Featured = ({type, setGenre}) => {

    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random${type ? "?type=" + type : ""}`, {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                // console.log(res.data[0]);
                setMovie(res.data[0]);
            } catch (err) { 
                console.log(err);
            }
        }
        getRandomContent();
    }, [type]);

    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={(e) => {setGenre(e.target.value)}}>
                        <option value="null">Set genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentry">Documentry</option>
                        <option value="action">Action</option>
                    </select>
                </div>
            )}
            {movie !== {} ? <>
            <div className="bottomgradient"></div>
            <img src={movie.img} alt="featured"/>
            <div className="info">
                <img src={movie.imgTitle} alt="hit"/>
                <span className="desc">
                    {movie.desc}
                </span>
                <div className="buttons">
                    <Link to="/watch" className='link'>
                        <button className="play">
                                <PlayArrow />
                            <span>Play</span>
                        </button>
                    </Link>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
            </> : 
            <div className="featuredloading"></div>
            }
        </div>
    )
}

export default Featured
