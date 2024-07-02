import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { LoginComponent } from './common/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { UserComponent } from './user/user.component';
import { UsertpComponent } from './user/usertp/usertp.component';
import { AdmintpComponent } from './admin/admintp/admintp.component';

import{AppRoutingModule} from './app-routing/app-routing.module';
import { HomeoneComponent } from './common/homeone/homeone.component';
import { FooterComponent } from './common/footer/footer.component';
import { StartpageComponent } from './common/startpage/startpage.component';
import { NavComponent } from './common/nav/nav.component';
import { HomezeroComponent } from './common/homezero/homezero.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminstartComponent } from './admin/adminstart/adminstart.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { AddquizComponent } from './admin/addquiz/addquiz.component';
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { ViewquiztypeComponent } from './admin/viewquiztype/viewquiztype.component';
import { ViewquizComponent } from './admin/viewquiz/viewquiz.component';
import { AdminfooterComponent } from './admin/adminfooter/adminfooter.component';
import { UsernavComponent } from './user/usernav/usernav.component';
import { UserheaderComponent } from './user/userheader/userheader.component';
import { UserstartComponent } from './user/userstart/userstart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { GamesComponent } from './user/games/games.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { QuizcategoryComponent } from './user/quizcategory/quizcategory.component';
import { PlayquizComponent } from './user/playquiz/playquiz.component';
import { ViewquizuserComponent } from './user/viewquizuser/viewquizuser.component';

import { AttemptedusersComponent } from './admin/attemptedusers/attemptedusers.component';
import { BoardComponent } from './user/games/board/board.component';
import { CellComponent } from './user/games/cell/cell.component';
import { UserhighscoreComponent } from './user/userhighscore/userhighscore.component';
import { HighscoreComponent } from './admin/highscore/highscore.component';
import { GuessthemovieComponent } from './user/games/guessthemovie/guessthemovie.component';
import { MousegameComponent } from './user/games/mousegame/mousegame.component';
import { AdmingameComponent } from './admin/admingame/admingame.component';
import { PlayedgameslistComponent } from './admin/playedgameslist/playedgameslist.component';
import { GamehighscoreComponent } from './admin/gamehighscore/gamehighscore.component';
import { UserfooterComponent } from './user/userfooter/userfooter.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,

    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    UsertpComponent,
    AdmintpComponent,
    HomeoneComponent,
    FooterComponent,
    StartpageComponent,
    NavComponent,
    HomezeroComponent,
    AboutusComponent,
    AdminheaderComponent,
    AdminstartComponent,
    AdminprofileComponent,
    AdminnavComponent,
    AddquizComponent,
    AddquestionComponent,
    ViewquiztypeComponent,
    ViewquizComponent,
    AdminfooterComponent,
    UsernavComponent,
    UserheaderComponent,
    UserstartComponent,
    UserprofileComponent,
    GamesComponent,
    FavoritesComponent,
    QuizcategoryComponent,
    PlayquizComponent,
    ViewquizuserComponent,
   
    AttemptedusersComponent,
    BoardComponent,
    CellComponent,
    UserhighscoreComponent,
    HighscoreComponent,
    GuessthemovieComponent,
    MousegameComponent,
    AdmingameComponent,
    PlayedgameslistComponent,
    GamehighscoreComponent,
    UserfooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
