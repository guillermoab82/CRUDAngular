import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { AddemployeeComponent } from "./addemployee/addemployee.component";
const routes: Routes = [
  { path: "employee", component: EmployeeComponent, pathMatch:'full'},
  { path: "addemployee", component: AddemployeeComponent, pathMatch:'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
