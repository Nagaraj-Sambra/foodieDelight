import { Component } from '@angular/core';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  customers: any;

  constructor(private restServ: RestaurantServiceService) {

  }

  ngOnInit() {
    this.fetchAllCustomers();
  }

  fetchAllCustomers() {
    this.restServ.getAllCustomers().subscribe((customer) => {
      this.customers = customer;
      console.log('all customers ===>', this.customers)
    })
  }
}
