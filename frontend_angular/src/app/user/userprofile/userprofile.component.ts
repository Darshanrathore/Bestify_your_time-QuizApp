import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  userprofile:FormGroup;
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
    this.userprofile = new FormGroup({
      'name': new FormControl("",[Validators.required, Validators.maxLength(25)]),
      'email': new FormControl( "",[Validators.required, Validators.pattern("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")]),
      'phone': new FormControl("",[Validators.required, Validators.pattern("(0/91)?[7-9][0-9]{9}")])
    });
    //setting original values into update form
   
    
   }

   //When admin clicks on update profile data will be updated in database
  editProfile(){
    
  }
  //The form is editable, when admin click on edit 
  enableForm(){
   
  }
  ngOnInit(): void {
    
  }

}
