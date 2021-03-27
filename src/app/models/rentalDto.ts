export interface  RentalCarDetailDto{
    id:number;
    carId:number;
    customerId:number,
    customerName:string;
    companyName:string;
    brandName:string;
    carModel:string;
    colorName:string;
    modelYear:number;
    rentDate:Date;
    returnDate:Date;
}