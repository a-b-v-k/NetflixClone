import React, { useState } from 'react';
import "./product.css";
import { useLocation } from "react-router-dom";

const Product = () => {

    const location = useLocation();
    const [movie, setMovie] = useState(location.state);
    console.log(movie);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name] : value})
    }

  return <div className="product">
      <div className="producttitlecontainer">
          <h1 className="producttitle">Movie</h1>
      </div>
      <div className="producttop">
          <div className="producttopright">
              <div className="productinfotop">
                  <img src={movie.img} className="productinfoimg" />
                  <span className="productname">{movie.title}</span>
              </div>
              <div className="productinfobottom">
                  <div className="productinfoitem">
                      <span className="productinfokey">Id:</span>
                      <span className="productinfovalue">{movie._id}</span>
                  </div>
                  <div className="productinfoitem">
                      <span className="productinfokey">Genre:</span>
                      <span className="productinfovalue">{movie.genre}</span>
                  </div>
                  <div className="productinfoitem">
                      <span className="productinfokey">Year:</span>
                      <span className="productinfovalue">{movie.year}</span>
                  </div>
                  <div className="productinfoitem">
                      <span className="productinfokey">Limit:</span>
                      <span className="productinfovalue">{movie.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productbottom">
          <form className="productform">
              <div className="productformleft">
                  <label>Movie Name</label>
                  <input type="text" defaultValue={movie.title} onChange={handleChange} name='title'/>
                  <label>Genre</label>
                  <input type="text" defaultValue={movie.genre} onChange={handleChange} name='genre'/>
                  <label>Year</label>
                  <input type="text" defaultValue={movie.year} onChange={handleChange} name='year'/>
                  <label>Limit</label>
                  <input type="text" defaultValue={movie.limit} onChange={handleChange} name='limit'/>
                  <label>Trailer</label>
                  <input type="file" />
                  <label>Video</label>
                  <input type="file" />
              </div>
              <div className="productformright">
                  <div className="productupload">
                        <div className="productuploadcontainer">
                            <img src={movie.img} alt="uploadpic" className="productuploadimg" />
                            <div className="productuploadhover">
                                <span>Change image</span>
                            </div>
                        </div>
                      <input type="file" id="file" style={{display: "none"}}/>
                  </div>
                  <button className="productbutton">Update</button>
              </div>
          </form>
      </div>
  </div>;
};

export default Product;
