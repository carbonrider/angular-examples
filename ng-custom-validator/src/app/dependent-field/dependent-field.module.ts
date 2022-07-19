import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependentFieldRoutingModule } from './dependent-field-routing.module';
import { DateClientComponent } from './date-client/date-client.component';
import { UiCommonModule } from '../ui-common/ui-common.module';


@NgModule({
  declarations: [DateClientComponent],
  imports: [
    CommonModule,
    DependentFieldRoutingModule,
    UiCommonModule
  ]
})
export class DependentFieldModule { }
