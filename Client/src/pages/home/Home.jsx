import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss";
import axios from "axios";

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomList = async () => {
            try{
                const response = await axios.get(
                    `/lists${type ? "?type="+type : ""}${genre ? "&?genre="+genre : ""}`, {
                        headers: {
                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        }
                    }
                    );
                    setLists(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomList();
    }, [type, genre]);

    lists.sort((a, b) => {
        return a.title.split(" ")[1] - b.title.split(" ")[1];
    });

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>
            {lists.map((list, index) => {
                return <List list={list} key={index}/>
            })}
        </div>
    )
}

export default Home
