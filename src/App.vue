<template>
  <div id="app">
    <div class="app" :class="period">
      <WeatherApp :class="period"></WeatherApp>
      <AppCredits :year="year"></AppCredits>
    </div>
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp'
import AppCredits from './components/AppCredits'

export default {
  name: 'App',

  components: {
    WeatherApp,
    AppCredits
  },

  data() {
    return {
      date: new Date
    }
  },

  computed: {
    year() {
      return this.date.getFullYear();
    },

    period() {
      let hour = this.date.getHours();

      return (hour > 5 && hour < 18)? 'app--day': 'app--night';
    }
  }
}
</script>

<style>
/** Global **/
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Tajawal', sans-serif;
  color: #fff;
  direction: rtl;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color .2s ease-in;
}

/** App **/
.app {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.app--day {
  /*background: linear-gradient(to bottom right, #6CB9C8, #6CB9C8) no-repeat;*/
  background: linear-gradient(to bottom, #2980b9, #6dd5fa, #89def8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.app--night {
  /*background: linear-gradient(to bottom right, #484F60, #484F60) no-repeat;*/
  background: linear-gradient(to bottom, #c31432, #240b36); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.app--day a:hover {
  color: rgba(142, 236, 255, 0.9);
}

.app--night a:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
