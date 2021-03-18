import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl="http://localhost:44369/api"
  constructor(private httpClient:HttpClient) { }

  getImages():Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl + "CarImages/getall";
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }

  getImagesById(carId:number):Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl + "CarImages/getimagesbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }
}
