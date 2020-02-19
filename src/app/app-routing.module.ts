import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
            path: 'list',
            component: ListComponent
         },
         {
            path: 'detail/:id',
            component: DetailComponent
         },
         {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
         },
         {
            path: '**',
            component: PageNotFoundComponent
         }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
