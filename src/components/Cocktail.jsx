import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// 1. import the slice
import { favoritesSlice } from "../redux/store";

import { Snackbar, Alert, Button } from "@mui/material";

// 2. get it from slice.actions
const addCocktailToFavorite = favoritesSlice.actions.addCocktailToFavorite;

const Cocktail = () => {
  const [cocktail, setCocktail] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  const search = params.i;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${search}`
        );
        const data = await response.json();
        setCocktail(data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);

  const dispatch = useDispatch();

  const onClickAddToFavorite = (cocktail) => {
    const cocktailAlreadyExists =
      favorites.find((favorite) => favorite.idDrink === cocktail.idDrink) !==
      undefined;

    if (cocktailAlreadyExists) {
      setErrorSnackbar(true); // makes the eror snackbar appear
      setSnackbarOpen(false); // get rid of the success snackbar
    } else {
      dispatch(addCocktailToFavorite(cocktail));
      setSnackbarOpen(true);
      setErrorSnackbar(false);
    }

    // how to account for duplicates
    // 1. when you click on add fav button, you want to check if that cocktail is already in the favorites list
    // 2. you need to get the favorites list
    // 3. check whether the cocktail you clicked on is in the favorites list
    // 4. if yes, make another snackbar for alerting us
    // 5. if no, add it to favorites
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const onClickNavigateToFavorites = () => {
    navigate("/favs");
  };

  return (
    <div>
      {cocktail &&
        cocktail.map((cocktail, index) => {
          return (
            <div key={index}>
              <p className="text-xl">{cocktail.strDrink}</p>
              <p className="text-md">{cocktail.strInstructions}</p>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <button onClick={() => onClickAddToFavorite(cocktail)}>
                ADD FAV!
              </button>
            </div>
          );
        })}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          severity="success"
          action={
            <Button
              onClick={onClickNavigateToFavorites}
              variant="filled"
              color="secondary"
            >
              Go to favorites
            </Button>
          }
        >
          Added to favorite!
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={errorSnackbar}
        autoHideDuration={6000}
        onClose={() => setErrorSnackbar(false)}
      >
        <Alert variant="filled" severity="error">
          This already exists in your favorites
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Cocktail;
