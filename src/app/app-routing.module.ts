import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { PereComponent } from './pere/pere.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'pere', component: PereComponent },
  { path: 'bind', component: BindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
