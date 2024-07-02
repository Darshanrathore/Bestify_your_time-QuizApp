import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-admingame',
  templateUrl: './admingame.component.html',
  styleUrls: ['./admingame.component.scss']
})
export class AdmingameComponent implements OnInit {


  catId: any;
  qid:any;
  QuizesByCategory: any;
  message: any;

  games:any=[];



  constructor(private router: Router,private activeroute: ActivatedRoute, private gameServ : GameService) {

    //getting category catId, qid from URL
    this.catId = activeroute.snapshot.params.catId;
    this.qid = activeroute.snapshot.params.qid;

    // this.quizService.getQuizByCategory(this.catId).subscribe((data) => {this.QuizesByCategory = data.data });

    this.gameServ.getAllGame().subscribe((data)=>{
      this.games = data.data;
    })
  }

  usersList(gid:any) {
    this.router.navigate(['../playedgames/'+gid], {relativeTo: this.activeroute});
  }

  highScore(gid:any){
    this.router.navigate(['../gameshighscore/'+gid], {relativeTo : this.activeroute});
  }

  
  // deleteAQuiz(quizId: any,categoryId:any, quizName:any) {
  //   if(confirm("Do you really want to delete "+quizName+" permanently?")){
  //   console.log(quizId+"   "+categoryId);
  //   this.quizService.deleteQuiz(categoryId, quizId).subscribe((data) => {

    
  //     if (data.message == "deleted successfully") {
  //       this.message = "Quiz deleted successfully";
  //     }
      
  //     else {
  //       this.message = data.error;
  //     }
  //     setTimeout(()=>{
  //       window.location.reload();
  //     },1000);
  //   })
  // }
  // }
  

  //go back to category
  goBack(){
    this.router.navigate(['../admin-home'], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }

}
