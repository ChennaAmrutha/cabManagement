import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {ConfigService} from './_services/config.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"",        component:LoginFormComponent},
      {path:"home",    component:HomeComponent     },
      {path:"**",      component:LoginFormComponent}
    ])
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
