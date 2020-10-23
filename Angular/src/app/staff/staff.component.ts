import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {StaffService} from '../shared/staff.service';

import {Staff} from '../shared/staff.model';


declare var M:any;

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers : [StaffService]

})
export class StaffComponent implements OnInit {

  constructor(public staffService : StaffService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshStaffList();
    
  }
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    
      this.staffService.selectedStaff={
        _id:"",
        name :"",
      status : "",
      age :null,
      workArea : "",
      address :"",
      joinDate : "",
      }

  }
  onSubmit(form: NgForm){
    if(form.value._id==""){
      this.staffService.postStaff(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshStaffList();
        M.toast({html:'Save successfully',classes:'rounded'});
      });
    }
    else{
      this.staffService.putStaff(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshStaffList();
        M.toast({html:'Updated successfully',classes:'rounded'});
      });

    }
  }
  refreshStaffList(){
    this.staffService.getStaffList().subscribe((res)=>{
      this.staffService.staff=res as Staff[];
    });
  }

  onEdit(staffemp:Staff){
    this.staffService.selectedStaff = staffemp;

  }
onDelete(_id:string, form:NgForm){
  if(confirm('Are you sure to detele this record ?')==true){
    this.staffService.deleteStaff(_id).subscribe((res)=>{
      this.refreshStaffList();
      this.resetForm(form);
      M.toast({html:'Deleted Successfully',classes:'rounded'})

    });
  }
}
  

}
