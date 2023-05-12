import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListCatalogComponent } from './list-catalog/list-catalog.component';

const routes: Routes = [
  {path: "product", component:ProductComponent},
  {path: "list-product", component:ListProductComponent},
  {path: "list-product2", component:ListProduct2Component},
  {path: "list-catalog", component:ListCatalogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  ProductComponent,
  ListProductComponent,
  ListProduct2Component,
  ListCatalogComponent
]

