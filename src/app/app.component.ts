import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CollectionHomeComponent } from './collection/collection-home/collection-home.component';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ElementsHomeComponent,
    CollectionHomeComponent,
    HomeComponent,
    NotFoundComponent,
    
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'comps';
}
