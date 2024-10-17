import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page',
  template: `
    <div>
      <h1>Test Page</h1>
      <p>This is a test page for Analog.js</p>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
        margin-top: 50px;
      }
    `,
  ],
  standalone: true,
})
export default class TestPageComponent {}
