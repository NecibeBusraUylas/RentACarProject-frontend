import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  car : Car;
  customers: Customer[] = [];
  payments : Payment[] = [];
  customerName: string;
  cardNumber: string;
  expirationDate:string;
  price: number;
  securityCode:string;
  cardPassword: string;
  isCheck: boolean=false;
  rental:Rental;

  @Input() rent: Rental

  @Input() carForRent: Car
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if (params["rental"]) {
        this.rental = JSON.parse(params["rental"]);      
      }
    })
  }

  addPayment(){
      let newPayment: Payment = {
      cardNumber: this.cardNumber,
      expirationDate : this.expirationDate,
      securityCode : this.securityCode,
      customerName:this.customerName,
      cardPassword:this.cardPassword
    };
    this.paymentService.addPayment(newPayment);
    this.rentalService.addRental(this.rental);
    this.router.navigate(["cars/"]);
    this.toastrService.success("Successfully paid!");
  }
}
