import { Customer } from "./customer.model";
import { Training } from "./training.models";

export class Cart {
    customer: Customer;
    items : Map<number,Training>;

    constructor(){
        this.customer = new Customer("unknow", "", "", "", "");
        this.items = new Map<number,Training>();
    }
}