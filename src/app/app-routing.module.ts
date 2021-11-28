import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AboutComponent} from "./admin/about/about.component";
import {ProjectsComponent} from "./admin/projects/projects.component";
import {LoginComponent} from "./login/login.component";
import {CanActivateGaurdService} from "./can-activate-gaurd.service";

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[CanActivateGaurdService], data:{expectedRole:"admin"}},
  {path:"about", component:AboutComponent},
  {path: "project", component:ProjectsComponent, canActivate:[CanActivateGaurdService], data:{expectedRole:"Admin"}},
  {path:"", redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
