import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Breakpoints, BreakpointObserver } from "@angular/cdk/layout";
import { NgRedux, select } from "@angular-redux/store";
import { InitialState } from "../../models/initialState";
import { Note } from "../../models/note";
import {
  AddNewEmptyNote,
  UpdateSelectedNote,
  SaveNote,
} from "../../store/actions";
import { Observable } from "rxjs";
@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"],
})
export class NoteComponent implements OnInit {
  @select("selectedNote") note$: Observable<Note>;
  @select("isEdit") isEdit: Observable<boolean>;
  defaultValue: string = "";
  // -------------------------------------------------------------------------------------
  constructor(private ngRedux: NgRedux<InitialState>) {}
  ngOnInit() {
    this.ngRedux.dispatch(AddNewEmptyNote());
    this.isEdit.subscribe((item) => {
      if (item) {
        this.defaultValue = "";
      }
    });
  }
  // -------------------------------------------------------------------------------------

  typeNote(e) {
    // -------------------------------------------------------------------------------------
    let enteredText = e.target.value;
    let splitEnteredTextArray = enteredText.split(/\n/g);
    // ---------------------------------Checking entered text is empty or note--------------
    if (!enteredText)
      return this.ngRedux.dispatch(
        UpdateSelectedNote({
          title: "",
          description: "",
          time: new Date(),
        })
      );
    // ---------------------------------Checking entered text for title and description------

    if (splitEnteredTextArray.length > 1) {
      let [title, ...rest] = splitEnteredTextArray;
      this.ngRedux.dispatch(
        UpdateSelectedNote({
          title,
          description: `\n${rest.join("\n")}`,
          time: new Date(),
        })
      );
      return;
    }
    // ---------------------------------Updating current Note--------------

    this.ngRedux.dispatch(
      UpdateSelectedNote({
        title: enteredText,
        description: "",
        time: new Date(),
      })
    );
  }
}
