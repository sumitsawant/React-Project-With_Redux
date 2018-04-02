import { GET_DATA_PENDING, GET_DATA_RECEIVED, GET_DATA_ERROR } from "../constants/action-types";
import axios from 'axios';

export function getData(dispatch, sysId) {

    dispatch({ type: "GET_DATA_PENDING" })

    axios.get("http://localhost:4000/api/data/" + sysId)
        .then((result) => {

            dispatch({ type: "GET_DATA_RECEIVED", payload: result.data.data })

        }).catch((error) => {
            dispatch({ type: "GET_DATA_ERROR", payload: error })
        })
}

// export const addArticle = article => ({
//     type: ADD_ARTICLE,
//     payload: article
// });