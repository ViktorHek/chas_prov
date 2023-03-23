import { createStore } from "redux";
import rootReducer from "./rootReducer";
import initialStore from "./initialStore";

const store = createStore(rootReducer, initialStore);

export default store;