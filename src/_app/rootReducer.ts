// /src/app/rootReducer.js
import { userReducer } from "@/src/features";
import { missionApi } from "@/src/features/mission/missionApi";
import { combineReducers } from "@reduxjs/toolkit";

// Combina todos los reducers en un solo reducer raíz
const rootReducer = combineReducers({
  // Agrega más reducers según sea necesario
  user: userReducer,
  [missionApi.reducerPath]: missionApi.reducer,
});

export default rootReducer;
