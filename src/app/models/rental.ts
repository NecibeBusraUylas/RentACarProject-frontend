export interface Rental{
    id?:number;
    carId: number;
    brandName?:string;
    customerId:number,
    rentDate:Date;
    returnDate:Date;
}