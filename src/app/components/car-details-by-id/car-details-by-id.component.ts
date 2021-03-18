import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Image } from 'src/app/models/image';
import { CarService } from 'src/app/services/car.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-car-details-by-id',
  templateUrl: './car-details-by-id.component.html',
  styleUrls: ['./car-details-by-id.component.css']
})
export class CarDetailsByIdComponent implements OnInit {

  cars:Car[];
  images:Image[];
  imagesPaths:string[];
  currentCar:Car;
  imageUrl="https://localhost:44369/";
  
  constructor(private imageService:ImageService,
    private carService:CarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
      if(params["carId"]){
        this.getCarsById(params["carId"]);
        this.getImagesById(params["carId"]);
      }
    })
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  getCarsById(id:number){
    this.carService.getCarsById(id).subscribe(response=>{
      this.cars=response.data;
      console.log(response);
    })
  }

  getImagesById(id:number){
    this.imageService.getImagesById(id).subscribe(response=>{
      this.images=response.data;
      console.log(response);
    })
  }
}
