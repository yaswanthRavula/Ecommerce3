import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPageComponent } from './components/address-page/address-page.component';
import { CartComponent } from './components/cart/cart.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShippingPageComponent } from './components/shipping-page/shipping-page.component';

const routes: Routes = [
  {path:'Home',component:FirstpageComponent},
  {path:'product-detail',component:ProductDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'address',component:AddressPageComponent},
  {path:'shipping',component:ShippingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
