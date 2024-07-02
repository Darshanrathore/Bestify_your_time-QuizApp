import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-viewquiz',
  templateUrl: './viewquiz.component.html',
  styleUrls: ['./viewquiz.component.scss']
})
export class ViewquizComponent implements OnInit {

  catId: any;
  qid:any;
  QuizesByCategory: any;
  message: any;

  constructor(private router: Router,private activeroute: ActivatedRoute, private quizService: QuizService) {

    //getting category catId, qid from URL
    this.catId = activeroute.snapshot.params.catId;
    this.qid = activeroute.snapshot.params.qid;

    this.quizService.getQuizByCategory(this.catId).subscribe((data) => {this.QuizesByCategory = data.data });
  }

  usersList(qid:any, catId:any) {
    this.router.navigate(['../../attemptedusers/'+qid+'/'+catId], {relativeTo: this.activeroute});
  }

  highScore(qid:any, catId:any){
    this.router.navigate(['../../admin-highscore/'+qid+'/'+catId], {relativeTo : this.activeroute});
  }

  
  deleteAQuiz(quizId: any,categoryId:any, quizName:any) {
    if(confirm("Do you really want to delete "+quizName+" permanently?")){
    console.log(quizId+"   "+categoryId);
    this.quizService.deleteQuiz(categoryId, quizId).subscribe((data) => {

    
      if (data.message == "deleted successfully") {
        this.message = "Quiz deleted successfully";
      }
      
      else {
        this.message = data.error;
      }
      setTimeout(()=>{
        window.location.reload();
      },1000);
    })
  }
  }
  

  //go back to category
  goBack(){
    this.router.navigate(['../../viewquiztype'], {relativeTo: this.activeroute});
   }

  ngOnInit(): void {
  }

}
