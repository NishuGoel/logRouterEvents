import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page.component';
import {PageNotFoundComponent} from './pagenotfound.component';
import {HelloComponent} from './hello.component';

const routes: Routes = [
  {
  path: 'hello',
  component: HelloComponent
},
{
  path: 'main-page',
  component: MainPageComponent
},
  {
  path: '',
  redirectTo: '/main-page',
  pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }