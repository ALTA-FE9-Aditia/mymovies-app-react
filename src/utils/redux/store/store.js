import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers/reducer";

export const store = configureStore({
  reducer: {
    data: reducer.state,
  },
});
/*

store untuk menerima sebuah parameter yang dinamakan reducer.
Store unu digunakan unutk membuat sebuah wadah yang nantinya
dipakau untuk menyimpan informasi/data/state yang ditempatakan
pada hirarki paling atas dari sebuah component tree
 */
