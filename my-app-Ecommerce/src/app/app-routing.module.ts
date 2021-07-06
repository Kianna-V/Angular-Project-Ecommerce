import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';

const routes: Routes = [
  {
    path: 'motorcycles',
    component: MotorcyclesComponent,
    data: {title: ''}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
