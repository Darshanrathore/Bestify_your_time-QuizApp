import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Router} from'@angular/router';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-usertp',
  templateUrl: './usertp.component.html',
  styleUrls: ['./usertp.component.scss']
})
export class UsertpComponent implements OnInit {

  userId : any;
  quizName: string;
  // questionCount: number = 60;
  totalQuestions: number;
  toatalTime: number;
  minutes: number;
  seconds: number;

  // showResult: boolean = true;

  // index: any;
  // indexOfQuestion: any;

  time: number;

  catId: number ;
  qid: number ;

  question: any;
  totalMarks: any;

  showResult: boolean = true;
  questionCount: any = 1;

  submitted: boolean = false;
  disable: boolean = false;
  marks: number;
  correctAnswer;

  isFinish: boolean = false;

  constructor(private quizServ: QuizService ,private router: Router,private activeroute:ActivatedRoute) {

    this.userId = sessionStorage.getItem("userId");
    
    this.catId=activeroute.snapshot.params.catId;
    this.qid=activeroute.snapshot.params.qid;
    this.marks = 0;
    this.correctAnswer = 0;
    this.totalMarks = 0;

    this.time = this.toatalTime * 60;
    this.minutes = Math.floor(this.time / 60);
    this.seconds = (this.time % 60);
    this.timer();

    console.log('Hello ');

    quizServ.getQuizByQuizid(this.catId, this.qid).subscribe((data: any) => {
      this.toatalTime = data.data[0].time;
      this.time = this.toatalTime * 60;
      this.minutes = Math.floor(this.time / 60);
      this.seconds = this.time % 60;
      this.quizName = data.data[0].quizName;
    });

    // getting questions related to particular quiz
    quizServ
      .getQuestionByCategoryAndQuiz(this.catId, this.qid)
      .subscribe((data) => {
        this.question = data.data;

        console.log(this.question);

        data.data.forEach((element: any) => {
          this.totalMarks += Number(element.marks);
        });
        this.totalQuestions = data.data.length;
      });
    let record = {
      remainigTimeInSeconds: 0,
      score: 0,
      attemptQuestions: 0,
      status: 'pending',
    };
    this.quizServ
      .postPendingRecord(sessionStorage.getItem('id'), this.qid, record)
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit(): void {}

  
  

  // //moving user to next question
  next() {
    this.submitted = false;
    this.disable = false;
    this.questionCount++;
  }
  // //When user clicks on pause the test willl be saved and moving user to view quiz page
  // pause() {
  //   this.isFinish = true;
  //   this._router.navigate(['../../../display-category'], {
  //     relativeTo: this._route,
  //   });
  // }
  // //Submit the quiz after completion and store results in database and display results
  finish() {
    this.isFinish = true;
    this.showResult = true;
    let record = {
      // remainigTimeInSeconds: this.time,
      score: this.marks,
      // attemptQuestions: this.questionCount,
      // status: 'complete',
    };

    console.log(this.userId);
    console.log(this.marks);
    console.log(record);

    // let emailRecord = {
    //   totalMarks: this.totalMarks,
    // };
    this.quizServ
      .postQuizeRecord(this.userId, this.qid, record)
      .subscribe((data: any) => {
      
        alert("Score submitted");
      });
  }
  // //Displaying correct and wrong options to user and marks calculation
  clicked(id: any, answer: any, marks: any) {
    this.submitted = true;
    this.disable = true;
    if (eval(id + 1) == answer) {
      ++this.correctAnswer;
      this.marks = Number(marks) + this.marks;
    }
    let record = {
      remainigTimeInSeconds: this.time,
      score: this.marks,
      attemptQuestions: this.questionCount,
      status: 'pending',
    };
    // this.quizServ
    //   .patchQuizeRecord(sessionStorage.getItem('id'), this.qid, record)
    //   .subscribe();
  }

  timer(){
    this.minutes = Math.floor(this.time / 60);
    this.seconds = (this.time % 60);
    this.time--;
    if (this.minutes == 0 && this.seconds == 0) {
      alert("Time is over");
    }
    else {
      if(!this.isFinish)
      setTimeout(this.timer.bind(this), 1000);
    }
  }

  goBack(){
    this.router.navigate(['../../../viewquizuser/'+this.catId], {relativeTo: this.activeroute});
    
   }

}






