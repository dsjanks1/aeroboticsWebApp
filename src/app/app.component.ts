import { Component, AfterViewInit } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'aeroboticsApp';

  public constructor(){

  }

  ngAfterViewInit(){
    jQuery(document).ready(function(){
      // jQuery('#select').formSelect();


      jQuery('.dropdown-trigger').dropdown();

    });
  }

}
