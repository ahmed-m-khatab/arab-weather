<template>
  <footer>
    <small><b>Ahmed Khatab</b> © {{ year }}</small>
  </footer>
</template>

<script>
export default {
  name: 'AppCredits',

  props: {
    year: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  position: absolute;
  bottom: 10px;
  visibility: hidden;
}

@media screen and (min-width: 450px) {
  footer {
    visibility: visible;
  }
}
</style>
