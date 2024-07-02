import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-admintp',
  templateUrl: './admintp.component.html',
  styleUrls: ['./admintp.component.scss']
})
export class AdmintpComponent implements OnInit {

name:any;
 id:any;

  constructor(private router: Router,
) { 
 this.name=sessionStorage.getItem('name');
this.id=sessionStorage.getItem('userid');

  }

  ngOnInit(): void {


  }

  onLogOut(){
    sessionStorage.clear()
    this.router.navigate(['']);

  }

}






