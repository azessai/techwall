import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from "@angular/forms";
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FilsComponent,
    PereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
