import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { PereComponent } from './pere/pere.component';
import {EmbaucheComponent} from "./cvTech/embauche/embauche.component";

const routes: Routes = [
  { path: '',  redirectTo: 'cv', pathMatch: 'full'},
  { path: 'cv', component: CvComponent },
  { path: 'pere', component: PereComponent },
  { path: 'bind', component: BindingComponent },
  { path: 'embauche', component: EmbaucheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
