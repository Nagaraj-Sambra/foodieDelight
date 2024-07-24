import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RestaurantListsComponent } from './components/restaurant-lists/restaurant-lists.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'restaurantList', component: RestaurantListsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customers', component: CustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
