import { Note } from "./note";

export interface InitialState {
  searchText?: string;
  selectedNote?: Note;
  notes?: Array<Note>;
  isEdit?: boolean;
}
