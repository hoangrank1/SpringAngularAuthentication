import { Component } from '@angular/core';
import { FileService } from 'src/app/services/file-service/file.service';

@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent {
  files: any = [];

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getFiles().subscribe((response) => {
        response.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.data;
          this.files.push(element);
        });
      },
      error => {
        console.error('Error fetching files:', error);
      }
    );
  }


  downloadFile(fileId: number): void {
    this.fileService.downloadFile(fileId).subscribe(response => {
      const fileNameFromUrl = "file";
      const contentType: any = response.headers.get("Content-Type");
      const blob = new Blob([response.body], { type: contentType });

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileNameFromUrl;

      link.click();

      window.URL.revokeObjectURL(link.href);
      link.remove();
    })
  }
}
