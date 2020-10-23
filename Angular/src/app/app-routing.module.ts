import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerComponent } from './customer/customer.component';
import { FurniturelistComponent } from './furniturelist/furniturelist.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'aboutus',component:ProfileComponent},
{path:'contactus',component:ContactusComponent},
{path:'furniturelist',component:FurniturelistComponent},
{path:'staff',component:StaffComponent},
{path:'customer',component:CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
