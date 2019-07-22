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
  staticScoutMissions: any = [
    { "count": 7, "next": null, "previous": null, "results": [{ "id": 1376, "farm_id": 4006, "title": "Scout", "date": "2018-09-11", "complete": false }, { "id": 1375, "farm_id": 4006, "title": "Scout 8", "date": "2018-09-30", "complete": false }, { "id": 1373, "farm_id": 4006, "title": "Scout 5", "date": "2018-10-03", "complete": false }, { "id": 1372, "farm_id": 4006, "title": "Scout 4", "date": "2018-09-23", "complete": false }, { "id": 1371, "farm_id": 4006, "title": "Scout 3", "date": "2018-09-15", "complete": false }, { "id": 1370, "farm_id": 4006, "title": "Scout 2", "date": "2018-09-11", "complete": false }, { "id": 1369, "farm_id": 4006, "title": "Scout 1", "date": "2018-09-14", "complete": false }] }
  ];

  staticClients: any = [{"count":3,"next":null,"previous":null,"results":[{"id":6253,"name":"Farmer Developer","email":"developertest@test.com","user_id":6378},{"id":6254,"name":"Farm Worker 1","email":"developer2test@test.com","user_id":6379},{"id":6255,"name":"Farm Worker 2","email":"developer3test@test.com","user_id":6380}]}]

  constructor(private coreService: CoreService,
    private activatedRoute: ActivatedRoute, private _http: HttpClient,
  ) {

    this.setClients();
    this.setScoutMissions();


  }

  setClients() {
    this.clients = [];
    this.coreService.getClients().subscribe(
      response => {
        this.clients = response.data.results;
        console.log(this.clients);

        setTimeout(function () {
          jQuery('select').material_select();




          let context;
          // this.selectedClient = 26255;


          jQuery('.testt').bind("change", (e) => {
            let dataIndex = parseInt(e.target.attributes['data-index'].value);
            let selectedObj: any = { 'index': dataIndex, 'id': e.target.value };

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



  assignWorkers() {
    debugger;
    _.each(this.scoutMissions, function (item, key) {
      debugger
      this.scoutMissions[key]['workerObj'] = selectedClient[key];
      console.log(this.scoutMissions);


      debugger;
    },this);
  }

  setScoutMissions() {
    this.scoutMissions = [];
    this.coreService.getScoutMissions().subscribe(
      res => {

        this.scoutMissions = res.data.results;
        console.log(this.scoutMissions);
      },
      err => {
        console.log('Error fetching Scout Missions' + this.scoutMissions);
      })
  }





  ngOnInit() {
    jQuery(document).ready(function () {
      jQuery('.tabs').tabs();
    });


  }
}
