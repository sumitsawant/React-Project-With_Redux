import { handleEdit } from "../constants/action-types";

const initialState = {
    error: null,
    isLoaded: false,
    editing: false,
    edit: false,
    items: []

};

const MyComponentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'handleEdit':
            state = {
                ...state,
                edit: !this.state.edit.concat(action.payload)
            };
            return state;
            break;

        default:
            return state;
    }
};

export default MyComponentReducer;

































// import { ADD_ARTICLE } from "../constants/action-types";

// const initialState = {
//   articles: []
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ARTICLE:
//       return { ...state, articles: state.articles.concat(action.payload) };
//     default:
//       return state;
//   }
// };

// export default rootReducer;