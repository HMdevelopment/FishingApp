import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '../../node_modules/@angular/core';

// Define your routes and main modules here
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
