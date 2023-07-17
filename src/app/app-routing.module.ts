import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AHomeComponent } from './a-home/a-home.component';
import { AAboutComponent } from './a-about/a-about.component';
import { AContactComponent } from './a-contact/a-contact.component';
import { AProductComponent } from './a-product/a-product.component';
import { AProductsComponent } from './a-products/a-products.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:AHomeComponent},
  {path:'about', component:AAboutComponent},
  {path:'contact', component:AContactComponent},
  {path:'products', component:AProductsComponent},
  {path:'product/mouse', component:AProductComponent},
  {path:'product/keyboard', component:AProductComponent},
  {path:'product/charger', component:AProductComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
