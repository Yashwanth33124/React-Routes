import React from 'react';
import { useLocation } from 'react-router-dom';
import usefetch from '../../hooks/usehooks';
import useWindowResize from "../../hooks/use-window-resize";
import "../../App.css";


const Recipes = () => {
  const location = useLocation();
  const { data, loading, error } = usefetch('https://dummyjson.com/recipes');
  const windowSize = useWindowResize();

  if (loading) return <h1>Fetching Recipes Please wait</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <h1 style={{ color: windowSize.width < 760 ? 'red' : 'black' }}>
        Recipes List Page
      </h1>
      <h3>
        Current Window width: {windowSize.width}, height: {windowSize.height}
      </h3>

      <div className="recipes-container">
        {data?.recipes?.length > 0 &&
          data.recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} className="recipe-img" />
              <label>{recipe.name}</label>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Recipes;
