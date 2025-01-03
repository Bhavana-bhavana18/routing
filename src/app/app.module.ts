import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionModule } from './collection/collection.module';
import { ViewsRoutingModule } from './views/views-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ElementsModule, CollectionModule,ViewsRoutingModule],
  providers: [],
  exports: [],
})
export class AppModule {}
