import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CollectionRoutingModule } from '../collection-routing.module';
import { BiographyComponent } from '../biography/biography.component';
import { TabsComponent } from '../tabs/tabs.component';


@Component({
  selector: 'app-collection-home',
  standalone: true,
  imports: [TableComponent, DividerComponent, CollectionRoutingModule,RouterModule,TabsComponent],
  templateUrl: './collection-home.component.html',
  styleUrl: './collection-home.component.css',
})
export class CollectionHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 25, job: 'Engineer', employed: false },
    { name: 'JElyse', age: 25, job: 'Developer', employed: true },
  ];
  headers = [
    { key: 'employed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
