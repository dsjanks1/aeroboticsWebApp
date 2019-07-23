import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CoreService } from '../core.service';
import { Clients } from '../models/clients.model';
import { ScoutMissions } from '../models/scoutMissions.module';
import { ActivatedRoute } from '@angular/router';
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
    //get list of scout missions
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
    //get list of all clients
    this.clients = [];
    this.coreService.getClients().subscribe(
      response => {
        this.clients = response.data.results;
        console.log(this.clients);

        setTimeout(function () {
          //initiats datepicker and select drop down after clients call is complete
          jQuery('select').formSelect();
          jQuery('.datepicker').datepicker();

          let context;

          //targets class - selectedClientDropDown, get index of which dropdown as been selected
          jQuery('.selectedClientDropDown').bind("change", (e) => {
            let dataIndex = parseInt(e.target.attributes['data-index'].value);
            let selectedObj: any = { 'index': dataIndex, 'name': e.target.value };
            //if dropdown as already been selected, update specific entry
            if (selectedClient[dataIndex]) {
              selectedClient[dataIndex] = selectedObj;
            } else {
              //else push selected worker into selectedClient object
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

  assignWorkers() {
    //For Worker Scedule Tab

    //this is an function is called when clickingg the assign workers button
    _.each(this.scoutMissions, function (item, key) {
      //injects workerobj into scoutmissions object and specific index
      this.scoutMissions[key]['workerObj'] = selectedClient[key];
      console.log(this.scoutMissions);

    }, this);
    //alert user when workers have been successfully assigned 
    M.toast({ html: 'Assigned workers successfully!', class: 'rounded' })
  }

  onDateChange(i, p) {
    //onchange function for date picker at eac index
    let selectedObj: any = { 'index': p, 'id': i };

    if (this.updatedDates[p]) {
      //if specific date picker has already been selected, update specific entry

      this.updatedDates[p] = selectedObj;
    } else {
      //else update date throug two way binding - ngModel

      this.updatedDates.push(selectedObj);
    }
  }

  ngOnInit() {
    jQuery(document).ready(function () {
      jQuery('.tabs').tabs();
    });


  }
}
