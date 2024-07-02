import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adminstart',
  templateUrl: './adminstart.component.html',
  styleUrls: ['./adminstart.component.scss']
})
export class AdminstartComponent implements OnInit {

  users : number;
  quizes : number;

  constructor(private userServ : UsersService, private quizServ : QuizService) { 
    
    this.userServ.getUserCount().subscribe((response) => {
      this.users = response.data[0].userCount;

      console.log(this.users);
    })

    this.quizServ.quizCount().subscribe((response)=>{
      this.quizes = response.data[0].quizCount;
    })
  }

  ngOnInit(): void {
  }

}
