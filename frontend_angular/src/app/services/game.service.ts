import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllGame(): Observable<any> {
    return this.http.get(this.url + "/game");
  }

  postGameRecord(userId: any, gid: any, gscore:any) : Observable<any> {
    console.log("Post Game function called");
   return this.http.post(this.url + "/gamedata/" + userId + "/" + gid, gscore);
 }

 getGamersList(gid:any) :Observable<any> {
  return this.http.get(this.url + "/gamedata"+"/list/" + gid);
 }

 getGamesHighScore(gid:any) :Observable<any> {
   return this.http.get(this.url + "/gamedata"+"/highscore/"+gid);
 }
  
}
