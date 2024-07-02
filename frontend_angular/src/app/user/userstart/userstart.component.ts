import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-userstart',
  templateUrl: './userstart.component.html',
  styleUrls: ['./userstart.component.scss']
})
export class UserstartComponent implements OnInit {

  searchText:any;
  
  userId:any;
  searchQuiz: any;
  search : any;
  quizes : any=[];
  categories:any;
  message:any;
 
  constructor(private router:Router,private quizservice:QuizService, private activeroute:ActivatedRoute) {
    this.userId=sessionStorage.getItem('userId');
    //Getting all categories from database
    this.quizservice.getAllCategories().subscribe((data)=>{this.categories=data.data});
 
    this.quizservice.allQuizes().subscribe((data)=>{
      this.quizes = data.data;
    })

    console.log(this.userId)
   }

   addToFav(qid:any,quizName:any){
    this.quizservice.addToFavourites(this.userId,qid).subscribe((data)=>{

      if(data.message=="Quiz added to favorite list"){

        this.message="Quiz added to favorite list";

        alert('Quiz '+quizName+' added to Favorites');
      }
      else{
        this.message=data.message;
      }
      // setTimeout(()=>{
      //   window.location.reload();
      // },1000);
    })
  }
  ngOnInit(): void {
  }

}
