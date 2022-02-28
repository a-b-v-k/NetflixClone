import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import "./productlist.css";
import { useContext } from 'react';
import React from 'react';
import {MovieContext} from "../../context/movieContext/MovieContext"
import { useEffect } from 'react';
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

const ProductList = () => {

  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
   deleteMovie(id, dispatch)   
  }

  console.log(movies)
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
          field: 'movie',
          headerName: 'Movie',
          width: 190,
          renderCell: (params) => {
            return (
            <div className="productlistname" >
              <img src={params.row.img} alt="prodpic" className='productimg'/>
              {params.row.title}
            </div>
            )
          }
        },
        {
          field: 'genre',
          headerName: 'Genre',
          width: 120,
        },
        {
          field: 'year',
          headerName: 'year',
          width: 120,
        },
        {
          field: 'limit',
          headerName: 'limit',
          width: 120,
        },
        {
          field: 'isSeries',
          headerName: 'isSeries',
          width: 120,
        },
        {
          field: "Action",
          headerName: "Action",
          width: 120,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/movies/" + params.row._id} state={params.row}>
                <button className="productlistedit">Edit</button>
              </Link>
                <DeleteOutline className="productlistdelete" onClick={()=>handleDelete(params.row._id)}/>
              </>
            )
          }
        }
      ];

  return <div className="productlist">
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick = {true}
        getRowId={(row) => row._id}
      />
      <Link to="/newmovie">
              <button className="productaddbutton">Create</button>
      </Link>
  </div>;
};

export default ProductList;
