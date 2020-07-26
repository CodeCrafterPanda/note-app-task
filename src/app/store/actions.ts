export enum ActionTypes {
  Save = "[Note] Save",
  Update = "[Note] Update",
  Remove = "[Note] Remove",
  AddNewEmptyNote = "[Note] AddNewEmptyNote",
  SelectNote = "[Note] SelectNote",
  UpdateSelectedNote = "[Note] UpdateSelectedNote",
  ClearSelectedNote = "[Note] ClearSelectedNote",
  SearchNotes = "[Note] SearchNotes",
}
export const SaveNote = (payload) => {
  return {
    type: ActionTypes.Save,
    payload,
  };
};
export const UpdateNote = (payload) => {
  return {
    type: ActionTypes.Save,
    payload,
  };
};
export const RemoveNote = (payload) => ({
  type: ActionTypes.Remove,
  payload,
});

export const AddNewEmptyNote = () => {
  return {
    type: ActionTypes.AddNewEmptyNote,
  };
};
export const SelectNote = (payload) => {
  return {
    type: ActionTypes.SelectNote,
    payload,
  };
};
export const UpdateSelectedNote = (payload) => {
  return {
    type: ActionTypes.UpdateSelectedNote,
    payload,
  };
};

export const SearchNotes = (payload) => {
  return {
    type: ActionTypes.SearchNotes,
    payload,
  };
};
