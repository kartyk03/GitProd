import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DividerComponent } from './divider/divider.component';
import { TemplComponent } from './templ/templ.component';
import { AHomeComponent } from './a-home/a-home.component';
import { AContactComponent } from './a-contact/a-contact.component';
import { AAboutComponent } from './a-about/a-about.component';
import { HeaderComponent } from './header/header.component';
import { AProductsComponent } from './a-products/a-products.component';
import { AProductComponent } from './a-product/a-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,DividerComponent, 
    TemplComponent, AHomeComponent, 
    AContactComponent, AAboutComponent,
    HeaderComponent, AProductsComponent, 
    AProductComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
