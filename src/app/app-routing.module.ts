import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoveryComponent } from './component/discovery/discovery.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'discovery' , component:DiscoveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
