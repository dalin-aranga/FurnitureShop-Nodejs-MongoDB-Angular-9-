import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';



import { Furniture} from './furniture.model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  selectedFurniture : Furniture;
  furniture : Furniture[]; // mongo database data save this array
  readonly baseUrl ="http://localhost:3000/funiture";

  constructor(private http : HttpClient) { }

  postFurniture(furnitureemp: Furniture){
    return this.http.post(this.baseUrl,furnitureemp);
  }
  getFurnitureList(){
    return this.http.get(this.baseUrl);
  }

  putFurniture(furnitureemp:Furniture){
    return this.http.put(this.baseUrl +  `/${furnitureemp._id}`,furnitureemp);
  }
  deleteFurniture(_id:string){
    return this.http.delete(this.baseUrl + `/${_id}`);
  }



}
