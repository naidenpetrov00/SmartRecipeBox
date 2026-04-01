import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { RecipeList } from './recipe-list/recipe-list';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Hello, SmartRecipeBox');
}
