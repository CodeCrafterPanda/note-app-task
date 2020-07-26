import { ActionTypes } from "./actions";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  searchText: null,
  selectedNote: null,
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  isEdit: false,
};
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.Save:
      
      return {
        ...state,
      };
    case ActionTypes.Update:
      return {
        ...state,
      };
    case ActionTypes.Remove:
      return {
        ...state,
      };
    case ActionTypes.AddNewEmptyNote:
      
      return {
        ...state,
      };
    case ActionTypes.SelectNote:
      return {
        ...state,
      };
    case ActionTypes.UpdateSelectedNote:
      return {
        ...state,
      };
    case ActionTypes.SearchNotes:
      return {
        ...state,
      };

    default:
      return state;
  }
}
