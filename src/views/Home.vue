<template>
    <main :class="period">
        <Measurements
            :cloudiness="forecast.cloudiness"
            :windSpeed="forecast.windSpeed"
            :humidity="forecast.humidity"
        ></Measurements>

        <Temperature
            :value="forecast.temperatureValue"
            :high="forecast.temperatureHigh"
            :low="forecast.temperatureLow"
        ></Temperature>

        <Weather
            :location="forecast.location"
            :description="forecast.description"
            :icon="forecast.weatherIcon"
            :date="forecast.date"
        ></Weather>

        <router-link class="link" :to="{name: 'Details'}">تفاصيل أكثر</router-link>
    </main>
</template>

<script>
import Weather from '@/components/Weather'
import Temperature from '@/components/Temperature'
import Measurements from '@/components/Measurements'
import WeatherForecast from '@/services/WeatherForecast'

export default {
    name: 'WeatherApp',

    components: {
        Weather,
        Temperature,
        Measurements
    },

    data() {
        return {
            forecast: new WeatherForecast
        }
    },

    computed: {
        period() {
            let hour = new Date().getHours();

            return (hour > 5 && hour < 18)? 'app--day': 'app--night';
        }
    }
}
</script>

<style scoped>
main {
    width: 95%;
    height: 95%;
    padding: 5px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;

    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

main.app--day {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('../assets/images/mor.jpg');
}

main.app--night {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('../assets/images/ni.png');
}

.link {
    border: 2px solid;
    border-radius: 50px;
    padding: 5px 15px;
    position: absolute;
    bottom: 70px;
    transition: all .5s ease;
}
.link:hover {
    background: #44ddfc;
    border-color: #44ddfc;
    color: #fff;
}

@media screen and (min-width: 450px) {
    main {
        width: 330px;
        height: 600px;

        border-radius: 5px;
    }
}
</style>
