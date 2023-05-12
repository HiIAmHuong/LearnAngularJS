import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FashionApiComponent } from './fashion-api/fashion-api.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { FashionsComponent } from './fashions/fashions.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgxEditorModule } from 'ngx-editor';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
@NgModule({
  declarations: [
    AppComponent,
    FashionApiComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    FashionDeleteComponent,
    FashionsComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    LMarkdownEditorModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
