import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = "";
  password = "";
  errorMsg = "";
  constructor() { }

  ngOnInit(): void {

  }

  login() {
    if(this.userName.trim().length === 0) {
      this.errorMsg = "UserName is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
    }
  }
}

