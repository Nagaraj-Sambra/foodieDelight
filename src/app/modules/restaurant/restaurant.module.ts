import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListsComponent } from './components/restaurant-lists/restaurant-lists.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePhonePipe } from 'src/app/shared/pipes/truncate-phone.pipe';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    RestaurantListsComponent,
    SidebarComponent,
    NavbarComponent,
    OrdersComponent,
    CustomersComponent,
    AgePipe,
    TruncatePhonePipe,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RestaurantModule { }
