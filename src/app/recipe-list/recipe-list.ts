import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RecipeForm } from '../recipe-form/recipe-form';
import { RecipeService } from '../recipe-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, RouterLink, RecipeForm],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipeService = inject(RecipeService);
}
