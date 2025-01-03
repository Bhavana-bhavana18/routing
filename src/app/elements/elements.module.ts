import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    ElementsHomeComponent,
    TimesDirective,
    SharedModule,
  ],
  exports: [ElementsHomeComponent],
})
export class ElementsModule {}
