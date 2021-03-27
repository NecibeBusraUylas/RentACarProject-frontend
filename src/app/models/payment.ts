export interface Payment{
    id?:number,
    customerName: string;
    cardNumber:string;
    expirationDate:string;
    securityCode:string;
    cardPassword?: string;
}