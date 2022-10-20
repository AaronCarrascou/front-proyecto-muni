import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramitesComponent } from './views/funcionario/components/tramites/tramites.component';

const routes: Routes = [
  { path: '', redirectTo:'/tramites', pathMatch:'full'},
  { path: 'tramites', component: TramitesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
