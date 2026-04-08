import { Injectable, computed, signal } from '@angular/core';

import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  searchTerm = signal('');
  readonly recipes = signal(MOCK_RECIPES);

  filteredBySearchRecipes = computed(() => {
    const filtered = this.recipes().filter((r) =>
      r.name.toLowerCase().includes(this.searchTerm().toLowerCase()),
    );
    return filtered;
  });

  toogleFavouriteStatus(recipeId: number): void {
    this.recipes.update((recipes) =>
      recipes.map((recipe) =>
        recipe.id === recipeId ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe,
      ),
    );
  }
}
