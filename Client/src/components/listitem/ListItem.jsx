import "./listItem.scss";
import React, { useState } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListItem = ({listitem}) => {

    const [isHovered, setisHovered] = useState(false);
    const [ movie, setmovie ] = useState(null);

    useEffect(() => {
        const getmovie = async () => {
            try{
                const res = await axios.get("/movies/find/" + listitem, {
                    headers: {
                        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    }
                });
                setmovie(res);
            } catch(err) {
                console.log(err);
            }
        }
        getmovie();
    }, [listitem]);

    if(movie === null)
        return(<div className="loading"></div>);
    // console.log(movie)
    return (
        <Link to={`/watch`} state={movie.data} >
            <div className="listitemback">
                <div className="listitem" onMouseEnter={() => setisHovered(true)}
                                        onMouseLeave={() => setisHovered(false)}>
                    <img src={movie.data.imgsm} alt="listitemimage" /> 
                    {isHovered && <>
                    <video src={movie.data.trailer} alt="video" autoPlay={true} loop/>
                    <div className="iteminfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                        </div>
                        <div className="iteminfotop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+{movie.data.limit}</span>
                            <span>{movie.data.year}</span>
                        </div>
                        <div className="desc">
                            {movie.data.desc}
                        </div>
                        <div className="genre">
                            {movie.data.genre}
                        </div>
                    </div>
                    </>}
                </div>
            </div>
        </Link>
    )
}
export default ListItem;
