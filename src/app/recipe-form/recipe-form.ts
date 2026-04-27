import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-form',
  imports: [ReactiveFormsModule,MatButtonModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css',
})
export class RecipeForm {
  private recipeService = inject(RecipeService);

  protected readonly recipeForm = new FormGroup({
    recipeTitle: new FormControl(''),
    recipeDetails: new FormControl(''),
    recipeImage: new FormControl(''),
  });

  protected onSubmit(): void {
    const { recipeTitle, recipeDetails, recipeImage } = this.recipeForm.getRawValue();

    if (!recipeTitle || !recipeDetails || !recipeImage) return;

    this.recipeService.addRecipe({
      recipeTitle,
      recipeDetails,
      recipeImage,
    });
  }
}
