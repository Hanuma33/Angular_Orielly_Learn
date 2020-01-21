import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGroupListComponent } from './app-group-list/app-group-list.component';
import { AppGroupDetailComponent } from './app-group-detail/app-group-detail.component';
import { AppGroupFormComponent } from './app-group-form/app-group-form.component';
import { AppGroupTableComponent } from './app-group-table/app-group-table.component';



@NgModule({
  declarations: [AppGroupListComponent, AppGroupDetailComponent, AppGroupFormComponent, AppGroupTableComponent],
  imports: [
    CommonModule
  ]
})
export class AppGroupModule { }
