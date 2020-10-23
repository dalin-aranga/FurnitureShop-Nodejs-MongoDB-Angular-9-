import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import { Customer} from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  selectedCustomer : Customer;
  customer : Customer[]; // mongo database data save this array
  readonly baseUrl ="http://localhost:3000/customer";

  constructor(private http : HttpClient) { }

  postCustomer(customeremp: Customer){
    return this.http.post(this.baseUrl,customeremp);
  }
  getCustomerList(){
    return this.http.get(this.baseUrl);
  }

  putCustomer(customeremp:Customer){
    return this.http.put(this.baseUrl +  `/${customeremp._id}`,customeremp);
  }
  deleteCustomer(_id:string){
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
