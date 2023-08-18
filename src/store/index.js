import { createStore } from "vuex";
import { searchByLocsModule } from "./searchByLocsModule";
import { slideHoursWeather } from "./slideHoursWeather";

export default createStore({
    modules: {
        search: searchByLocsModule,
        slide: slideHoursWeather
    }
})