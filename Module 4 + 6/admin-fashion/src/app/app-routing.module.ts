import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionApiComponent } from './fashion-api/fashion-api.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionsComponent } from './fashions/fashions.component';



const routes: Routes = [
  {path: "fashion-detail", component:FashionApiComponent},
  {path: "fashion-detail/:id", component:FashionApiComponent},
  {path: "fashion-new", component:FashionNewComponent},
  {path: "fashion-update", component:FashionUpdateComponent},
  {path: "fashion-update/:id", component:FashionUpdateComponent},
  {path: "fashion-delete", component:FashionDeleteComponent},
  {path: '', component:FashionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent = [

]
