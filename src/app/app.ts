import { Component, computed, signal } from '@angular/core';

import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = signal('Hello, SmartRecipeBox');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal(1);

  protected readonly adjustedIngredients = computed(() =>
    this.recipe().ingredients.map((i) => i.quantity * this.servings()),
  );

  protected increaseServings(): void {
    this.servings.update((state) => state + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((state) => Math.max(1, state - 1));
  }

  protected nextRecipe(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected helloClick(): void {
    console.log('Hello button clicked!');
  }

  protected goodbye(): void {
    console.log('Goodbye button clicked!');
  }
}
