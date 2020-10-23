import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { from } from 'rxjs';
import {FurnitureService} from '../shared/furniture.service';

import {Furniture} from '../shared/furniture.model';

declare var M:any;

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrls: ['./furniturelist.component.css'],
  providers : [FurnitureService]
})
export class FurniturelistComponent implements OnInit {

  constructor(private furnitureService : FurnitureService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshFurnitureList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    
      this.furnitureService.selectedFurniture={
        _id:"",
        name :"",
        price : null,
        discount :null,
        color : "",
        avalibleCount :null,
        description : "",
      }

  }
  onSubmit(form: NgForm){
    if(form.value._id==""){
      this.furnitureService.postFurniture(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshFurnitureList();
        M.toast({html:'Save successfully',classes:'rounded'});
      });
    }
    else{
      this.furnitureService.putFurniture(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshFurnitureList();
        M.toast({html:'Updated successfully',classes:'rounded'});
      });

    }
  }
  refreshFurnitureList(){
    this.furnitureService.getFurnitureList().subscribe((res)=>{
      this.furnitureService.furniture=res as Furniture[];
    });
  }

  onEdit(furnitureemp:Furniture){
    this.furnitureService.selectedFurniture = furnitureemp;

  }
onDelete(_id:string, form:NgForm){
  if(confirm('Are you sure to detele this record ?')==true){
    this.furnitureService.deleteFurniture(_id).subscribe((res)=>{
      this.refreshFurnitureList();
      this.resetForm(form);
      M.toast({html:'Deleted Successfully',classes:'rounded'})

    });
  }
}

}
