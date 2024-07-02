import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

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


}
