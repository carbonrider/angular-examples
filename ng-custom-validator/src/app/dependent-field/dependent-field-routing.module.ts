import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateClientComponent } from './date-client/date-client.component';


const routes: Routes = [
  { path: 'date-client', component: DateClientComponent },
  { path: '**', redirectTo: 'date-client' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependentFieldRoutingModule { }
