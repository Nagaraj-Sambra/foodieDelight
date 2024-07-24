import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginMode:boolean = true;

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  onModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  onSubmit() {
    let username = this.loginForm.value.username;
    localStorage.setItem('username', username)
    this.router.navigate(['/restaurant/dashboard']);
  }
}
