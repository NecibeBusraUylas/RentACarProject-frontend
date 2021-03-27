import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalCarDetailDto } from '../models/rentalDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalCarDetailDto>>{
    let newPath = environment.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalCarDetailDto>>(newPath);
  }

  getRentalByCarId(id:number):Observable<ListResponseModel<Rental>>{
    let newPath = environment.apiUrl + "rentals/getbycarid?id="+id;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  addRental(rental:Rental){
    let newPath = environment.apiUrl+ "rentals/add"
    return this.httpClient.post(newPath,rental).subscribe();
  }
}
