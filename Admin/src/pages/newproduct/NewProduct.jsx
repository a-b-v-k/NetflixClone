import React, { useState } from 'react';
import { useContext } from 'react';
import { createMovie } from '../../context/movieContext/apiCalls';
import {storage} from '../../firebase';
import "./newproduct.css"
import {MovieContext} from "../../context/movieContext/MovieContext";

const NewUser = () => {

  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgsm, setImgsm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const {dispatch} = useContext(MovieContext);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({...movie, [e.target.name] : value});
  }

  const [progress, setprogress] = useState({
    "img": 0,
    "imgTitle": 0,
    "imgsm": 0,
    "video": 0,
    "trailer": 0,
  });

  const upload = (items) => {
    items.forEach((item) => {
      const filename = item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${filename}`).put(item.file);
      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setprogress((prev) => {
          return {
            ...prev, [item.label] : progress
          }
        })
        console.log(item.label + ": " + progress);
      }, (err) => {console.log(err)}, 
       ()=>{
         uploadTask.snapshot.ref.getDownloadURL().then((url) => {
           setMovie((prev) => {return {...prev, [item.label] : url}});
           setCount((prev) => prev+1);
         })
       })
    })
  }

  const handleUpload = (e) => {
    setUploading(true);
    e.preventDefault();
    console.log("inside upload");
    upload([
        {file: img, label: "img"},
        {file: imgTitle, label: "imgTitle"},
        {file: imgsm, label: "imgsm"},
        {file: trailer, label: "trailer"},
        {file: video, label: "video"},
    ]);
  }
  
  const handleSubmit = (e) => {
    createMovie(movie, dispatch);
    console.log("Movie uploaded");
  }

  return <div className='newproduct'>
      <h1 className="newproducttitle">New Movie</h1>
      <form className="addproductform">
        <div className="addproductfile">
          <label>Image</label>
          <input type="file" id="img" name="img" onChange={(e) => setImg(e.target.files[0])}/>
        </div>
        <div className="addproductfile">
          <label>Title image</label>
          <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])}/>
        </div>
        <div className="addproductfile">
          <label>Thumbnail image</label>
          <input type="file" id="imgsm" name="imgsm" onChange={(e) => setImgsm(e.target.files[0])}/>
        </div>
        <div className="addproductitem">
          <label>Title</label>
          <input type="text" placeholder="Title" name="title" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Description</label>
          <input type="text" placeholder="Description" name="desc" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Year</label>
          <input type="text" placeholder="Year" name="year" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name="duration" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name="limit" onChange={handleChange}/>
        </div>
        <div className="addproductitem">
          <label>Series</label>
          <select name="isSeries" id="isSeries" className='addproductselect' onChange={handleChange} defaultValue="none">
            <option value="none">choose</option>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addproductfile">
          <label>Trailer</label>
          <input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])}/>
        </div>
        <div className="addproductfile">
          <label>Video</label>
          <input type="file" name='video' onChange={(e) => setVideo(e.target.files[0])}/>
        </div>
        {count === 5 ? 
          <button className="addproductbutton" onClick={handleSubmit}>Create</button>:
          <button className="addproductbutton" onClick={handleUpload}>Upload</button>} 
      </form>
      <span className='loading' style={{display: `${uploading ? "flex" : "none" }`}}>
        Image title<div className="load"><div className="progress" style={{width: `${progress.imgTitle}%`}}></div></div>
        Image thumbnail<div className="load"><div className="progress" style={{width: `${progress.imgsm}%`}}></div></div>
        Image<div className="load"><div className="progress" style={{width: `${progress.img}%`}}></div></div>
        Video<div className="load"><div className="progress" style={{width: `${progress.video}%`}}></div></div>
        Trailer<div className="load"><div className="progress" style={{width: `${progress.trailer}%`}}></div></div>
      </span>
  </div>
};

export default NewUser;
