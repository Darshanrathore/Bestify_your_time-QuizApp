import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-gamehighscore',
  templateUrl: './gamehighscore.component.html',
  styleUrls: ['./gamehighscore.component.scss']
})
export class GamehighscoreComponent implements OnInit {

  
  gid:any;

  quizName:any;
  allTime:any=[];
  daily:any=[];

  highScore:any=[];


  constructor(private router :Router,private activeroute : ActivatedRoute, private gameServ : GameService) {

    //getting category catId, qid from URL
   
    this.gid = activeroute.snapshot.params.gid;

    this.gameServ.getGamesHighScore(this.gid).subscribe((data)=>{
      this.highScore = data.data;
    })





    // this.quizService.getHighScore(this.qid).subscribe((data:any)=>{
    //   this.userScore = data.data;

    //   this.Name = this.userScore[0].name;
    //   this.Score = this.userScore[0].score;

    // })

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
    this.router.navigate(['../../admin-games'], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }

}
