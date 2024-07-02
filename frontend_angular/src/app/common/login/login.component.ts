import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;
  id: any; // coz it's void before logging in
  name: any;
  Email:any;

  constructor(private userServ: UsersService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);

    if (
      this.loginForm.value.email == null ||
      this.loginForm.value.password == null
    ) {
      alert('Please enter your credentials');
    } else {
      //  Checking login credentials
      this.userServ.userLogin(this.loginForm.value).subscribe((data) => {
        //Checking user registered or not
        if (data.message == 'invalid combination of credentials') {
          //  this.errorMessage = "Incorrect credentials, try again?";
          alert('Incorrect credentials, try again');
        } else if (data.message[0].role == 'user') {
          sessionStorage.setItem('userId', data.message[0].userId);
          sessionStorage.setItem('name', data.message[0].name);
          sessionStorage.setItem('Email',data.message[0].email);
          console.log(this.id);

          this.id = sessionStorage.getItem('userId')
          this.name = sessionStorage.getItem('name');
          this.Email = sessionStorage.getItem('Email');

          this.router.navigate(['User']);
        } else {
          sessionStorage.setItem('userId', data.message[0].userId);
          sessionStorage.setItem('name', data.message[0].name);
          sessionStorage.setItem('Email',data.message[0].email);
          console.log(this.id);

          this.id = sessionStorage.getItem('userId');
          this.name = sessionStorage.getItem('name');
          this.Email = sessionStorage.getItem('Email');

          this.router.navigate(['Admin']);
        }
      });
    }

    this.loginForm.reset();
  }

  onLogOut() {
    sessionStorage.clear();
    this.id = '';
    this.name = '';
  }

}


