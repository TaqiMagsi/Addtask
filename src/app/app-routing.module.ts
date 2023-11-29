import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtaskComponent } from './addtask/addtask.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LayoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo', component: AddtaskComponent },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {  path: 'dashboard', component: DashboardComponent  },
      { path: 'todo', component: AddtaskComponent },
    ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
