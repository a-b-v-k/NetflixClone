import React, { useContext, useEffect } from 'react';
import "./list.css";
import { useLocation } from "react-router-dom";
import { ListContext } from '../../context/listContext/ListContext';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { createList, UpdateList } from '../../context/listContext/apiCalls';
import { getMovies } from '../../context/movieContext/apiCalls';
import { useState } from 'react';

const Product = () => {
  
  const location = useLocation();
  const [list, setList] = useState(location.state);
  console.log(list);
  
  const {movies, dispatch} = useContext(MovieContext);
  const {dispatch: dispatchMovie} = useContext(ListContext)
    
    useEffect(() => {
      getMovies(dispatch);
    }, [dispatch]);
    
    const handleChange = (e) => {
      const value = e.target.value;
      setList({...list, [e.target.name] : value});
      console.log(list);
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      UpdateList(list, dispatchMovie);
      console.log("submit");
    }

    const handleSelect = (e) => {
      let value = Array.from(e.target.selectedOptions, (option) => option.value);
      setList({...list, [e.target.name] : value});
    }
    
  return <div className="product">
      <div className="producttitlecontainer">
          <h1 className="producttitle">Movie</h1>
      </div>
      <div className="producttop">
          <div className="producttopright">
              <div className="productinfotop">
                  <span className="productname">{list.title}</span>
              </div>
              <div className="productinfobottom">
                  <div className="productinfoitem">
                      <span className="productinfokey">Id:</span>
                      <span className="productinfovalue">{list._id}</span>
                  </div>
                  <div className="productinfoitem">
                      <span className="productinfokey">Genre:</span>
                      <span className="productinfovalue">{list.genre}</span>
                  </div>
                  <div className="productinfoitem">
                      <span className="productinfokey">Type:</span>
                      <span className="productinfovalue">{list.type}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productbottom" style={{width: "650px"}}>
          <form className="productform">
              <div className="productformleft">
                  <label>List Name</label>
                  <input type="text" defaultValue={list.title} name='title' onChange={handleChange}/>
                  <label>Genre</label>
                  <input type="text" defaultValue={list.genre} name='genre' onChange={handleChange}/>
                  <label>type</label>
                  <select name="type" id="type" onChange={handleChange} defaultValue={list.type}>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                  </select>
              </div>
              <div className="productformright">
                  <div className="addproductitem">
                  <label>Content</label>
                    <select multiple={true} name="content" className='addlistselect' onChange={handleSelect}>
                      {movies.map((movie) => {
                          return <option value={movie._id} key={movie._id}>{movie.title}</option>
                      })}
                    </select>
                  </div>
                  <button className="productbutton" onClick={handleSubmit}>Update</button>
              </div>
          </form>
      </div>
  </div>;
};

export default Product;
