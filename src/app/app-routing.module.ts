import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsByIdComponent } from './components/car-details-by-id/car-details-by-id.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"brand", component:BrandComponent},
  {path:"car", component:CarComponent},
  {path:"color", component:ColorComponent},
  {path:"customer", component:CustomerComponent},
  {path:"rental", component:RentalComponent},
  {path:"cars/car/:carId", component:CarDetailsComponent},
  {path:"cars/cardetails", component:CarDetailsComponent},
  {path:"cars/cardetailsbyid", component:CarDetailsByIdComponent},
  {path:"cars/cardetailsbyid/:carId", component:CarDetailsByIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
