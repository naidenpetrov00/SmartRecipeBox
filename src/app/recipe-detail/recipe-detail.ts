import { Component, computed, input, signal } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();
  protected readonly servings = signal(1);

  protected readonly adjustedIngredients = computed<Ingredient[]>(() =>
    this.recipe().ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * this.servings(),
    })),
  );

  protected increaseServings(): void {
    this.servings.update((servings) => servings + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((servings) => Math.max(1, servings - 1));
  }
}
