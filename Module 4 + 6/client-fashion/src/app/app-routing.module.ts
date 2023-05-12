import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionSelectComponent } from './fashion-select/fashion-select.component';
import { FashionStyleComponent } from './fashion-style/fashion-style.component';

const routes: Routes = [
  {path:'', component:FashionSelectComponent},
  {path:'fashions-style', component:FashionStyleComponent},
  {path:'fashions-style/:id', component:FashionDetailComponent},
  {path:'fashions-select', component:FashionSelectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
