import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup

  constructor(private usersServ: UsersService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl(null,[Validators.required, Validators.pattern("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$")]),
      password: new FormControl(null, Validators.required),
    });
  }

   onSubmit() {
    console.log(this.signupForm.value);

    if(this.signupForm.value.name==null || this.signupForm.value.password==null || this.signupForm.value.email==null){
      alert( "Please Enter Credentials");
    }

    else{

    this.usersServ.addUser(this.signupForm.value).subscribe((data) => {
      if (data.message) {
        console.log('Angular : User added successfully');
        alert(data.message);
        console.log('Node : ' + data.message);
      } else if (data.error) {
        console.log('Angular : User not added');
        alert(data.error);
        console.log('Node : ' + data.error);
      }
    });

    this.signupForm.reset();
  }
  
}


}
