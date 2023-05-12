import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../models/Fashion';
@Component({
  selector: 'app-fashion-new',
  templateUrl: './fashion-new.component.html',
  styleUrls: ['./fashion-new.component.css'],
})
export class FashionNewComponent {
  fashion = new Fashion();
  errMessage: string = '';
  today: string = new Date().toISOString();

  constructor(private _service: FashionAPIService, private router: Router) {}
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
  postFashion() {
    this.fashion.date = this.today

    this._service.postFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashion = data;
        this.router.navigate(['']);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['insertImage', 'insertVideo', 'link', 'unlink', 'fontSize', 'textColor', 'backgroundColor'],
    ['heading', 'fontName', 'blockquote', 'code', 'insertHorizontalRule', 'removeFormat']
  ];
}
