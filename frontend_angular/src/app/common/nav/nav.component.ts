import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  scrollToCat() {
    let scrollElement=(<HTMLInputElement>document.getElementById('categories'));
    scrollElement.scrollIntoView();
  }

  scrollToAU() {
    let scrollElement=(<HTMLInputElement>document.getElementById('about'));
    scrollElement.scrollIntoView();
  }

  onRegister() {
    this.router.navigate(['signup']);
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
