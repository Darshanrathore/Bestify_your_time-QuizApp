import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favourites:any=[];
  userId:any;
  message:any;
  name : any;

  constructor(private quizServ : QuizService) {

    this.userId = sessionStorage.getItem('userId');
    this.name = sessionStorage.getItem("name");

    this.quizServ.getFavouriteQuiz(this.userId).subscribe((response)=>{
      this.favourites = response.data;
    })
   }

  ngOnInit(): void {
  }

  removeFromFav(qid:any,quizName :any) {

    if(confirm("Remove "+quizName+ " from Favorites ?")) {

      this.quizServ.deleteFromFavourite(this.userId,qid).subscribe((response)=>{

        if(response.message==='Quiz remove from favorite') {
          
          alert("Quiz "+quizName+ " removed from favorites");

        } else {
          this.message = response.message;
        }

        setTimeout(()=>{
          window.location.reload();
        },1000);
      })
    }

  }

}


// removeFavourites(qid:any,quizName:any){
//   if(confirm("Do you really want to remove "+quizName+" from favourites?")){
//    this._quizService.deleteFavourite(this.userId,qid).subscribe((data)=>{
//      if(data.message=="Quiz removed from favorite"){
//        this.message="Quiz removed from favorite";
//      }
//      else{
//        this.message=data.message;
//      }
//      setTimeout(()=>{
//        window.location.reload();
//      },1000);
     
//    })
//   }
//  }