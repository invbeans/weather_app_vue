export default class CurrentWeather {
    constructor(name, localtime, temp_c, text,
        icon, wind_kph, wind_dir, pressure_mb,
        humidity, feelslike_c) {
            this.name = name
            this.localtime = localtime.split(' ')[0]
            this.temp_c = temp_c
            this.text = text
            this.icon = "https:" + icon
            this.wind_ms = wind_kph / 3.6
            this.wind_dir = wind_dir
            this.pressure_mm_rt_st = pressure_mb / 1.333
            this.humidity = humidity * 100 / (6.11 * 10^((7.5*temp_c)/(237.3+temp_c)))
            this.feelslike_c = feelslike_c
        }
}