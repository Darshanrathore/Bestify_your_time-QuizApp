import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.scss']
})
export class AdminnavComponent implements OnInit {

  name:any;
  constructor(private router : Router) { 
  this.name=sessionStorage.getItem('name');

  }

  ngOnInit(): void {
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
}
