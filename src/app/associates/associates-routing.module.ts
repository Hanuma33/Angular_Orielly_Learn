import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociatesListComponent } from './associates-list/associates-list.component';
import { AssociateDetailComponent } from './associate-detail/associate-detail.component';


const routes: Routes = [
  { path: 'list', component: AssociatesListComponent },
  { path: 'detail', component: AssociateDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociatesRoutingModule { }
