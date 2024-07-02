import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
games:any;

  constructor(private router:Router,private gameServe:GameService, private activeroute:ActivatedRoute) {
    //Getting all categories from database
    this.gameServe.getAllGame().subscribe((data)=>{this.games=data.data});

    console.log(this.games);
   }

   //When admin click on view admin will be navigated to view quiz in particular category
   playgame(gid:any){
    this.router.navigate(['../playgame/'+gid], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }


}
