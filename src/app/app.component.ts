import { Component } from '@angular/core';
import { SignalLightComponent } from './signal-light/signal-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalLightComponent],
  template: '<signal-light />',
})
export class AppComponent {}
