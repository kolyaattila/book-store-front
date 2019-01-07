import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import{StoreComponent} from './store/store.component';
import { LoginComponent } from './login/login.component';
import {AdminComponent} from './admin/admin.component'
import { ErrorComponent } from './error/error.component';
import{ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import { RoleGuradService } from './role-gurad-service.service';


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
    component:LoginComponent
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
  path:'admin',
  component:AdminComponent,
//  canActivate: [RoleGuradService],
//  data:{
//    expectedRole: 'admin'
 // }
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
