import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionModule } from './collection/collection.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule, ElementsModule, CollectionModule],
  providers: [],
  exports: [],
})
export class AppModule {}
