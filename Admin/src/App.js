import React from 'react';
import SideBar from "./components/Sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import "./app.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productlist/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListList from './pages/listlists/ListList';
import List from './pages/list/List';
import NewList from './pages/newlist/NewList';

function App() {

  const RouteElement = ({comp}) => {
    return (<>
      <TopBar />
        <div className="container">
          <SideBar />
          {comp}
          </div>
      </>);
  }

  const { user } = useContext(AuthContext);

  return (
    <Router>
          <Routes>
                <Route exact path="/" element={
                  user ? <RouteElement comp={<Home />}/> : <Navigate to="/login"/>
                }/>
                <Route exact path="/login" element={
                  user ? <Navigate to="/"/> : <Login />
                }/>
                <Route exact path="/users" element={<RouteElement comp={<UserList />}/>}/>
                <Route exact path="/users/:id" element={<RouteElement comp={<User />}/>}/>
                <Route exact path="/newuser" element={<RouteElement comp={<NewUser />}/>}/>
                <Route exact path="/movies" element={<RouteElement comp={<ProductList />}/>}/>
                <Route exact path="/movies/:id" element={<RouteElement comp={<Product />}/>}/>
                <Route exact path="/newmovie" element={<RouteElement comp={<NewProduct />}/>}/>
                <Route exact path="/lists" element={<RouteElement comp={<ListList />}/>}/>
                <Route exact path="/lists/:id" element={<RouteElement comp={<List />}/>}/>
                <Route exact path="/newlist" element={<RouteElement comp={<NewList />}/>}/>
          </Routes>
    </Router>
  );
}

export default App;
