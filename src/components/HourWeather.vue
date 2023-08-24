<template>
    <div class="container">
        <p>Почасовой прогноз:</p>
        <div class="weather-block">
            <button @click="leftBtnClick">
                ◃
            </button>
            <div class="hours-weather" v-for="hour in hoursArray" :key="hour.time_epoch">
                <transition-group name="hours-list">
                    <div class="one-hour" :key="hour.time_epoch">
                        <p>{{ hour.time.split(' ')[1] }}</p>
                        <img :src="'https:' + hour.condition.icon" alt="weather icon" class="weather-icon">
                    </div>
                </transition-group>
            </div>
            <button @click="rightBtnClick">
                ▹
            </button>
        </div>
    </div>
</template>

<script>
import { isMobile } from 'vue-device-detector'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    props: {
        hourWeatherProp: [Array, undefined]
    },
    methods: {
        ...mapMutations({
            setHourWeather: 'slide/setHourWeather',
            setStartHour: 'slide/setStartHour',
            setAmountHours: 'slide/setAmountHours'
        }),
        ...mapActions({
            leftBtnClick: 'slide/leftBtnClick',
            rightBtnClick: 'slide/rightBtnClick'
        })
    },
    computed: {
        ...mapState({
            hourWeather: state => state.slide.hourWeather,
            startHour: state => state.slide.startHour,
            amountHours: state => state.amountHours
        }),
        ...mapGetters({
            hoursArray: 'slide/hoursArray'
        }),
        isUserOnPhone() {
            return isMobile;
        }
    },
    mounted() {
        this.setHourWeather(this.hourWeatherProp)
        if(this.isUserOnPhone){
            this.setAmountHours(5)
            console.log('set')
        }
        else {
            console.log('not set')
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    color: wheat;
}

.weather-block {
    padding-top: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

transition-group {
    display: flex;
    flex-direction: row;
}

.one-hour {
    max-width: 3rem;
}

button {
    background-color: rgb(87, 160, 77);
    border-radius: 10px;
    border: none;
    width: 2rem;
    height: 2.5rem;
}

button:hover {
    background-color: rgb(117, 197, 106);
}

button:active {
    background-color: rgb(61, 124, 53);
}

.hours-list-enter-active,
.hours-list-leave-active {
    transition: all 0.2s linear;
}

.hours-list-enter-from,
.hours-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.hours-list-move {
    transition: all 0.2s linear;
}

@media (max-width: 600px) and (orientation: portrait) {

    button {
        width: 1em;
        height: 1.4em;
    }

    .one-hour {
        font-size: 9px;
    }

    img {
        width: 5em;
    }
}

@media (max-height: 900px) and (orientation: landscape) {
    button {
        width: 1.6em;
        height: 3em;
    }
}
</style>