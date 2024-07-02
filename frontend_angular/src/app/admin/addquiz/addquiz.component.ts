import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.scss']
})
export class AddquizComponent implements OnInit {

  addQuizForm:FormGroup;
  errorMessage:any;

  constructor(private router:Router, private activeroute: ActivatedRoute,private quizService:QuizService) {
    //Validating new quiz form
    this.addQuizForm = new FormGroup({
      'quizName': new FormControl("",[Validators.required, Validators.minLength(3),]),
      'catId': new FormControl(),
      'difficulty': new FormControl(),
      'time': new FormControl(0,[Validators.required])
    });
  }

    addQuiz(){
      if(this.addQuizForm.value.quizName==null || this.addQuizForm.value.catId==null || this.addQuizForm.value.difficulty==null || this.addQuizForm.value.time==null){
        this.errorMessage="All fields are required";
      }
      else{
        this.quizService.addQuiz(this.addQuizForm.value,this.addQuizForm.value.catId).subscribe((data)=>{

          
          if(data.message=="Quiz added successfully"){
          

            alert("Quiz "+this.addQuizForm.value.quizName+" added successfully!");
            this.router.navigate(['../addquestion/'+this.addQuizForm.value.catId+"/"+data.qid.insertId], {relativeTo: this.activeroute});
          }
          else if(data.error="Quiz name already taken"){
            this.errorMessage=data.error;
          }
          else{
            this.errorMessage="Please give correct inputs";
          }
        });
      }
    }
  
  

  ngOnInit(): void {
  }

}
