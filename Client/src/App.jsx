import Home from "./pages/home/Home";
import "./App.scss";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
    const {user} = useContext(AuthContext);
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
                {user && 
                    <>
                    <Route exact path="/movies" element={<Home type={"movie"}/>} />
                    <Route exact path="/series" element={<Home type={"series"}/>} />
                    <Route exact path="/watch" element={<Watch/>} />
                    </>
                }
            </Routes>
        </Router>
    );
}

export default App;