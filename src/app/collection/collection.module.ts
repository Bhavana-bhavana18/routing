import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { DividerComponent } from '../shared/divider/divider.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    CollectionHomeComponent,
    SharedModule,
    TableComponent,
  ],
  exports: [],
})
export class CollectionModule {}
