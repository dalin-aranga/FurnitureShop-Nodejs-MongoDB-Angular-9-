import { Component, OnInit } from '@angular/core';

import {  NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {CustomerService} from '../shared/customer.service';

import {Customer} from '../shared/customer.model';


declare var M:any;


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers : [CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(public customerService : CustomerService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshCustomerList();
  }
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    
      this.customerService.selectedCustomer={
        _id:"",
        name :"",
        orderName : "",
        distric :null,
        phoneNumber : null,
      address :"",
      totalPrice  : null,
      }

  }
  onSubmit(form: NgForm){
    if(form.value._id==""){
      this.customerService.postCustomer(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshCustomerList();
        M.toast({html:'Save successfully',classes:'rounded'});
      });
    }
    else{
      this.customerService.putCustomer(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshCustomerList();
        M.toast({html:'Updated successfully',classes:'rounded'});
      });

    }
  }
  refreshCustomerList(){
    this.customerService.getCustomerList().subscribe((res)=>{
      this.customerService.customer=res as Customer[];
    });
  }

  onEdit(customeremp:Customer){
    this.customerService.selectedCustomer = customeremp;

  }
onDelete(_id:string, form:NgForm){
  if(confirm('Are you sure to detele this record ?')==true){
    this.customerService.deleteCustomer(_id).subscribe((res)=>{
      this.refreshCustomerList();
      this.resetForm(form);
      M.toast({html:'Deleted Successfully',classes:'rounded'})

    });
  }
}

}
