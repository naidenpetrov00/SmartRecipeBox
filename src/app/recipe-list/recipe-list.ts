import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

import { MOCK_RECIPES } from '../mock-recipes';
import { Ingredient, RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal(1);

  protected readonly adjustedIngredients = computed<Ingredient[]>(() =>
    this.recipe().ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * this.servings(),
    })),
  );

  protected nextRecipe(): void {
    this.recipe.update((currentRecipe) => {
      const currentIndex = MOCK_RECIPES.findIndex(
        (recipe) => recipe.id === currentRecipe.id,
      );
      const nextIndex = (currentIndex + 1) % MOCK_RECIPES.length;

      return MOCK_RECIPES[nextIndex];
    });
  }

  protected increaseServings(): void {
    this.servings.update((servings) => servings + 1);
  }

  protected decreaseServings(): void {
    this.servings.update((servings) => Math.max(1, servings - 1));
  }
}
