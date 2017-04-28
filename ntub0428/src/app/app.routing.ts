import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { DetailComponent } from "app/detail/detail.component";

export const router:Routes = [
    {path:'login', component:LoginComponent},
    {path:'login/:token', component:LoginComponent},
    {path:'detail', component:DetailComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);