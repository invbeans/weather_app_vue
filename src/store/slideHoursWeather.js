export const slideHoursWeather = {
    state: () => ({
        hourWeather: [],
        startHour: 0
    }),
    mutations: {
        setHourWeather(state, hourWeather) {
            state.hourWeather = hourWeather
        },
        setStartHour(state, startHour) {
            state.startHour = startHour
        }
    },
    actions: {
        leftBtnClick({ state, commit }) {
            commit('setStartHour', (state.startHour <= 0) ? 0 : state.startHour - 1)
        },
        rightBtnClick({ state, commit }) {
            commit('setStartHour', (state.startHour >= 13) ? 13 : state.startHour + 1)
        }
    },
    getters: {
        hoursArray(state) {
            let sliceEnd = (state.startHour < 14) ? state.startHour + 11 : 24
            return state.hourWeather.slice(state.startHour, sliceEnd)
        }
    },
    namespaced: true
}