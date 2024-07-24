import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  appName!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.appName = "Foodie Delight"
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
