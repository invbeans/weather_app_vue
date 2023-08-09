import { createStore } from "vuex";
import { searchByLocsModule } from "./searchByLocsModule";

export default createStore({
    modules: {
        search: searchByLocsModule
    }
})