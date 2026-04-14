import { Component, computed, inject, input, signal } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';

import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetail {
  protected recipeService = inject(RecipeService);
  private id = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  protected readonly recipe = computed(() =>
    this.recipeService.recipes().find((r) => r.id == this.id)!,
  );

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
