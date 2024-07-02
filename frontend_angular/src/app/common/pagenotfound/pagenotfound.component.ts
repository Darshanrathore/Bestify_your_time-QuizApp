import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router:Router, private activeroute:ActivatedRoute) { }
 
  moveToHome(){
    this.router.navigate(['../../start'],{relativeTo:this.activeroute});
  }
 
  ngOnInit(): void {
  }

}
