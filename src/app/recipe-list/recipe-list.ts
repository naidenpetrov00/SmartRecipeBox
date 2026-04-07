import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeDetail, FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected searchTerm = signal('');

  protected filteredBySearchRecipes = computed(() =>
    MOCK_RECIPES.filter((r) => r.name.toLowerCase().includes(this.searchTerm().toLowerCase())),
  );

  protected toogleFavouriteStatus(recipe: RecipeModel): void {
    recipe.isFavorite = !recipe.isFavorite;
  }
}
