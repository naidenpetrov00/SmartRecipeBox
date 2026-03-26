import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = signal('SmartRecipeBox');
  
  protected helloClick():void {
    console.log('Hello button clicked!');
  }

  protected goodbye():void {
    console.log('Goodbye button clicked!');
  }
}