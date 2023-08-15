import axios from "axios";
import CurrentWeather from "@/models/currentWeather";

let weatherConfig = {
    headers: {
        'X-RapidAPI-Key': process.env.VUE_APP_APIKEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
    params: {
        'q': ''
    },

}

export const searchByLocsModule = {
    state: () => ({
        searchQuery: '',
        localityWeather: undefined,
        foundLocalities: [],
        chosenLocality: undefined
    }),
    mutations: {
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setLocalityWeather(state, localityWeather) {
            state.localityWeather = new CurrentWeather(
                localityWeather.location.name,
                localityWeather.location.localtime,
                localityWeather.current.temp_c,
                localityWeather.current.condition.text,
                localityWeather.current.condition.icon,
                localityWeather.current.wind_kph,
                localityWeather.current.wind_dir,
                localityWeather.current.pressure_mb,
                localityWeather.current.humidity,
                localityWeather.current.feelslike_c
                )
        },
        setFoundLocalities(state, foundLocalities){
            state.foundLocalities = foundLocalities
            state.localityWeather = undefined
        },
        setChosenLocality(state, chosenLocality){
            state.chosenLocality = chosenLocality
        }
    },
    actions: {
        async searchLocation({ state, commit }) {
            try {
                weatherConfig.params.q = state.searchQuery
                const response = await axios.get('https://weatherapi-com.p.rapidapi.com/search.json', weatherConfig)
                commit('setFoundLocalities', response.data)
            }
            catch (e) {
                console.log(e)
            }
        },
        async searchWeatherByLatLong({ state, commit }) {
            try {
                weatherConfig.params.q = state.chosenLocality.lat + "," +  state.chosenLocality.lon
                const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', weatherConfig)
                commit('setLocalityWeather', response.data)
                console.log(state.localityWeather)
            }
            catch (e) {
                console.log(e)
            }
            finally {
                commit('setSearchQuery', '')
            }
        }
    },
    namespaced: true
}