import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";
import { NgRedux, select } from "@angular-redux/store";
import { InitialState } from "../../models/initialState";
import { Note } from "../../models/note";
import { Observable } from "rxjs";
import {
  SaveNote,
  UpdateNote,
  AddNewEmptyNote,
  RemoveNote,
  SelectNote,
  SearchNotes,
} from "../../store/actions";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  @select("notes") notes$: Observable<Array<Note>>;
  @select("selectedNote") note: Observable<Note>;
  @select("isEdit") isEdit: Observable<boolean>;
  noteToSave: Note;
  triggerToSave: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private ngRedux: NgRedux<InitialState>
  ) {}
  ngOnInit() {
    this.note.subscribe((note) => {
      this.noteToSave = note;
    });
    this.isEdit.subscribe((isEdit) => {
      this.triggerToSave = isEdit;
    });
  }
  saveNote() {
    this.triggerToSave
      ? this.ngRedux.dispatch(UpdateNote(this.noteToSave))
      : this.ngRedux.dispatch(SaveNote(this.noteToSave));

    this.ngRedux.dispatch(AddNewEmptyNote());
  }
  removeNote() {
    this.ngRedux.dispatch(RemoveNote(this.noteToSave));

    this.ngRedux.dispatch(AddNewEmptyNote());
  }
  selectNote(note) {
    this.ngRedux.dispatch(SelectNote(note));
  }
  searchNotes(e) {
    this.ngRedux.dispatch(SearchNotes(e.target.value));
  }
}
