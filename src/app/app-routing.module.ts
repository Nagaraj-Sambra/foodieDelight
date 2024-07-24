import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './modules/restaurant/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: 'pageNotFound', component: PagenotfoundComponent},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'restaurant', loadChildren: () => import('./modules/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
