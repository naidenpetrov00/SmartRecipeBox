import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeList } from './recipe-list/recipe-list';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: RecipeList, pathMatch: 'full' },
  { path: 'recipes', component: RecipeList },
  { path: 'recipes/:id', component: RecipeDetail },
];
