import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-mousegame',
  templateUrl: './mousegame.component.html',
  styleUrls: ['./mousegame.component.scss']
})
export class MousegameComponent implements OnInit {

  gameTime:number;
  score:number;

  userId : any;
  gameId : number = 2;

  mouseHighscore : any;


  constructor(private router : Router, private activeroute : ActivatedRoute, private gameServ : GameService) { 

    this.userId = sessionStorage.getItem("userId");

    this.gameTime=10;
    this.score=0;

    this.gameServ.getGamesHighScore(this.gameId).subscribe((data)=>{
      this.mouseHighscore = data.data;

      console.log(this.mouseHighscore);
    })
  }

  ngOnInit(): void {
  }

  //go back to category
  back(){
    this.router.navigate(['../../games'], {relativeTo: this.activeroute});
   }
  
  timer(){
    this.gameTime--;
    console.log(this.gameTime);
    if(this.gameTime<0){
      alert("Time Over");
      // window.location.reload();
    }
    else{
      setTimeout(this.timer.bind(this),1000);
    }
  }
  onClick(){
    if(this.score==0){
      this.timer();
    }
    ++this.score;
  }

 
    

  submitScore() {

    let record = {
    
      gscore: this.score
    };

    this.gameServ.postGameRecord(this.userId,this.gameId,record).subscribe((data)=>{{

      alert("Your score is submitted");
    }})

    window.location.reload();
  }

 

}
