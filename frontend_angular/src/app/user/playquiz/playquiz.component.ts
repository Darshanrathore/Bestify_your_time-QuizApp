import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-playquiz',
  templateUrl: './playquiz.component.html',
  styleUrls: ['./playquiz.component.scss']
})
export class PlayquizComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    
  }

  // catId: any;
  // qid: any;
  // quizName: any;
  // totalQuestions: number;
  // questionCount: number;
  // toatalTime: number;
  // time: number;
  // minutes: number;
  // seconds: number;
  // question: any;
  // marks: number;
  // showResult: boolean;
  // submitted: boolean;
  // disable: boolean;
  // totalMarks: number;
  // correctAnswer: number;
  // isFinish:boolean;

  // constructor(private _router: Router, private _route: ActivatedRoute, private _quizService: QuizService) {
  //   this.catId = _route.snapshot.params.catId;
  //   this.qid = _route.snapshot.params.qid;
  //   this.toatalTime = 1;
  //   this.questionCount = 1;
  //   this.time = this.toatalTime * 60;
  //   this.minutes = Math.floor(this.time / 60);
  //   this.seconds = (this.time % 60);
  //   this.totalQuestions = 0;
  //   this.marks = 0;
  //   this.showResult = false;
  //   this.submitted = false;
  //   this.disable = false;
  //   this.totalMarks = 0;
  //   this.correctAnswer = 0;
  //   this.isFinish=false;
  //   this.timer();
  //   //getting particular quiz from data base 
  //   this._quizService.getQuizByQuizid(this.catId, this.qid).subscribe((data: any) => {
  //     this.toatalTime = data.data[0].time;
  //     this.time = this.toatalTime * 60;
  //     this.minutes = Math.floor(this.time / 60);
  //     this.seconds = (this.time % 60);
  //     this.quizName = data.data[0].quizName;
  //   });
  //   //getting questions related to particular quiz
  //   _quizService.getQuestionByCategoryAndQuiz(this.catId, this.qid).subscribe((data) => {
  //     this.question = data.data;
  //     data.data.forEach((element: any) => {
  //       this.totalMarks += Number(element.marks);
  //     });
  //     this.totalQuestions = data.data.length;
  //   });
  //   let record = {
  //     "remainigTimeInSeconds": 0,
  //     "score": 0,
  //     "attemptQuestions": 0,
  //     "status": "pending"
  //   }
  //   this._quizService.postPendingRecord(sessionStorage.getItem('id'), this.qid, record).subscribe((data)=>{console.log(data)});
  // }

  // ngOnInit(): void {
  // }

  // //setting quiz timer
  // timer(){
  //   this.minutes = Math.floor(this.time / 60);
  //   this.seconds = (this.time % 60);
  //   this.time--;
  //   if (this.minutes == 0 && this.seconds == 0) {
  //     alert("Time is over");
  //   }
  //   else {
  //     if(!this.isFinish)
  //     setTimeout(this.timer.bind(this), 1000);
  //   }
  // }

  // //moving user to next question
  // next() {
  //   this.submitted = false;
  //   this.disable = false;
  //   this.questionCount++;
  // }

  // //When user clicks on pause the test willl be saved and moving user to view quiz page
  // pause() {
  //   this.isFinish=true;
  //   this._router.navigate(['../../../display-category'], { relativeTo: this._route });
  // }

  // //Submit the quiz after completion and store results in database and display results
  // finish() {
  //   this.isFinish=true;
  //   this.showResult = true;
  //   let record = {
  //     "remainigTimeInSeconds": this.time,
  //     "score": this.marks,
  //     "attemptQuestions": this.questionCount,
  //     "status": "complete"
  //   }
  //   let emailRecord = {
  //     "totalMarks" : this.totalMarks
  //   }
  //   this._quizService.patchQuizeRecord(sessionStorage.getItem('id'), this.qid, record).subscribe((data:any)=>{
  //     if(data.message == "Updated successfully"){
  //       this._quizService.sendMail(sessionStorage.getItem('id'), this.qid, emailRecord).subscribe((data:any)=>{
  //         if(data.message=="Email Sent")
  //           alert("Result sent to your email");
  //       });
  //     }
  //   });
  // }

  // //Displaying correct and wrong options to user and marks calculation
  // clicked(id: any, answer: any, marks: any) {
  //   this.submitted = true;
  //   this.disable = true;
  //   if (eval(id + 1) == answer) {
  //     ++this.correctAnswer;
  //     this.marks = Number(marks) + this.marks;
  //   }
  //   let record = {
  //     "remainigTimeInSeconds": this.time,
  //     "score": this.marks,
  //     "attemptQuestions": this.questionCount,
  //     "status": "pending"
  //   }
  //   this._quizService.patchQuizeRecord(sessionStorage.getItem('id'), this.qid, record).subscribe();
  // }

}
