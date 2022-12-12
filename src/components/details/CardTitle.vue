<template>
    <div class="card-title">
        <h1>{{'تفاصيل الطقس في ' + city.name}}</h1>
        <router-link to="/"><span class="return-icon">&LeftArrow;</span></router-link>
    </div>
</template>

<script>
export default {
    props: {
        city: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.weather-icon {
    width: 50px;
}
.card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.return-icon {
    font-size: 30px;
}
</style>