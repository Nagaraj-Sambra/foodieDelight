import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-lists',
  templateUrl: './restaurant-lists.component.html',
  styleUrls: ['./restaurant-lists.component.scss']
})
export class RestaurantListsComponent {

  restuarantLists:any
  restaurantForm: FormGroup;
  @ViewChild('restaurantModal') restaurantModal!: ElementRef;

  username: any;

  constructor(private router: Router, private modalService: NgbModal, private fb: FormBuilder, private restService: RestaurantServiceService) {
    this.restaurantForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      joinedDate: ['', Validators.required],
      ratings: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.fetchAllRestaurants();
  }

  fetchAllRestaurants() {
    this.restuarantLists = this.restService.getAllRestaurantsList()
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const formValue = this.restaurantForm.value;
      const id = formValue.id.trim();
    
      const index = this.restuarantLists.findIndex((restaurant: any) => restaurant.id === id);
 
      if (index > -1) {
        this.restuarantLists[index] = formValue;
      } else {
        this.restuarantLists.push(formValue);
      }
      
      if (this.restaurantModal) {
        this.restaurantModal.nativeElement.click();
      }
      this.modalService.dismissAll();
      this.restaurantForm.reset();
    }
  }
  

  onEdit(restaurant: any) {
    this.restaurantForm.patchValue({
      id: restaurant.id,
      name: restaurant.name,
      location: restaurant.location,
      joinedDate: restaurant.joinedDate,
      ratings: restaurant.ratings
    });
  
    if (this.restaurantModal) {
      this.restaurantModal.nativeElement.click();
    }
  }

  onDelete(id:number) {
    this.restuarantLists = this.restuarantLists.filter((restaurant:any)=> restaurant.id !== id);
  }
  
  onLogout() {
    this.router.navigate([''])
  }
}
