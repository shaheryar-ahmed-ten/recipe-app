import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';
@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})

export class RecipeComponent implements OnInit {
    mySelectedRecipe!: Recipe;

    constructor(private recipeService: RecipeService) {

    }

    ngOnInit(): void {
        this.recipeService.selectedRecipe.subscribe(
            (recipe: Recipe) => this.mySelectedRecipe = recipe
        )
    }
}