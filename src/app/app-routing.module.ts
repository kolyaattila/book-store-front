import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import{StoreComponent} from './store/store.component';
import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component'
import { ErrorComponent } from './error/error.component';
import{ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { RoleGuardService } from './role-guard-service.service';
import { RegistreComponent } from './registre/registre.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from './login-service.service';
import { AuthGuardService } from './auth-guard-service.service';



const routes: Routes = [
  {
    path:'store',
    component: StoreComponent
},
  {
    path:'about',
    component: AboutComponent
},
  {
    path:'contact',
    component:ContactComponent
},
  {
    path:'login',
    component:LoginComponent,
    canActivate:[AuthGuardService]
},
  {
    path:'shopping',
    component:ShoppingCartComponent
},
  {
    path:'',
    redirectTo:'store',
    pathMatch:'full'
},
  {
    path:'error',
    component:ErrorComponent //error
},
{
  path:'registre',
  component:RegistreComponent,
  canActivate:[AuthGuardService]
},
{
  path:'admin',
  component:AdminComponent,
  canActivate: [RoleGuardService],
  data:{
    expectedRole: 'admin'
  }
},
  {
    path:'**',
    component:ErrorComponent //notFound
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
