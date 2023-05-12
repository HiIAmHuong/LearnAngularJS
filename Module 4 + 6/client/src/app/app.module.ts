import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DongABankComponent } from './dong-a-bank/dong-a-bank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { CoindeskApiComponent } from './coindesk-api/coindesk-api.component';
import { ListPublicApisComponent } from './list-public-apis/list-public-apis.component';
import { PredictGenderComponent } from './predict-gender/predict-gender.component';
import { FormsModule } from '@angular/forms';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { RandomImgComponent } from './random-img/random-img.component';
import { FashionApiComponent } from './fashion-api/fashion-api.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DongABankComponent,
    FakeProductComponent,
    CoindeskApiComponent,
    ListPublicApisComponent,
    PredictGenderComponent,
    UsPublicDataComponent,
    RandomImgComponent,
    FashionApiComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    FashionDeleteComponent,

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
