import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';

const routes: Routes  = [
  { path: '', redirectTo: '/tabs' , pathMatch: 'full'},
  { path: 'add', component: AddComponent },
  { path: 'show', component: ShowComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
