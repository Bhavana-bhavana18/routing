import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  // {
  //   path: 'collections',
  //   component: CollectionHomeComponent,
  //   children:[
  //     {path: 'biography', component:BiographyComponent},
  //     {path:'companies',component:CompaniesComponent},
  //     {path:'partners',component:PartnersComponent}
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
