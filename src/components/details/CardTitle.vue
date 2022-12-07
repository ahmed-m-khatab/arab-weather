<template>
    <div class="card-title">
        <span class="city">{{city.name}}, {{city.country}}</span>
    </div>
</template>

<script>
export default {
    props: {
        city: {
            type: Object,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.weather-icon {
    width: 50px;
}
.city {
    font-size: 48px;
}
.card-title {
    text-align: center;
}
</style>