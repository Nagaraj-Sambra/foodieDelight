import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeItem: string = '';

  constructor(private router: Router) {

  }

  items = [
    { key: 'dashboard', icon: 'fa-tachometer', label: 'Dashboard' },
    { key: 'restaurantList', icon: 'fa-list', label: 'Restaurant List' },
    { key: 'orders', icon: 'fa-first-order', label: 'Orders' },
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
}
