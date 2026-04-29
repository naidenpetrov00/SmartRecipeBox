import { Component, inject, signal } from '@angular/core';
import { FormField, email, form, required, submit } from '@angular/forms/signals';

import { MatButtonModule } from '@angular/material/button';
import { RecipeService } from '../recipe-service';

const initialrecipe = {
  recipeTitle: '',
  authorEmail: '',
  recipeDetails: '',
  recipeImage: '',
};

@Component({
  selector: 'app-recipe-form',
  imports: [FormField, MatButtonModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.css',
})
export class RecipeForm {
  private recipeService = inject(RecipeService);
  protected recipeModel = signal(initialrecipe);

  protected readonly recipeForm = form(this.recipeModel, (path) => {
    required(path.recipeTitle, { message: 'Title should not be empty' });
    required(path.authorEmail,{message:"Email should not be empty"});
    email(path.authorEmail,{message:"Email is not valid"});
    required(path.recipeDetails,{message:"Details should not be empty"});
    required(path.recipeImage,{message:"Image Url should not be empty"});
  });

  protected onSubmit(event: Event): void {
    event.preventDefault();

    submit(this.recipeForm, async () => {
      this.recipeService.addRecipe({
        recipeTitle: this.recipeModel().recipeTitle,
        authorEmail: this.recipeModel().authorEmail,
        recipeDetails: this.recipeModel().recipeDetails,
        recipeImage: this.recipeModel().recipeImage,
      });

      this.recipeForm().reset();
      this.recipeModel.set(initialrecipe);
    });
  }
}
