import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import{UsertpComponent} from '../user/usertp/usertp.component';
import{AdmintpComponent} from '../admin/admintp/admintp.component';
import{LoginComponent} from '../common/login/login.component';
import{SignUpComponent} from '../common/sign-up/sign-up.component'
import { StartpageComponent } from '../common/startpage/startpage.component';
import { HomezeroComponent } from '../common/homezero/homezero.component';
import { AdminheaderComponent } from '../admin/adminheader/adminheader.component';
import { AdminstartComponent } from '../admin/adminstart/adminstart.component';
import { AdminprofileComponent } from '../admin/adminprofile/adminprofile.component';
import { AddquizComponent } from '../admin/addquiz/addquiz.component';
import { ViewquizComponent } from '../admin/viewquiz/viewquiz.component';
import { ViewquiztypeComponent } from '../admin/viewquiztype/viewquiztype.component';
import { AddquestionComponent } from '../admin/addquestion/addquestion.component';
import { UserheaderComponent } from '../user/userheader/userheader.component';
import { UserstartComponent } from '../user/userstart/userstart.component';
import { UserprofileComponent } from '../user/userprofile/userprofile.component';
import { GamesComponent } from '../user/games/games.component';
import { FavoritesComponent } from '../user/favorites/favorites.component';
import { QuizcategoryComponent } from '../user/quizcategory/quizcategory.component';
import { ViewquizuserComponent } from '../user/viewquizuser/viewquizuser.component'
import { PlayquizComponent } from '../user/playquiz/playquiz.component';

import { UserhighscoreComponent } from '../user/userhighscore/userhighscore.component';
import { AttemptedusersComponent } from '../admin/attemptedusers/attemptedusers.component';
import { HighscoreComponent } from '../admin/highscore/highscore.component';
import { GuessthemovieComponent } from '../user/games/guessthemovie/guessthemovie.component';
import { MousegameComponent } from '../user/games/mousegame/mousegame.component';
import { AdmingameComponent } from '../admin/admingame/admingame.component';
import { PlayedgameslistComponent } from '../admin/playedgameslist/playedgameslist.component';
import { GamehighscoreComponent } from '../admin/gamehighscore/gamehighscore.component';
import { PagenotfoundComponent } from '../common/pagenotfound/pagenotfound.component';

const appRoutes:Routes=[


  {path:'', redirectTo:'/start/(start:home)', pathMatch:'full'},
  {path:'start', redirectTo:'/start/(start:home)', pathMatch:'full'},
  {path:'Admin', redirectTo:'/Admin/(Admin:admin-home)', pathMatch:'full'},
  {path:'User', redirectTo:'/User/(User:user-home)', pathMatch:'full'},
  
  
  

  {path:'start', component:StartpageComponent,children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomezeroComponent, outlet: "start" },
    {path: 'signup', component: SignUpComponent, outlet: "start" },
    {path: 'login', component: LoginComponent, outlet: "start" },
  ]},

  
  {path:'User', component:UserheaderComponent,children:[
    {path:'', redirectTo:'user-home', pathMatch:'full'},
    {path: 'user-home', component: UserstartComponent, outlet: "User" },
    {path: 'user-profile', component: UserprofileComponent, outlet: "User" },
    {path: 'quizcategory', component: QuizcategoryComponent, outlet: "User" },
    {path: 'games', component: GamesComponent, outlet: "User" },
    {path: 'favorites', component: FavoritesComponent, outlet: "User" },
    {path: 'viewquizuser/:catId', component: ViewquizuserComponent, outlet: "User" },
    // {path: 'playquiz/:catId/:qid', component: PlayquizComponent, outlet: "User" },
    {path: 'playquiz/:catId/:qid', component: UsertpComponent, outlet: "User" },
    // {path: 'highscore/:qid', component: UserhighscoreComponent, outlet: "User" },
    {path: 'highscore/:catId/:qid', component: UserhighscoreComponent, outlet: "User" },
     //  ^^^^ :: catId is carried so that while returning, we come back to the same category from which we went ahead 
     {path: 'playgame/1', component: GuessthemovieComponent, outlet: "User" },
     {path: 'playgame/2', component: MousegameComponent, outlet: "User" },

    // {path: 'quiz-page/:cid/:qid', component: QuizPageComponent, outlet: "userPage" },

  ]},

  {path:'Admin', component:AdminheaderComponent,children:[
    {path:'', redirectTo:'admin-home', pathMatch:'full'},
    {path: 'admin-home', component: AdminstartComponent, outlet: "Admin" },
    {path: 'admin-profile', component: AdminprofileComponent, outlet: "Admin" },
    {path: 'add-quiz', component: AddquizComponent, outlet: "Admin" },
    {path: 'viewquiztype', component: ViewquiztypeComponent, outlet:"Admin" },
    {path: 'view-quiz/:catId', component: ViewquizComponent, outlet: "Admin" },
    {path: 'addquestion/:catId/:qid', component: AddquestionComponent, outlet: "Admin" },
    {path: 'attemptedusers/:qid/:catId',component: AttemptedusersComponent,outlet: 'Admin',},
    {path: 'admin-highscore/:qid/:catId', component : HighscoreComponent, outlet : 'Admin'},
    {path: 'admin-games', component : AdmingameComponent, outlet : 'Admin'},
    {path: 'playedgames/:gid', component : PlayedgameslistComponent, outlet : 'Admin'},
    {path: 'gameshighscore/:gid', component : GamehighscoreComponent, outlet : 'Admin'},

  ]},

  { path: '**', component: PagenotfoundComponent },



  // {path:'',component:StartpageComponent},
  // {path:'login',component:LoginComponent},
  // {path:'user',component:UserprofileComponent},
  // {path:'user',component:UsertpComponent},
  // {path:'admin',component:AdminheaderComponent},

  // {path: 'signup', component: SignUpComponent, outlet: "" },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }





