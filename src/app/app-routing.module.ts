import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'candidato/edit/:id',
    loadChildren: () => import('./candidatos/candidato-form/candidato-form.module').then( m => m.CandidatoFormPageModule)
  },
  {
    path: 'candidato/new',
    loadChildren: () => import('./candidatos/candidato-form/candidato-form.module').then( m => m.CandidatoFormPageModule)
  },
  {
    path: 'candidatos',
    loadChildren: () => import('./candidatos/candidato-list/candidato-list.module').then( m => m.CandidatoListPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
