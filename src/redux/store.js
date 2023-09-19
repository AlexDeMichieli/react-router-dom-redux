import { configureStore, createSlice } from "@reduxjs/toolkit";

// our job now is to import the addCocktailToFavorite action into our Cocktail.jsx
// when we click on ADD FAV! button, we want to dispatch addCocktailToFavorite action

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  // this is where we create an action
  reducers: {
    // state is current state of your favorites list
    // action is the action that was dispatched, along with some data. in our case, the data will be "the cocktail that we want to favorite"
    addCocktailToFavorite: (state, action) => {
      // some stuff about the action that you have to know
      // 1. you can mutate the state
      // 2. whatever you return becomes the new state

      state.push(action.payload);
    },
    removeCocktailFromFavorites: (state, action) => {},
  },
});

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
});

export default store;

window.store = store;
