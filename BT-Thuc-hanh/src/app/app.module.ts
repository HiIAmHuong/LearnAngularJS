import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import { BindingStyleComponent } from './binding-style/binding-style.component';
import { BindingEventComponent } from './binding-event/binding-event.component';
import { BindingTwoWayComponent } from './binding-two-way/binding-two-way.component';
import { BindingTwoWayQuadricComponent } from './binding-two-way-quadric/binding-two-way-quadric.component';
import { FormsModule } from '@angular/forms';
import { JsObjectProductComponent } from './js-object-product/js-object-product.component';
import { JsArrayProductComponent } from './js-array-product/js-array-product.component';
import { JsArrayProductEventComponent } from './js-array-product-event/js-array-product-event.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { JsArrayProductCataComponent } from './js-array-product-cata/js-array-product-cata.component';
import { JsArrayProductHttpsComponent } from './js-array-product-https/js-array-product-https.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error/service-product-http-handle-error.component';
import { JsObjectCustomerComponent } from './js-object-customer/js-object-customer.component';
import { JsArrayGroupCustomerComponent } from './js-array-group-customer/js-array-group-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    BindingTwoWayQuadricComponent,
    JsObjectProductComponent,
    JsArrayProductComponent,
    JsArrayProductEventComponent,
    ServiceProductImageEventComponent,
    JsArrayProductCataComponent,
    JsArrayProductHttpsComponent,
    LoginScreenComponent,
    ServiceProductHttpHandleErrorComponent,
    JsObjectCustomerComponent,
    JsArrayGroupCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
