import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import "./listlist.css";
import { useContext } from 'react';
import React from 'react';
import { useEffect } from 'react';
import { ListContext } from "../../context/listContext/ListContext"
import { deleteList, getLists } from "../../context/listContext/apiCalls";

const ListList = () => {

  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
   deleteList(id, dispatch)   
  }

  console.log(lists)
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
          field: 'title',
          headerName: 'Title',
          width: 190,
          renderCell: (params) => {
            return (
            <div className="productlistname" >
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
          field: 'type',
          headerName: 'type',
          width: 120,
        },
        {
          field: "Action",
          headerName: "Action",
          width: 120,
          renderCell: (params) => {
            return (
              <>
              <Link to={"/lists/" + params.row._id} state={params.row}>
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
        rows={lists}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick = {true}
        getRowId={(row) => row._id}
      />
      <Link to="/newlist">
              <button className="productaddbutton">Create</button>
      </Link>
  </div>;
};

export default ListList;
