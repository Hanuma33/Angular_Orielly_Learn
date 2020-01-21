import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociatesListComponent } from './associates-list/associates-list.component';
import { AssociateDetailComponent } from './associate-detail/associate-detail.component';
import { AssociateFormComponent } from './associate-form/associate-form.component';
import { AssociatesTableComponent } from './associates-table/associates-table.component';
import { AssociatesRoutingModule } from './associates-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [AssociatesListComponent, AssociateDetailComponent, AssociateFormComponent, AssociatesTableComponent],
  imports: [
    CommonModule,
    AssociatesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    SlickCarouselModule,
    CarouselModule
  ]
})
export class AssociatesModule { }
