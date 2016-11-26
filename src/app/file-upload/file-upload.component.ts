import { Component,  } from "@angular/core";


@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent  {
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: "http://localhost:10050/upload"
  };

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
