import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyCreate } from './Property-Create/property-create.component';
import { PropertyList } from './Property-List/property-list.component';

const routes: Routes = [
  {path: '', component: PropertyList},
{path: 'create', component: PropertyCreate},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
