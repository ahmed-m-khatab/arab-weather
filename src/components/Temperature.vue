<template>
    <div>
        <div class="loader" v-if="!temperature && temperature !== 0 && loading"></div>

        <section v-else-if="(temperature || temperature === 0) && !loading">
            <div class="temperature__value">{{ (temperature || '0') | changeToArDigits}}</div>
            <div class="temperature__right">
                <div class="temperature__scale">
                    <a href="#" @click.prevent="toggleTemperature">&deg;{{ scaleSymbol }}</a>
                </div>
                <div class="temperature__high">
                    <img src="../assets/icons/high.svg" alt="high temperature"><span>{{ (highTemprature  || '0') | changeToArDigits }}</span>&deg;
                </div>
                <div class="temperature__low">
                    <img src="../assets/icons/low.svg" alt="low temperature"><span>{{ (lowTemprature  || '0') | changeToArDigits }}</span>&deg;
                </div>
            </div>
        </section>

        <div v-else-if="(!temperature || temperature !== 0) && !loading" style="text-align: center; padding: 10px; margin: 20px auto; color:crimson;">حدث خطأ غير متوقع. منفضلك تحقق من اتصالك بالنترنت أو برجاء المحاولة لاحقا!</div>

    </div>
</template>

<script>
export default {
    name: 'Temperature',

    props: {
        value: {
            type: Number,
            required: true
        },
        high: {
            type: Number,
            required: true
        },
        low: {
            type: Number,
            required: true
        }
    },

    data: function() {
        return {
            scale: 'Celcius',
            timeout: null,
            interval: null,
            loading: false
        }
    },

    computed: {
        scaleSymbol() {
            return this.scale.charAt(0)
        },

        temperature () {
            let temp = null
            if (this.scaleSymbol === 'C') temp = this.value
            else temp = this.fValue
            return temp
        },

        highTemprature () {
            let temp = null
            if (this.scaleSymbol === 'C') temp = this.high
            else temp = this.fHigh
            return temp
        },

        lowTemprature () {
            let temp = null
            if (this.scaleSymbol === 'C') temp = this.low
            else temp = this.fLow
            return temp
        },

        fValue() {
            return this.toFahrenheit(this.value)
        },

        fHigh() {
            return this.toFahrenheit(this.high)
        },

        fLow() {
            return this.toFahrenheit(this.low)
        },
    },

    methods: {
        toFahrenheit(value) {
            return Math.floor((value * 1.8) + 32)
        },

        toggleTemperature() {
            (this.scale === 'Celcius') ? this.scale = 'Fahrenheit' : this.scale = 'Celcius'
        }
    },
    
    created () {
        this.loading = true
        this.interval = setInterval(() => {
            if (this.temperature || this.temperature === 0) {
                this.loading = false
                clearInterval(this.interval)
            }
        }, 500);
        this.timeout = setTimeout(() => {
            if (this.interval) clearInterval(this.interval)
            this.loading = false
        }, 5000);
    },

    beforeDestroy () {
        if (this.interval) clearInterval(this.interval)
        if (this.timeout) clearTimeout(this.timeout)
    }
}
</script>

<style scoped>

.loader {
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 50px;
    height: 50px;
    margin: 50px auto;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.temperature__value {
    font-size: 7em;
    color: #ffffff;
}

.temperature__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.temperature__high, .temperature__low {
    font-size: 20px;
}
.temperature__scale {
    padding-top: 5px;
    font-size: 2em;
    font-weight: bold;
    color: #ffffff;
}

.temperature__high {
    padding-top: 5px;
}

.temperature__high img {
    vertical-align: middle;
}

.temperature__low img {
    vertical-align: middle;
}
</style>
