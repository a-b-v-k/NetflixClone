import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout} from "./AuthAction";


export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
         dispatch(loginFailure());
    }
};

export const logoutapi = async (dispatch) => {
    dispatch(logout());
}