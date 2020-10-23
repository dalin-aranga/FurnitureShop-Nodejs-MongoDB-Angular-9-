import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import { Staff} from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  selectedStaff : Staff;
  staff : Staff[]; // mongo database data save this array
  readonly baseUrl ="http://localhost:3000/staff";


  constructor(private http : HttpClient) { }
  postStaff(staffemp: Staff){
    return this.http.post(this.baseUrl,staffemp);
  }
  getStaffList(){
    return this.http.get(this.baseUrl);
  }

  putStaff(staffemp:Staff){
    return this.http.put(this.baseUrl +  `/${staffemp._id}`,staffemp);
  }
  deleteStaff(_id:string){
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
