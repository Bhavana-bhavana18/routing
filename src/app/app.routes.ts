import { Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { CollectionHomeComponent } from './collection/collection-home/collection-home.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BiographyComponent } from './collection/biography/biography.component';
import { CompaniesComponent } from './collection/companies/companies.component';
import { PartnersComponent } from './collection/partners/partners.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'elements',
    loadComponent: () =>
      import('./elements/elements-home/elements-home.component').then(
        (c) => c.ElementsHomeComponent
      ),
  },
  {
    path: 'collections',
    loadComponent: () =>
      import('./collection/collection-home/collection-home.component').then(
        (c) => c.CollectionHomeComponent
      ),
    children: [
      { path: '', component: BiographyComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'partners', component: PartnersComponent },
    ],
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./views/views-home/views-home.component').then(
        (c) => c.ViewsHomeComponent
      ),
  },
  {
    path: 'mod',
    loadComponent: () =>
      import('./mods/mod-home/mod-home.component').then(
        (c) => c.ModHomeComponent
      ),
  },

  { path: '**', component: NotFoundComponent },
];
