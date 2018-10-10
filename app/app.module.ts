import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {TutorialComponent} from './tutorial.component';
import {TutorialEventBindingComponent} from './tutorial.event_binding.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TutorialComponent,
    TutorialEventBindingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
