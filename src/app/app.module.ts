import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgReduxModule, NgRedux } from "@angular-redux/store";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoteComponent } from "./components/note/note.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MainComponent } from "./components/main/main.component";
// ---------- Inital state and reducers--------------------
import { initialState, rootReducer } from "./store/store";
import { InitialState } from "./models/initialState";
import { TimeComponent } from './components/time/time.component';

@NgModule({
  declarations: [AppComponent, NoteComponent, MainComponent, TimeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
// ---------- Configuration and initialization of redux store--------------------
export class AppModule {
  constructor(ngRedux: NgRedux<InitialState>) {
    ngRedux.configureStore(rootReducer, initialState);
  }
}
