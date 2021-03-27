import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars:Car[] = [];
  brands : Brand[] = [];
  colors: Color[] = [];
  currentCar:Car;
  filterText:string;
  images:CarImage[]=[];

  imageBasePath = environment.baseUrl;


  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      } else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      } else if(params["brandId"] && params["colorId"]){
        this.getCarsBySelect(params["brandId"],params["colorId"])
      } else{
          this.getCars()
      }
    })
  } 

  getCars(){
     this.carService.getCars().subscribe(response=>{
       this.cars=response.data;
     })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
 }

 getCarsByColor(colorId:number){
  this.carService.getCarsByColor(colorId).subscribe(response=>{
    this.cars=response.data;
  })
}

setCurrentCar(car: Car) {
  this.currentCar = car;
}

getCarsBySelect(brandId:number, colorId:number){
  this.carService.getCarsBySelect(brandId,colorId).subscribe(response=>{
    this.cars=response.data;
    if(this.cars.length==0){
      this.toastrService.warning("Car couldn't found!","Error");
    }
  })
}
}