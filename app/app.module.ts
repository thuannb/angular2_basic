import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { TutorialEventBindingComponent } from './tutorial.event_binding.component';
import { TutorialTwoWayBindingComponent } from './tutorial.twowaybinding.component';
import { TutorialStructuralDirectiveComponent } from './tutorial.structural_directive.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TutorialComponent,
    TutorialEventBindingComponent,
    TutorialTwoWayBindingComponent,
    TutorialStructuralDirectiveComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
