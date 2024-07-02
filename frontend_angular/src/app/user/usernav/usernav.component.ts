import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss']
})
export class UsernavComponent implements OnInit {
  name:any;

  constructor(private router:Router) {
    this.name=sessionStorage.getItem('name');


   }

  onLogout() {
    this.router.navigate(['start']);
    sessionStorage.clear();
  }

  myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  ngOnInit(): void {
  }

}
