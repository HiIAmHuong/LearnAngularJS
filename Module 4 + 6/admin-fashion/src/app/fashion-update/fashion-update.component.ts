import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../models/Fashion';

@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css'],
})
export class FashionUpdateComponent {
  fashion: any;
  fashionId: any;
  errMessage: string = '';
  id: string = '';
  constructor(
    private _service: FashionAPIService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params.subscribe((params) => {
      this.fashionId = params['id'];
      this._service.getFashion(this.fashionId).subscribe({
        next: (data) => {
          this.fashion = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
    });
  }
  public setFashion(f: Fashion) {
    this.fashion = f;
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  putFashion() {
    this._service.putFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashion = data;
        this.router.navigate(['']);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  getFashion(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  options = {
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'align', 'insertLink', 'insertImage'],
    quickInsertButtons: ['image', 'table', 'ul', 'ol', 'hr'],
    imageUploadURL: 'https://upload.froala.com/upload',
    imageUploadMethod: 'POST',
    imageUploadParam: 'file',
    imageUploadParams: {
      froalaEditor: 'true',
      token: 'your-token'
    }
  };
  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['insertImage', 'insertVideo', 'link', 'unlink', 'fontSize', 'textColor', 'backgroundColor'],
    ['heading', 'fontName', 'blockquote', 'code', 'insertHorizontalRule', 'removeFormat']
  ];
}
