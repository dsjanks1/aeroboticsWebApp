import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CoreService } from '../core.service';
import { Clients } from '../models/clients.model'
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private clients: Clients[] = [];

  constructor(private coreService: CoreService,
    private activatedRoute: ActivatedRoute, private _http: HttpClient,
    private changeDetectorRefs: ChangeDetectorRef) { 

    }


  setClients() {
    this.clients = [];
    this.coreService.getClients().subscribe(
      response => {
        this.clients = response.data;
        console.log(this.clients);
      },
      err => {
        console.log('Error fetching clients' + this.clients);
      }
    )
  }

  ngOnInit() {
    this.setClients();

  }

}
