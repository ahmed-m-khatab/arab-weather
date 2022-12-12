<template>
    <div>
        <div class="weather-card">
            <div class="main">
                <div class="day-desc">
                    {{weatherDetails.dt_txt.split('--')[0]}}
                    <br>
                    <strong>{{weatherDetails.weather[0].description}}</strong>
                    <br>
                    {{weatherDetails.dt_txt.split('--')[1]}}
                </div>
                <img class="weather-icon" :src="weatherDetails.weather[0].icon">
                <div class="temp">
                    <strong>{{weatherDetails.main.temp | changeToArDigits}} <sup>C&deg;</sup></strong>
                    <br>
                    <small>{{weatherDetails.main.temp_max | changeToArDigits}} <sup>C&deg;</sup> / {{weatherDetails.main.temp_min | changeToArDigits}} <sup>C&deg;</sup></small>
                </div>
            </div>
            <hr>
            <ul>
                <li><img class="weather-icon-sm" src="../../assets/icons/humidity.svg" alt="humidity"> {{weatherDetails.main.humidity | changeToArDigits}} &percnt;</li>
                <li><img class="weather-icon-sm" src="../../assets/icons/cloud.svg" alt="cloudiness"> {{weatherDetails.clouds.all | changeToArDigits}} &percnt;</li>
                <li><img class="weather-icon-sm" src="../../assets/icons/wind.svg" alt="wind speed"> {{weatherDetails.wind.speed | changeToArDigits}}م/س</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['weatherDetails']
}
</script>


<style>
.weather-card {
    background: rgba(0, 0, 0, 0.17);
    border-radius: 20px;
    color: #fff;
    overflow: hidden;
    margin: 20px 0;
    padding: 10px;
}
.weather-card .main {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.weather-card .day-desc {
    font-size: 1.1rem;
    text-align: center;
}
.temp {
    text-align: center;
    font-size: 1.1rem
}
.temp strong {
    font-size: 1.5rem;
}
hr {
    margin: 10px 0;
    border: 0.5px solid;
    background-color: #fff;
}
.weather-card ul {
    display: inline-flex;
    width: 100%;
    list-style: none;
}
.weather-card ul li {
    width: 33%;
    font-size: 1.1rem;
    text-align: center;
}
.weather-icon-sm {
    width: 25px;
}
</style>
