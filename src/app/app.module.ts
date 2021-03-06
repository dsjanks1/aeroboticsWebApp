import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {DashboardComponent} from '../app/dashboard/dashboard.component'
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MaterializeModule } from "angular2-materialize";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
