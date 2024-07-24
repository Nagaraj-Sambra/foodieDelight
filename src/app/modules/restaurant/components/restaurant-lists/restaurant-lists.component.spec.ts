import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListsComponent } from './restaurant-lists.component';

describe('RestaurantListsComponent', () => {
  let component: RestaurantListsComponent;
  let fixture: ComponentFixture<RestaurantListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
