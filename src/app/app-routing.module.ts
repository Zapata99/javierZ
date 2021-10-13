import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pag2',
    loadChildren: () => import('./page/pag2/pag2.module').then( m => m.Pag2PageModule)
  },
  {
    path: 'pag3',
    loadChildren: () => import('./page/pag3/pag3.module').then( m => m.Pag3PageModule)
  },
 
  {
    path: 'tab',
    loadChildren: () => import('./page/tab/tab.module').then( m => m.TabPageModule)
  },
 
  {
    path: 'pag4',
    loadChildren: () => import('./page/pag4/pag4.module').then( m => m.Pag4PageModule)
  },
  {
    path: 'pag5',
    loadChildren: () => import('./page/pag5/pag5.module').then( m => m.Pag5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
