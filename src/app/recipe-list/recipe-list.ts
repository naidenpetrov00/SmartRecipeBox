import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { RecipeService } from '../recipe-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeDetail, FormsModule, RouterLink],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  protected readonly recipeService = inject(RecipeService);
}
