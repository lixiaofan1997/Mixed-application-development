import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child01Component } from './components/child01/child01.component';
import { Child02Component } from './components/child02/child02.component';
import { ServiceLocalService } from './services/service-local.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child01Component,
    Child02Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ServiceLocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
