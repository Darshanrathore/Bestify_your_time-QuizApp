import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-guessthemovie',
  templateUrl: './guessthemovie.component.html',
  styleUrls: ['./guessthemovie.component.scss']
})
export class GuessthemovieComponent implements OnInit {

  movies:any;
  hiddenMovie:any;
  currentMovie:any;
  noOfTries=5;
  inputLetter:any;
  showResult:boolean;
  gameStart:boolean;
  gussedLetters:any;
  guessedMovies:any;

  userId : any;
  gameId : number = 1;

  movieHighscore : any;

  constructor(private _router: Router,private _route: ActivatedRoute, private gameServ : GameService) {


    this.userId = sessionStorage.getItem("userId");

    this.movies=["lord of the rings","the hobbits","transformers","harry potter","avengers","baby","zindagi na milegi dobara","wednesday","rustom","3 idiots","pirates of the caribbean","jumaji","star wars","captain america","sarkar raj","total recall","rab ne bana di jodi","interstellar","rudramadevi","son of satyamurthy","spyder" ];
    this.hiddenMovie=[];
    this.currentMovie=[];
    this.gussedLetters=[];
    this.inputLetter="";
    this.showResult=false;
    this.gameStart=true;
    this.guessedMovies=0;
    this.inItGame();


    this.gameServ.getGamesHighScore(this.gameId).subscribe((data)=>{
      this.movieHighscore = data.data;
    })

   }

  ngOnInit(): void {
  }
  //intialize the game
inItGame(){
  let randomIndex=Math.floor(Math.random()*((this.movies.length-1)+1));
    this.currentMovie=this.movies[randomIndex];
  for(let i=0;i<this.currentMovie.length;i++){
    if(this.isVowel(this.currentMovie.charAt(i)) || this.currentMovie.charAt(i)==" "){
      this.hiddenMovie.push(this.currentMovie.charAt(i));
    }
    else{
      this.hiddenMovie.push("_")
    }
  }
}

//go back to category
back(){
  this._router.navigate(['../../games'], {relativeTo: this._route});
 }
//givingInput and decreasing no of tries out of 5
tryIt(){
  let indexOfLetter=[];
if(this.currentMovie.includes(this.inputLetter.toLowerCase())){
for(let i=0;i<this.currentMovie.length;i++){
  if(this.currentMovie[i]==this.inputLetter.toLowerCase()){
    indexOfLetter.push(i);
  }
}
for(let i=0;i<indexOfLetter.length;i++){
  this.hiddenMovie[indexOfLetter[i]]=this.inputLetter;
}
}
else{
  this.noOfTries--;
  this.gussedLetters.push(this.inputLetter);
  if(!this.noOfTries){
    this.showResult=true;
    this.gameStart=false;
    alert("Game Over...");
    setTimeout(()=>{
      // window.location.reload();
    },2000);
  }
}
if(!this.hiddenMovie.includes("_")){
  this.showResult=true;
  this.gameStart=false;
  this.guessedMovies++;
}
}
//Play again
playAgain(){
  this.hiddenMovie=[];
  this.gameStart=true;
  this.showResult=false;
  this.inItGame();
}
//Check whether the letter is Vowel or not
isVowel(letter:any):Boolean{
  if(letter==="a"|| letter==="e" || letter==="i" || letter==="o" || letter==="u"){
    return true;
  }
  else{
    return false;
  }
}


submitScore() {

  let record = {
  
    gscore: this.guessedMovies
  };

  this.gameServ.postGameRecord(this.userId,this.gameId,record).subscribe((data)=>{{

    alert("Your score is submitted");
  }})

  window.location.reload();
}

}
