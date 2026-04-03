import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected nextRecipe(): void {
    this.recipe.update((currentRecipe) => {
      const currentIndex = MOCK_RECIPES.findIndex((recipe) => recipe.id === currentRecipe.id);
      const nextIndex = (currentIndex + 1) % MOCK_RECIPES.length;

      return MOCK_RECIPES[nextIndex];
    });
  }
  protected toogleFavouriteStatus(): void {
    this.recipe.update((recipe) => ({ ...recipe, isFavorite: !recipe.isFavorite }));
  }
}
