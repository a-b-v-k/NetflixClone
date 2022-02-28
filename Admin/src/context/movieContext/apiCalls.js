import axios from "axios";
import { updateListFailure, updateListStart, updateListSuccess } from "../listContext/ListActions";
import { createMovieFailure, createMovieStart, createMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try{
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
}

export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try{
        const res = await axios.post("/movies/add", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMovieFailure());
    }
}

export const updateMovie = async (movie, dispatch) => {
    dispatch(updateListStart());
    try {
        const res = await axios.put("/movies/find/" + movie._id, movie, {
            headers: {
                token: "Bearer " + JSON.parser(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(updateListSuccess(res.data))
    } catch (err) {
        dispatch(updateListFailure());
    }
}

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try{
        const res = await axios.delete("/movies/find/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
}