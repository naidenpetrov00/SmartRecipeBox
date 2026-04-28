import { Component, inject, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';

import { MatButtonModule } from '@angular/material/button';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-form',
  imports: [FormField, MatButtonModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css',
})
export class RecipeForm {
  private recipeService = inject(RecipeService);
  protected recipeModel = signal({
    recipeTitle: '',
    authorEmail: '',
    recipeDetails: '',
    recipeImage: '',
  });

  protected readonly recipeForm = form(this.recipeModel);

  protected onSubmit(event: Event): void {
    event.preventDefault();

    if (
      !this.recipeModel().recipeTitle ||
      !this.recipeModel().authorEmail ||
      !this.recipeModel().recipeDetails ||
      !this.recipeModel().recipeImage
    ) {
      console.log('Invalid Input');
      return;
    }

    this.recipeService.addRecipe({
      recipeTitle: this.recipeModel().recipeTitle,
      authorEmail: this.recipeModel().authorEmail,
      recipeDetails: this.recipeModel().recipeDetails,
      recipeImage: this.recipeModel().recipeImage,
    });
  }
}
