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
      let newNoteToAdd = {
        ...action.payload,
        title: action.payload.title ? action.payload.title : "New Note",
      };
      let newNotesAfterAdd = [...state.notes, newNoteToAdd];
      localStorage.setItem("notes", JSON.stringify(newNotesAfterAdd));
      return {
        ...state,
        notes: newNotesAfterAdd,
      };
    case ActionTypes.Update:
      let newNoteToUp = {
        ...action.payload,
        title: action.payload.title ? action.payload.title : "New Note",
      };
      let newNotesAfterUpdate = [
        ...[...state.notes.filter((item) => item.id !== state.selectedNote.id)],
        newNoteToUp,
      ];
      localStorage.setItem("notes", JSON.stringify(newNotesAfterUpdate));
      return {
        ...state,
        notes: newNotesAfterUpdate,
      };
    case ActionTypes.Remove:
      let newNotesAfterRemove = [
        ...state.notes.filter((item) => item.id !== action.payload.id),
      ];
      localStorage.setItem("notes", JSON.stringify(newNotesAfterRemove));
      return {
        ...state,
        notes: newNotesAfterRemove,
      };
    case ActionTypes.AddNewEmptyNote:
      let newNote = {
        id: uuidv4(),
        title: "",
        description: "",
        time: Date.now().toString(),
      };
      return {
        ...state,
        isEdit: false,
        selectedNote: newNote,
      };
    case ActionTypes.SelectNote:
      let noteToSelect = action.payload;
      let notesAfterSelectedNote = [
        ...JSON.parse(localStorage.getItem("notes")).filter(
          (item) => item.id !== action.payload.id
        ),
      ];
      return {
        ...state,
        isEdit: true,
        notes: notesAfterSelectedNote,
        selectedNote: noteToSelect,
      };
    case ActionTypes.UpdateSelectedNote:
      let newNoteToUpdate = {
        ...state.selectedNote,
        ...action.payload,
      };
      return {
        ...state,
        selectedNote: newNoteToUpdate,
      };
    case ActionTypes.SearchNotes:
      let textToSearch = action.payload.toLowerCase();
      let notesAfterSearch = [
        ...JSON.parse(localStorage.getItem("notes")).filter(
          (item) =>
            item.title.toLowerCase().includes(textToSearch) ||
            item.description.toLowerCase().includes(textToSearch)
        ),
      ];
      return {
        ...state,
        notes: notesAfterSearch,
      };

    default:
      return state;
  }
}
