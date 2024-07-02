import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminfooter',
  templateUrl: './adminfooter.component.html',
  styleUrls: ['./adminfooter.component.scss']
})
export class AdminfooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToAU() {
    let scrollElement=(<HTMLInputElement>document.getElementById('about'));
    scrollElement.scrollIntoView();
  }

}
