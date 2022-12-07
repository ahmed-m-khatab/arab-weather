<template>
    <div>
        <div class="details">
            <div style="display: none;">{{forecast}}</div>
            <CardTitle :city="forecast.daily.city" />
            <WeatherTable :list="forecast.daily.list" />
        </div>
    </div>
</template>

<script>
import WeatherForecast from '@/services/WeatherForecast'
import CardTitle from '@/components/details/CardTitle'
import WeatherTable from '@/components/details/WeatherTable'

export default {
    name: 'WeatherForecastDetails',

    components: {
        CardTitle,
        WeatherTable
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

<style>
.details {
    padding: 20px;
    background: rgba(0, 0, 0, 0.17);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    width: 100%;
}
.weather-icon {
    display: inline-flex;
}

@media screen and (max-width: 1080px) {
    .details {
        width: 900px;
    }
}

@media screen and (max-width: 980px) {
    .details {
        width: 750px;
    }
}

@media screen and (max-width: 760px) {
    .details {
        width: 500px;
    }
}

@media screen and (max-width: 502px) {
    .details {
        width: 450px;
    }
}

@media screen and (max-width: 460px) {
    .details {
        width: 300px;
    }
}
</style>
