import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoindeskApiComponent } from './coindesk-api/coindesk-api.component';
import { DongABankComponent } from './dong-a-bank/dong-a-bank.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { FashionApiComponent } from './fashion-api/fashion-api.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { ListPublicApisComponent } from './list-public-apis/list-public-apis.component';
import { PredictGenderComponent } from './predict-gender/predict-gender.component';
import { RandomImgComponent } from './random-img/random-img.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';

const routes: Routes = [
  {path: "dongabank", component:DongABankComponent},
  {path: "fakeproduct", component:FakeProductComponent},
  {path: "coin", component:CoindeskApiComponent},
  {path: "listapis", component:ListPublicApisComponent},
  {path: "predictgender", component:PredictGenderComponent},
  {path: "uspublicdata", component:UsPublicDataComponent},
  {path: "randomimg", component:RandomImgComponent},
  {path: "getfashion", component:FashionApiComponent},
  {path: "postfashion", component:FashionNewComponent},
  {path: "putfashion", component:FashionUpdateComponent},
  {path: "deletefashion", component:FashionDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent = [
  DongABankComponent,
  FakeProductComponent
]
