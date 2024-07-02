import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quizcategory',
  templateUrl: './quizcategory.component.html',
  styleUrls: ['./quizcategory.component.scss']
})
export class QuizcategoryComponent implements OnInit {

  categories:any;

  constructor(private router:Router,private quizservice:QuizService, private activeroute:ActivatedRoute) {
    //Getting all categories from database
    this.quizservice.getAllCategories().subscribe((data)=>{this.categories=data.data});

    console.log(this.categories);
   }

   //When admin click on view admin will be navigated to view quiz in particular category
   viewQuiz(catId:any){
    this.router.navigate(['../viewquizuser/'+catId], {relativeTo: this.activeroute});
   }
   ngOnInit(): void {
     
   }

}
