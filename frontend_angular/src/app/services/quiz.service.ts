import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  
  // Add a new Quiz
  addQuiz(addNewQuiz: any, catId: any): Observable<any> {
    return this.http.post(this.url + "/category/" + catId, addNewQuiz);
  }

  // All quiz types
  getAllCategories(): Observable<any> {
    return this.http.get(this.url + "/category");
  }
  
  getQuizByCategory(catId: any): Observable<any> {
    return this.http.get(this.url + "/category/" + catId);
  }

  // Delete any particular quiz
  deleteQuiz(catId: any, qid: any): Observable<any> {
    return this.http.delete(this.url + "/category/" + catId + "/" + qid);
  }

  //add Question
  addQuestion(addQuestion: any, catId: any, qid: any): Observable<any> {
    return this.http.post(this.url + "/category/" + catId + "/" + qid, addQuestion);
  }

  // Number of Quizes
  // quizCount(): Observable<any> {
  //   return this.http.get(this.url + "/quiz");
  // }
  quizCount(): Observable<any> {
    return this.http.get(this.url + "/quiz/count");
  }
 
  allQuizes() : Observable<any> {
    return this.http.get(this.url + "/quiz")
  }

  addToFavourites(userId: any, qid: any): Observable<any> {
    return this.http.post(this.url + "/favorite/" + userId + "/" + qid, null);
  }

   //Getting Favourites for particular user
   getFavouriteQuiz(userId: any): Observable<any> {
    return this.http.get(this.url + "/favorite/" + userId);
  }

  deleteFromFavourite(userId: any, qid: any): Observable<any> {
    return this.http.delete(this.url + "/favorite/" + userId + "/" + qid);
  }

  getQuestionByCategoryAndQuiz(catId: any, qid: any): Observable<any> {
    return this.http.get(this.url + "/category/" + catId + "/" + qid);
  }

  //get Particular quiz by qid
  getQuizByQuizid(catId: any, qid: any) {
    return this.http.get(this.url + "/quiz/" + catId + "/" + qid);
  }

  postPendingRecord(userId: any, qid: any,record:any) {
    return this.http.post(this.url + "/records/" + userId + "/" + qid, record);
  }

  // patchQuizeRecord(userId: any, qid: any, record:any) {
  //   return this.http.patch(this.url + "/records/" + userId + "/" + qid, record);
  // }

   postQuizeRecord(userId: any, qid: any, record:any) {
     console.log("function called");
    return this.http.post(this.url + "/quizdata/" + userId + "/" + qid, record);
  }

  //Send email to user
  sendMail(userId:any, qid: any,record:any) {
    return this.http.post(this.url + "/sender/" +userId+"/"+ qid , record);
  }

  //get all record quiz for particular user
  getHighScore(qid:any) {
    return this.http.get(this.url + "/quizdata/highscore/"+qid);
  }

  getHighscoreIndividual(qid:any, userId:any){
    return this.http.get(this.url + "/quizdata/highscoreindividual/"+qid+"/"+userId);
  }

   //post Leaderboard
   leaderboard(qid: any,record:any) {
    return this.http.post(this.url + "/quizdata/list/" + qid , record);
  }

  getOptedUsersList(qid:any) {
    return this.http.get(this.url + "/quizdata/list/"+qid);
  }
 
  
}
