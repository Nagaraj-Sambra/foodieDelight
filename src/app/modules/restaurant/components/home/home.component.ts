import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  username: any;
  appName!: string;
  restaurantStats:any;
  
  constructor(private router: Router, private restServ: RestaurantServiceService) {
    this.username = localStorage.getItem('username')
  }

  ngOnInit() {
    this.appName = "FoodieDelight";
    this.fetchRestaurantStats();
  }

  activeItem: string = 'dashboard';

  items = [
    { key: 'dashboard', icon: 'fa-tachometer', label: 'Dashboard' },
    { key: 'orders', icon: 'fa-first-order', label: 'Orders' },
    { key: 'restaurantList', icon: 'fa-list', label: 'Restaurant List' },
    { key: 'customers', icon: 'fa-users', label: 'Customers' },
    { key: 'sales', icon: 'fa-shopping-bag', label: 'Sales' },
    { key: 'charts', icon: 'fa-line-chart', label: 'Charts' },
    { key: 'productsList', icon: 'fa-product-hunt', label: 'Products List' },
  ];

  setActiveItem(item: string): void {
    this.activeItem = item;
  }

  navigateTo(item: string): void {
    this.setActiveItem(item);
    this.router.navigate(['restaurant/'+item]);
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate([''])
  }

  fetchRestaurantStats() {
    this.restaurantStats = this.restServ.getRestorantsStats();
  }
}
