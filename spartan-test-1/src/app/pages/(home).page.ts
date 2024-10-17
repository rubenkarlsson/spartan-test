import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from '../components/analog-welcome.component';

@Component({
  selector: 'spartan-test-1-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <spartan-test-1-analog-welcome /> `,
})
export default class HomeComponent {}
