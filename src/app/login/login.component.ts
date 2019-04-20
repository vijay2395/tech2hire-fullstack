import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ' '
  email = ''
  errorMessage = 'Please fill all fields'
  invalidLogin = false


  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.email)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username,this.email])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }




}
