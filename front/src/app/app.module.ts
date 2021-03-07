import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';


import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { LoaddetailsComponent } from './components/loaddetails/loaddetails.component';
import { ApplyLoanComponent } from './components/apply-loan/apply-loan.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignInComponent,
    WelcomeComponent,
    AdminComponent,
    ClientComponent,
    UserListComponent,
    LoaddetailsComponent,
    
    UserListComponent,
   
    
    UpdateuserComponent,
   
    
    LoaddetailsComponent,
   
    
    ApplyLoanComponent,
   
    
    


  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'admin', component: AdminComponent},
      {path : 'user-list',component:UserListComponent},
      {path: 'sign-up', component: SignInComponent},
      {path: 'log-in', component: LogInComponent},
      {path: 'client', component: ClientComponent},
      {path: 'updateuser',component:UpdateuserComponent},
      {path: 'loaddetails',component:LoaddetailsComponent},
      {path: '', component: HomeComponent},
      {path: '**', redirectTo: '/'}
    ]),

    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
