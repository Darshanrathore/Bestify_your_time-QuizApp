import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router : Router) { }

  logOutUser(){
    sessionStorage.clear();
    this.router.navigate(['start']);
  }

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


}
