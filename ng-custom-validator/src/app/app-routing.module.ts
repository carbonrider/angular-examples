import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dependent', loadChildren: () => import('./dependent-field/dependent-field.module').then(m => m.DependentFieldModule)
  },
  {
    path: '**',
    redirectTo: 'dependent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
