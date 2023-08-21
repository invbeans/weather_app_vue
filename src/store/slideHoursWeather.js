export const slideHoursWeather = {
    state: () => ({
        hourWeather: [],
        startHour: 0,
        amountHours: 10,
    }),
    mutations: {
        setHourWeather(state, hourWeather) {
            state.hourWeather = hourWeather
        },
        setStartHour(state, startHour) {
            state.startHour = startHour
        },
        setAmountHours(state, amountHours){
            state.amountHours = amountHours
        }
    },
    actions: {
        leftBtnClick({ state, commit }) {
            commit('setStartHour', (state.startHour <= 0) ? 0 : state.startHour - 1)
        },
        rightBtnClick({ state, commit }) {
            commit('setStartHour', (state.startHour >= (23 - state.amountHours)) ? (23 - state.amountHours) : state.startHour + 1)
        }
    },
    getters: {
        hoursArray(state) {
            let sliceEnd = (state.startHour < (24 - state.amountHours)) ? state.startHour + state.amountHours + 1 : 24
            return state.hourWeather.slice(state.startHour, sliceEnd)
        }
    },
    namespaced: true
}