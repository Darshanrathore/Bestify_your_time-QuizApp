import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-attemptedusers',
  templateUrl: './attemptedusers.component.html',
  styleUrls: ['./attemptedusers.component.scss']
})
export class AttemptedusersComponent implements OnInit {

  users:any=[];
  catId:any;
  qid:any;
  quizName:any;

  constructor(private router:Router, private quizService:QuizService, private activeroute:ActivatedRoute) {
    //getting category cid and qidfrom url
    this.catId = activeroute.snapshot.params.catId;
    this.qid = activeroute.snapshot.params.qid;

    this.quizService.getOptedUsersList(this.qid).subscribe((data:any)=>{
      this.users = data.data

      console.log(this.users);
    })

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
    this.router.navigate(['../../../view-quiz/'+this.catId], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }


}
