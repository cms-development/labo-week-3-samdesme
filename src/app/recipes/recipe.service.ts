import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Recipe } from '../models/recipe';
import { recipes } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(recipes);
  }

  getRecipe(id: number): Observable<Recipe> {
    return of(recipes.find(recipe => recipe.id === id));
  }
}
