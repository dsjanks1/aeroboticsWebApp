import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CoreService } from '../core.service';
import { Clients } from '../models/clients.model';
import { ScoutMissions } from '../models/scoutMissions.module';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import * as _ from 'underscore';

declare let jQuery: any;
declare let M: any;
var selectedClient: any = [];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private clients: Clients[] = [];
  private scoutMissions: ScoutMissions[] = [];
  dates: any = {};
  date: any = [];
  updatedDates: any = [];
  selectedWorker: string;
  showSpinner: boolean = true;

  constructor(private coreService: CoreService,
    private activatedRoute: ActivatedRoute, private _http: HttpClient,
  ) {

    this.setClients();
    this.setScoutMissions();


  }

  setScoutMissions() {

    this.scoutMissions = [];
    this.coreService.getScoutMissions().subscribe(
      res => {

        this.scoutMissions = res.data.results;
        console.log(this.scoutMissions);
        
        this.showSpinner = false;
      },
      err => {
        console.log('Error fetching Scout Missions' + this.scoutMissions);
      })
  }

  setClients() {
    this.clients = [];
    this.coreService.getClients().subscribe(
      response => {
        this.clients = response.data.results;
        console.log(this.clients);

        setTimeout(function () {
          jQuery('select').formSelect();
          jQuery('.datepicker').datepicker();

          let context;
          jQuery('.testt').bind("change", (e) => {
            let dataIndex = parseInt(e.target.attributes['data-index'].value);
            let selectedObj: any = { 'index': dataIndex, 'name': e.target.value };

            if (selectedClient[dataIndex]) {
              selectedClient[dataIndex] = selectedObj;
            } else {
              selectedClient.push(selectedObj);
            }
          })

        }, 200);

      },
      err => {
        console.log('Error fetching clients' + this.clients);
      }
    )
  }

  // onClientChange(i){
  //   debugger
  //   // console.log(selectedClient)

  //    let context;

  //         jQuery('.testt').bind("change", (e) => {
  //           let dataIndex = parseInt(e.target.attributes['data-index'].value);
  //           let selectedObj: any = { 'index': dataIndex, 'id': i };

  //           if (selectedClient[dataIndex]) {
  //             selectedClient[dataIndex] = selectedObj;
  //           } else {
  //             // debugger
  //             selectedClient.push(selectedObj);
  //           }
  //         })

  //             console.log(selectedClient)

  // }

  assignWorkers() {
    //
    _.each(this.scoutMissions, function (item, key) {
      this.scoutMissions[key]['workerObj'] = selectedClient[key];
      console.log(this.scoutMissions);

    }, this);

    M.toast({html: 'Assigned workers successfully!', class :'rounded'})
  }

  onDateChange(i, p) {


    let selectedObj: any = { 'index': p, 'id': i };

    if (this.updatedDates[p]) {
      
      this.updatedDates[p] = selectedObj;
    } else {
      
      this.updatedDates.push(selectedObj);
    }

    console.log(this.updatedDates)


    // _.each(this.scoutMissions, function (item, key) {
    //   this.scoutMissions[key]['newDateObj'] = this.updatedDates[key];
    //   debugger
    // }, this);
    console.log(this.scoutMissions);
  }


  onWorkerViewScheduleChange(worker){
    this.selectedWorker = worker;

debugger
let filterByWorker: any = _.where(this.scoutMissions, { name: this.selectedWorker

 

})

console.log(filterByWorker)

  }


  ngOnInit() {
    jQuery(document).ready(function () {
      jQuery('.tabs').tabs();
    });


  }
}
