import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  
  {path:"", pathMatch:"full", component:CarComponent},
  //CARS
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/details/:carId", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarComponent},
  {path:"cars/filter/brand/:brandId",component:CarComponent},
  {path:"cars/filter/color/:colorId",component:CarComponent},
  {path:"cars/rental/payment/:rental",component:PaymentComponent},
  
  {path:"rentals", component:RentalComponent},
  {path:"rental/:carId", component:RentalComponent},
  
  {path:"colors", component:ColorComponent},
  //CUSTOMERS
  {path:"customers", component:CustomerComponent},
  //BRANDS
  {path:"brands", component:BrandComponent},

  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
