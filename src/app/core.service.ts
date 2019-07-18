import { throwError as observableThrowError, of as observableOf, Observable, BehaviorSubject, Subscription } from 'rxjs';

import { share, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Clients } from '../app/models/clients.model'

import { debug } from 'util';
// import { RequestOptions} from 'https';

const httpOptions ={
  headers: new HttpHeaders({'Authorization': '1536660107LWZ2JGK17J72HR4O5NU53FBBSLSMRB'})
}

@Injectable({
  providedIn: 'root'
})

export class CoreService {

  private observable: Observable<any>;
  private clients: Clients;
  private clientsEndpoint: string;
  private apiHeader: any;


  public handleError(error: any) {
    if (error instanceof Response) {
      return observableThrowError(error.json()['error'] || 'API server error');
    }
    return observableThrowError(error || 'API server error');
  }

  constructor(private http: HttpClient) {

    this.clientsEndpoint = 'https://sherlock.aerobotics.io/developers/clients/';
  }


  //Clients Call - get all clients

  getClients() {
    const url = `${this.clientsEndpoint}`;
    const header = `${this.apiHeader}`;



    this.observable = this.http.get(url, httpOptions).pipe(
      map(response => {
        this.observable = null;
        this.clients = new Clients(response);
        return this.clients
      }),
      catchError(error => this.handleError(error)),
      share()
);
    return this.observable
  }

}
