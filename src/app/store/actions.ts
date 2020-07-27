export enum ActionTypes {
  Save = "[Note] Save",
  Update = "[Note] Update",
  Remove = "[Note] Remove",
  AddNewEmptyNote = "[Note] AddNewEmptyNote",
  SelectNote = "[Note] SelectNote",
  UpdateSelectedNote = "[Note] UpdateSelectedNote",
  SearchNotes = "[Note] SearchNotes",
}
// ---------- Save new note action--------------------

export const SaveNote = (payload) => {
  return {
    type: ActionTypes.Save,
    payload,
  };
};
// ---------- Update note action--------------------

export const UpdateNote = (payload) => {
  return {
    type: ActionTypes.Save,
    payload,
  };
};
// ---------- Delete note action--------------------

export const RemoveNote = (payload) => ({
  type: ActionTypes.Remove,
  payload,
});
// ---------- Add empty note action--------------------

export const AddNewEmptyNote = () => {
  return {
    type: ActionTypes.AddNewEmptyNote,
  };
};
// ---------- Select note for operations action--------------------

export const SelectNote = (payload) => {
  return {
    type: ActionTypes.SelectNote,
    payload,
  };
};
// ---------- Update selected note action--------------------

export const UpdateSelectedNote = (payload) => {
  return {
    type: ActionTypes.UpdateSelectedNote,
    payload,
  };
};
// ---------- Search through notes action--------------------

export const SearchNotes = (payload) => {
  return {
    type: ActionTypes.SearchNotes,
    payload,
  };
};
