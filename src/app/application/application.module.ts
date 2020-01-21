import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationTableComponent } from './application-table/application-table.component';
import { ApplicationRoutingModule } from './application-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {CarouselModule} from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ApplicationListComponent, ApplicationDetailComponent, ApplicationFormComponent, ApplicationTableComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    CarouselModule,
    CardModule,
    DataViewModule,
    FlexLayoutModule
  ]
})
export class ApplicationModule { }
