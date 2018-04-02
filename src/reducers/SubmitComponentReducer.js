import { handleEdit, GET_DATA_PENDING, GET_DATA_RECEIVED, GET_DATA_ERROR } from "../constants/action-types";

const initialState = {
    items: [],
    sysId: "571783655c14710e248216ba",
    isLoaded: true,

};

const SubmitComponentReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_DATA_PENDING:
            {
                return {...state, isLoaded: false };

            }
            break;

        case GET_DATA_RECEIVED:
            {
                return {...state, isLoaded: true, items: action.payload }
                break;
            }
        case GET_DATA_ERROR:
            {
                return {...state,
                    isLoaded: true,
                    // error
                };
            }

            break;
        default:
            return state;
    }
};

export default SubmitComponentReducer;