import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesDetailsComponent } from './components/vehicles-details/vehicles-details.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListComponent
  },
  {
    path: 'vehicle-details',
    component: VehiclesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
