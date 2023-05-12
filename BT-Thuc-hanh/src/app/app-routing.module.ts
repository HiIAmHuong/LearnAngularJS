import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsArrayProductEventComponent } from './js-array-product-event/js-array-product-event.component';
import { JsArrayProductHttpsComponent } from './js-array-product-https/js-array-product-https.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';

const routes: Routes = [
  {path:'service-product-image-event', component:JsArrayProductEventComponent},
  {path:'service-product-image-event/:id', component:ServiceProductImageEventComponent},
  {path: 'product-https',component: JsArrayProductHttpsComponent},
  {path: 'login',component: LoginScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
