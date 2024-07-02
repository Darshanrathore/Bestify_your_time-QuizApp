import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-viewquizuser',
  templateUrl: './viewquizuser.component.html',
  styleUrls: ['./viewquizuser.component.scss']
})
export class ViewquizuserComponent implements OnInit {

  
  catId: any;
  
  QuizesByCategory: any;
  message: any;

  constructor(private router: Router,private activeroute: ActivatedRoute, private quizService: QuizService) {
    //getting category id from url
    this.catId = activeroute.snapshot.params.catId;
    this.quizService.getQuizByCategory(this.catId).subscribe((data) => {this.QuizesByCategory = data.data });
  }
  
  playQuiz(qid:any,catId:any){
   
      //if pending record found navigate user to pending menu
      
       //if pending record not found navigate user to pending menu
      
        this.router.navigate(['../../playquiz/'+ catId +'/'+qid], {relativeTo: this.activeroute});
      
    
   }
   Leaderboard(catId:any,qid: any){
    this.router.navigate(['../../highscore/'+catId+'/'+qid], {relativeTo: this.activeroute});
  }

  
 
  

  //go back to category
  goBack(){
    this.router.navigate(['../../quizcategory'], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }

}
