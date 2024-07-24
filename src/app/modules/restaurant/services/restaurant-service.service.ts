import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  orders:any;
  restuarants:any
  dishes:any
  stats:any

  url: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { 

    this.restuarants = [
      {
        id: 111,
        name: 'Shadab',
        location: 'Ameerpet',
        joinedDate: new Date("05/10/1989"),
        ratings: 4
      },
      {
        id: 222,
        name: 'Kritunga',
        location: 'Jubilee Hills',
        joinedDate: new Date("04/18/1999"),
        ratings: 5
      },
      {
        id: 333,
        name: 'Meridian',
        location: 'Gachibowli',
        joinedDate: new Date("08/22/2000"),
        ratings: 5
      },
      {
        id: 444,
        name: 'Shivaji Military Hotel',
        location: 'Madhapur',
        joinedDate: new Date("01/26/1996"),
        ratings: 4
      },
      {
        id: 555,
        name: 'Pista House',
        location: 'Uppal',
        joinedDate: new Date("10/22/2002"),
        ratings: 4
      }
    ]

    this.orders = [
      {
        id: 1,
        name: 'French Fries',
        cName: 'Nagaraj',
        location: 'Ameerpet',
        status: 'Pending',
        dTime: '10:30 AM',
        price: 1000
      },
      {
        id: 2,
        name: 'Pizza',
        cName: 'Virat',
        location: 'Gachibowli',
        status: 'Delivered',
        dTime: '11:30 AM',
        price: 2000
      },
      {
        id: 3,
        name: 'Chicken Tikka',
        cName: 'Vidya B',
        location: 'Moti Nagar',
        status: 'Pending',
        dTime: '8:30 PM',
        price: 600
      },
      {
        id: 4,
        name: 'Dum biryani',
        cName: 'Raghu',
        location: 'Madhapur',
        status: 'Cancelled',
        dTime: '3:30 PM',
        price: 500
      },
      {
        id: 5,
        name: 'French Fries',
        cName: 'Rupa',
        location: 'Kumta Nakha',
        status: 'Delivered',
        dTime: '10:30 AM',
        price: 500
      },
      {
        id: 6,
        name: 'Mutton Biryani',
        cName: 'Arathi',
        location: 'Saidapur',
        status: 'Delivered',
        dTime: '10:30 AM',
        price: 500
      },
      {
        id: 7,
        name: 'Veg Biryani',
        cName: 'Bhima S',
        location: 'Solapur',
        status: 'Pending',
        dTime: '12:30 PM',
        price: 1000
      },
      {
        id: 8,
        name: 'French Fries',
        cName: 'Nagaraj',
        location: 'Borabanda',
        status: 'Pending',
        dTime: '10:30 AM',
        price: 100
      },
      {
        id: 9,
        name: 'Fried Rice',
        cName: 'Roopa',
        location: 'Yadgir',
        status: 'Delivered',
        dTime: '07:30 AM',
        price: 100
      },
      {
        id: 10,
        name: 'Apricot Delight',
        cName: 'Renuka',
        location: 'SR Nagar',
        status: 'Cancelled',
        dTime: '08:30 PM',
        price: 100
      },
      {
        id: 11,
        name: 'French Fries',
        cName: 'Nagaraj',
        location: 'Ameerpet',
        status: 'Pending',
        dTime: '10:30 AM',
        price: 1000
      },
      {
        id: 12,
        name: 'French Fries',
        cName: 'Nagaraj',
        location: 'Ameerpet',
        status: 'Pending',
        dTime: '10:30 AM',
        price: 1000
      }
    ];

    this.dishes = [
      { name: 'Pizza', percentage: 30, colorClass: 'bg-success' },
      { name: 'Burger', percentage: 40, colorClass: 'bg-primary' },
      { name: 'Biryani', percentage: 60, colorClass: 'bg-danger' },
      { name: 'Sweet', percentage: 90, colorClass: 'bg-warning' }
    ];

    this.stats = [
      { title: 'Sells', value: 1000, percentage: '3.2%', badgeClass: 'badge-primary' },
      { title: 'Total Visitors', value: 2000, percentage: '3.2%', badgeClass: 'badge-warning' },
      { title: 'New Users', value: 4000, percentage: '3.2%', badgeClass: 'badge-success' },
      { title: 'Total Orders', value: 8000, percentage: '3.2%', badgeClass: 'badge-danger' }
    ];
  }

  getAllOrdersList() {
    return this.orders;
  }

  getAllRestaurantsList() {
    return this.restuarants;
  }

  getAllCustomers() {
    return this.http.get(this.url)
  }

  getAllDishes() {
    return this.dishes;
  }

  getRestorantsStats() {
    return this.stats;
  }
}
