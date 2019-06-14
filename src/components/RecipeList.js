import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {

  render() {
    const { recipes, handleDetails, value, handleChange, handleSubmit, error } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
              <h1 className="text-slunted">recipe list</h1>
            </div>
          </div>
          {/* END title */}
          <div className="row">
            {
              error ?
                <h1 className="text-danger text-center w-100">{error}</h1>
                :
                recipes.map(recipe => {
                  return (
                    <Recipe
                      key={recipe.recipe_key}
                      recipe={recipe}
                      handleDetails={() => handleDetails(0, recipe.recipe_id)}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                    />
                  )
                })
            }
          </div>
        </div>

      </React.Fragment>
    )
  }
}
