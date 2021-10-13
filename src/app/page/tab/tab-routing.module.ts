import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
children: [
  {
    path: 'pag3',
    loadChildren: () => import('../pag3/pag3.module').then( m => m.Pag3PageModule),
  },
  {
    path: 'pag4',
    loadChildren: () => import('../pag4/pag4.module').then( m => m.Pag4PageModule),
  },
  {
    path: 'pag5',
    loadChildren: () => import('../pag5/pag5.module').then( m => m.Pag5PageModule),
  }
],
  },
 
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
