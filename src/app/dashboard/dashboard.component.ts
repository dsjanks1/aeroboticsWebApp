import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CoreService } from '../core.service';
import { Clients } from '../models/clients.model';
import { ScoutMissions } from '../models/scoutMissions.module';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http'

declare let jQuery: any;
declare let M: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private clients: Clients[] = [];
  private scoutMissions: ScoutMissions[] = [];

  constructor(private coreService: CoreService,
    private activatedRoute: ActivatedRoute, private _http: HttpClient,
    private changeDetectorRefs: ChangeDetectorRef) {

      

    this.setClients();
    this.setScoutMissions();

  }


  setClients() {
    this.clients = [];
    this.coreService.getClients().subscribe(
      response => {
        this.clients = response.data.results;
        console.log(this.clients);
      },
      err => {
        console.log('Error fetching clients' + this.clients);
      }
    )
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
      }
    )
  }

  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery('.tabs').tabs();
    });
  }

}
