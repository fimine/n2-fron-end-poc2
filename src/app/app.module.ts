import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import {WelcomeComponent} from "./welcome/welcome.component";

import { FileUploadComponent } from "./file-upload/file-upload.component";
import { FileSelectDirective } from "./file-upload/directives/file-select.directive";
import { FileDropDirective } from "./file-upload/directives/file-drop.directive";
import { Ng2Uploader} from "./file-upload/services/file-select.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent, FileUploadComponent, FileSelectDirective, FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "", component: FileUploadComponent }])
  ],
  providers: [Ng2Uploader],
  bootstrap: [AppComponent]
})
export class AppModule { }
