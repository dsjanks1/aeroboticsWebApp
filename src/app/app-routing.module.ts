import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'

import {CommonModule} from '@angular/common'

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full',
  },
  {
    path: 'dashboard', component: DashboardComponent,
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
