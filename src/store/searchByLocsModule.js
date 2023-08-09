import axios from "axios";
import CurrentWeather from "@/models/currentWeather";

let weatherConfig = {
    headers: {
        'X-RapidAPI-Key': process.env.VUE_APP_APIKEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
    params: {
        'q': ''
    }
}

export const searchByLocsModule = {
    state: () => ({
        searchQuery: '',
        apiResponse: {}
    }),
    mutations: {
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setApiResponse(state, apiResponse) {
            state.apiResponse = new CurrentWeather(apiResponse.location.localtime,
                apiResponse.current.temp_c,
                apiResponse.current.condition.text,
                apiResponse.current.condition.icon,
                apiResponse.current.wind_kph,
                apiResponse.current.wind_dir,
                apiResponse.current.pressure_mb,
                apiResponse.current.humidity,
                apiResponse.current.feelslike_c
                )
        }
    },
    actions: {
        async searchWeather({ state, commit }) {
            try {
                weatherConfig.params.q = state.searchQuery
                const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', weatherConfig)
                commit('setApiResponse', response.data)
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