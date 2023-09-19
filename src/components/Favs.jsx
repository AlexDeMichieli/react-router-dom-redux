import React from "react";

import { useSelector } from "react-redux";

import { Grid, Typography, Divider } from "@mui/material";

const Favs = () => {
  // our goal is to get the current state of the store

  const favorites = useSelector((state) => {
    return state.favorites;
  });

  const getIngredients = (favorite) => {
    const ingredients = [];

    for (let i = 1; i < 16; i++) {
      const key = `strIngredient${i}`;

      const ingredient = favorite[key];

      if (ingredient !== null) {
        ingredients.push(ingredient);
      }
    }

    return ingredients;
  };

  return (
    <Grid container spacing={3}>
      {favorites.map((favorite) => {
        const ingredients = getIngredients(favorite);

        return (
          <Grid item xs={12}>
            <Typography variant="h5">{favorite.strDrink}</Typography>
            <ul>
              {ingredients.map((ingredient) => (
                <>
                  <li>{ingredient}</li>
                  <Divider />
                </>
              ))}
            </ul>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Favs;
