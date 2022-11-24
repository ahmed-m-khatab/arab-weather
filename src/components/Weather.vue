<template>
    <section>
        <div class="location">{{ location }}</div>
        <div class="weather__description">
            {{ description }}
            <br v-if="date">
            <span v-if="date">{{ date }}</span>
        </div>
        <div style="text-align: center;">
            <img class="weather__icon" :src="icon" :alt="description">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Weather',

    props: {
        location: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.location {
    text-transform: uppercase;
    font-weight: bold;
}

.weather__description, .location {
    font-size: 20px;
    font-weight: bold;
}

.weather__description {
    text-transform: lowercase;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    margin-top: 20px;
}

.weather__description:first-letter {
    text-transform: uppercase;
}

.weather__icon {
    width: 15em;
}
</style>
