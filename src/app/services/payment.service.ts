import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

  addPayment(payment:Payment){
    let newPath=environment.apiUrl + "payments/add";  
    return this.httpClient.post(newPath,payment);
  }

  getPayments():Observable<ListResponseModel<Payment>>{
    let newPath=environment.apiUrl + "payments/getall";
    return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  }
}