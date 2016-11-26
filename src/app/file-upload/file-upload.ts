import { NgModule } from "@angular/core";
import { FileSelectDirective } from "./directives/file-select.directive";
import { FileDropDirective } from "./directives/file-drop.directive";
import { Ng2Uploader } from "./services/file-select.service";

@NgModule({
   declarations: [
     FileSelectDirective,
     FileDropDirective
   ],
   providers: [
     Ng2Uploader
   ],
   exports: [
     FileDropDirective,
     FileSelectDirective
   ]
})
export class FileUploaderModule {}

