// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonFormComponent } from './person-form/person-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'person/:id', component: PersonFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
