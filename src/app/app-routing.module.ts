import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
 {path:'',component:AddcustomerComponent},
 {path:'attendance', component:AttendanceComponent},
 {path:'info',component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
