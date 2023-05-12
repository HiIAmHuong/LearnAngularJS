import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionStyleComponent } from './fashion-style/fashion-style.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FormsModule } from '@angular/forms';
import { FashionSelectComponent } from './fashion-select/fashion-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FashionStyleComponent,
    FashionDetailComponent,
    FashionSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
