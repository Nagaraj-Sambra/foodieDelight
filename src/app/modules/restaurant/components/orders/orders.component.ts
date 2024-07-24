import { Component } from '@angular/core';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  appName!:string
  orders:any = [];
  dishes:any = [];
  
  constructor(private restService: RestaurantServiceService) {}

  ngOnInit() {
    this.appName = "FoodieDelight"
    this.fetchAllOrders();
    this.fetchAllDishes();
  }

  fetchAllOrders() {
    this.orders = this.restService.getAllOrdersList();
  }

  fetchAllDishes() {
    this.dishes = this.restService.getAllDishes();
    console.log('dishes ==>', this.dishes)
  }
}
