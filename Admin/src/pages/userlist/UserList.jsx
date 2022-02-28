import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { rows } from "../../dummydata";
import { Link } from 'react-router-dom';
import "./userlist.css";

export default function UserList() {

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'User',
      headerName: 'User',
      width: 150,
      renderCell: (params) => {
        return (
        <div className="userlistname" >
          <img src={params.row.Avatar} alt="userpic" className='userimg'/>
          {params.row.UserName}
        </div>
        )
      }
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 190,
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'Transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
          <Link to={"/users/" + params.row.id}>
            <button className="userlistedit">Edit</button>
          </Link>
            <DeleteOutline className="userlistdelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick = {true}
      />
    </div>
  );
}
