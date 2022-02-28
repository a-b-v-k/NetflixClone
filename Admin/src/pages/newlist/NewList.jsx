import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createMovie, getMovies } from '../../context/movieContext/apiCalls';
import {storage} from '../../firebase';
import "./newlist.css"
import {MovieContext} from "../../context/movieContext/MovieContext";
import { createList } from '../../context/listContext/apiCalls';
import { ListContext } from '../../context/listContext/ListContext';

const NewList = () => {

  const [list, setList] = useState(null);
  const { movies, dispatch } = useContext(MovieContext);
  const listcontext = useContext(ListContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({...list, [e.target.name] : value});
    console.log(list);
  }
  
  const handleSubmit = () => {
    createList(list, listcontext.dispatch);
    console.log("submit");
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({...list, [e.target.name] : value});
  }

  console.log(list);

  return <div className='newproduct'>
      <h1 className="newproducttitle">New List</h1>
      <form className="addproductform">
        <div className="formleft">
        <div className="addproductitem">
          <label>Title</label>
          <input type="text" placeholder="Title" name="title" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Type</label>
          <select name="type" className="addproductselect" onChange={handleChange}>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
          </select>
        </div>
        <div className="addproductitem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
        </div>
        </div>
        <div className="formright">
        <div className="addproductitem">
          <label>Content</label>
          <select multiple={true} name="content" className='addlistselect' onChange={handleSelect}>
            {movies.map((movie) => {
                return <option value={movie._id} key={movie._id}>{movie.title}</option>
            })}
          </select>
        </div>
        </div>
        <button className="addproductbutton" onClick={handleSubmit}>Create</button>
      </form>
  </div>
};

export default NewList;
