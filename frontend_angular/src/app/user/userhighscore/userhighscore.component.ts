import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-userhighscore',
  templateUrl: './userhighscore.component.html',
  styleUrls: ['./userhighscore.component.scss']
})
export class UserhighscoreComponent implements OnInit {

  catId:any;
  qid:any;
  userId:any;
  quizName:any;
  allTime:any=[];
  daily:any=[];
  userScore:any=[];
  myScore:any[];

  constructor(private router :Router,private activeroute : ActivatedRoute, private quizService:QuizService) {

    //getting category catId and qidfrom url
    this.catId = activeroute.snapshot.params.catId;
    this.qid = activeroute.snapshot.params.qid;
    this.userId = sessionStorage.getItem('userId');

    quizService.getHighScore(this.qid).subscribe((data:any)=>{
      this.userScore=data.data;
      // this.allTime=data.data;
      console.log(this.userScore);
      console.log(this.userScore[0]);


      this.quizService.getHighscoreIndividual(this.qid,this.userId).subscribe((data:any)=>{
        this.myScore=data.data;

        console.log(this.myScore);
        console.log(this.myScore[0].score);
      })
    })

    // this.quizService.getHighScore(this.qid).subscribe((data:any)=>{
    //   this.userScore = data.data;

     


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


  //go back to category
  back(){
    this.router.navigate(['../../../viewquizuser/'+this.catId], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }

}
