import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { DatePipe } from "@angular/common"

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers:[DatePipe]
})
export class RentalComponent implements OnInit {
  minDate:string|null;
  maxDate:string|null;
  customers:Customer[];
  rentals:Rental[]=[];
  rental:Rental = {
    carId:0,
    customerId:0,
    rentDate:new Date(),
    returnDate:new Date(),
    id:0       
  };
  dataLoaded=false;
  rentDate:Date;
  returnDate:Date;
  customerId:number;
  rentable:boolean=false;
  firstDateSelected:boolean= false;
  @Input() car:Car;

  constructor(private rentalService:RentalService,
    private carService:CarService,
    private carDetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private router:Router,
    private toastr:ToastrService,
    private datePipe:DatePipe,) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetail(params["carId"]);
          this.getCustomers();
          this.CheckStatus(params["carId"]);
          this.getRentalsByCarId(params["carId"])
        }
      })
      this.minDate=this.datePipe.transform(new Date(),"yyyy-MM-dd");
      this.maxDate=this.datePipe.transform(new Date(new Date().setFullYear(new Date().getFullYear() + 1)),"yyyy-MM-dd");
       this.getRentals()  
    }
    
    getRentals(){
      this.rentalService.getRentals().subscribe(response => {
       this.rentals=response.data;
       this.dataLoaded=true;
     })
     
   }
  
   getRentalsByCarId(carId:number){
    this.rentalService.getRentalByCarId(carId).subscribe(response => {
      if (response.data[response.data.length-1]) {
        this.rental = response.data[response.data.length-1];
      }
    })
  }
  
   getCarDetail(carId:number){
     this.carService.getCarDetail(carId).subscribe(response => {
       this.car=response.data[0];
       console.log(this.car);
       this.rentable = response.data[0].status;
     })
   }
  
   getCustomers(){
     this.customerService.getCustomers().subscribe(response => {
       this.customers=response.data;
     })
   }
  
   addRental(){
    let RentalModel ={
      customerId:this.customerId,
      carId:this.car.carId,
      rentDate:this.rentDate,
      returnDate:this.returnDate
    };
    this.router.navigate(["cars/rental/payment/",JSON.stringify(RentalModel)]);
    this.toastr.success("Payment page is loading","Renting process successful.");
   }
   CheckStatus(carId:number){
      
    this.carService.getCarDetail(carId).subscribe(response => {
      this.rentable = response.data[response.data.length-1].status;
    })
   }
  
   setCustomerId(customerId:any){
    this.customerId=+customerId;
    console.log(this.customerId)
   }
  
   onChangeEvent(event: any){
     this.minDate = event.target.value
     this.firstDateSelected = true
   }
}
