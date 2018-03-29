import { handleEdit } from "../constants/action-types";

const initialState = {
    items: [],
    sysId: "571783655c14710e248216ba",
    isLoaded: true
};
const SubmitComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case handleEdit:{
      return { ...state, edit: !this.state.edit.concat(action.payload) };
    }
    break;
      default:
      return state;
  }
};

export default SubmitComponentReducer;

