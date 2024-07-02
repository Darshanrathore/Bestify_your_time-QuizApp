import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {

  catId:any;
  qid:any;
  quizName:any;
  allTime:any=[];
  daily:any=[];

  userScore:any=[];

  Name : any;
  Score: any;

  constructor(private router :Router,private activeroute : ActivatedRoute, private quizService:QuizService, private userServ : UsersService) {

    //getting category catId, qid from URL
    this.catId = activeroute.snapshot.params.catId;
    this.qid = activeroute.snapshot.params.qid;

    this.quizService.getHighScore(this.qid).subscribe((data:any)=>{
      this.userScore = data.data;

      this.Name = this.userScore[0].name;
      this.Score = this.userScore[0].score;

    })

    // this.quizService.getQuizByQuizid(this.catId,this.qid).subscribe((data:any)=>{
    //   this.quizName=data.data[0].quizName
    // })
    // let allTimeReecord={
    //   "boardTime":"all",
    //   "displayLimit":5
    //   }
    // this.quizService.leaderboard(this.qid,allTimeReecord).subscribe((data:any)=>{
    //   this.allTime=data.data;
    // });
    // let dailyRecord={
    //   "boardTime":"daily",
    //   "displayLimit":5
    //   }
    //   this.quizService.leaderboard(this.qid,dailyRecord).subscribe((data:any)=>{
    //     this.daily=data.data;
    //   });
   }

  //  sendMail()

  //  sendMail() {
  //   let user = {
  //     name: 'Vikrant',
  //     email: 'vikrantbhujbal9@gmail.com',
  //   };

  //   this.userServ.mail(user).subscribe((data) => {
  //     let res: any = data;

  //     console.log(`Mail sent to ${user.name}`);
  //     alert('Mail sent');
  //   });
  // }

  //go back to category
  back(){
    this.router.navigate(['../../../view-quiz/'+this.catId], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }
}
