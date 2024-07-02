import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-playedgameslist',
  templateUrl: './playedgameslist.component.html',
  styleUrls: ['./playedgameslist.component.scss']
})
export class PlayedgameslistComponent implements OnInit {

  gamers:any=[];
  catId:any;
  gid:any;
  quizName:any;

  constructor(private router:Router, private activeroute:ActivatedRoute, private gameServ : GameService) {
    //getting category cid and qidfrom url
    this.catId = activeroute.snapshot.params.catId;
    this.gid = activeroute.snapshot.params.gid;


    this.gameServ.getGamersList(this.gid).subscribe((data)=>{
      this.gamers= data.data

      console.log(this.gamers);
    })

    // this.quizService.getOptedUsersList(this.qid).subscribe((data:any)=>{
    //   this.users = data.data

    //   console.log(this.gamers);
    // })

    // //getting quiz from database
    // this._quizService.getQuizByQuizid(this.catId,this.qid).subscribe((data:any)=>{
    //   this.quizName=data.data[0].quizName
    // })
    // let allReecord={
    //   "boardTime":"all",
    //   }
    //   //getting all users opted this quiz
    // this._quizService.leaderboard(this.qid,allReecord).subscribe((data:any)=>{
    //   this.users=data.data;
    // });
   }

  //go back to category
  back(){
    this.router.navigate(['../../admin-games'], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }

}
