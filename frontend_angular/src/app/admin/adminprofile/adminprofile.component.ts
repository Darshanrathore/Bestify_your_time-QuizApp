import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {

  adminProfile:FormGroup;
  enableFormField:boolean;
  
  updateMessage:any;
  user:any;

  id:any;
  name:any;
  Email:any;

  constructor() {
    
    //getting user id from session storage
    this.id=sessionStorage.getItem('userId');
    this.name = sessionStorage.getItem("name");
    this.Email = sessionStorage.getItem("Email");
    //Validating Update form
    this.adminProfile = new FormGroup({
      'name': new FormControl("",[Validators.required, Validators.maxLength(25)]),
      'email': new FormControl( "",[Validators.required, Validators.pattern("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")]),
      'phone': new FormControl("",[Validators.required, Validators.pattern("(0/91)?[7-9][0-9]{9}")])
    });
    //setting original values into update form
   
   }

 
  ngOnInit(): void {
    
  }
}
