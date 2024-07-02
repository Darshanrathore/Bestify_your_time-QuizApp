import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {

  addQuestionForm:FormGroup;
  options:any=[];
  catId:any;
  qid:any;
  message:any;

  constructor(private router:Router,private activeroute : ActivatedRoute, private quizService:QuizService) {
    //Getting category id quiz id from url
    this.catId= activeroute.snapshot.params.catId;
    this.qid=activeroute.snapshot.params.qid;
    this.addQuestionForm = new FormGroup({
      //Validating the question form
      'question': new FormControl("What is your name?",[Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      'option-1': new FormControl("option-1",[Validators.required]),
      'option-2': new FormControl("option-2",[Validators.required]),
      'option-3': new FormControl("option-3",[Validators.required]),
      'option-4': new FormControl("option-4",[Validators.required]),
      'answer': new FormControl("1",[Validators.required, ]),
      'marks': new FormControl("1",[Validators.required])
    });
  }
  //When admin click on save, Qustion will be added to database 
  questionsAdded(){
    //converting option in an array
    for(let index=1; index <5; index++){
      this.options.push(this.addQuestionForm.value["option-"+index]);
    }
    console.log(this.addQuestionForm);
    let addQuestion = {quesTitle:this.addQuestionForm.value.question,
              options:this.options,
              answer:this.addQuestionForm.value.answer,
              marks:this.addQuestionForm.value.marks
    }
    //Saving question in database
    this.quizService.addQuestion(addQuestion,this.catId,this.qid).subscribe((data)=>{
      if(data.message=="Question added successfully"){
        this.message=data.message;
      }
      else{
        this.message=data.error;
      }
    })
  }

  //When user click on submit button new quiz generation ended 
  submitQuiz(){
    this.router.navigate(['../../../add-quiz'], {relativeTo: this.activeroute});
    alert("Quiz Added Sucessfully");
  }

  ngOnInit(): void {
  }

}
