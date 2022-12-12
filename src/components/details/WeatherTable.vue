<template>
    <div class="table-cont">
        <table class="weather-table">
            <thead>
                <th></th>
                <th>الوقت</th>
                <th>الحرارة</th>
                <th>العظمي</th>
                <th>الصغري</th>
                <th>الوصف</th>
                <th>الرطوبة</th>
                <th>الغيوم</th>
                <th>الضغط</th>
                <th>سرعة الرياح</th>
            </thead>

            <tbody>
                <tr v-for="(item, i) in list" :key="i">
                    <td><img class="weather-icon" :src="item.weather[0].icon"></td>
                    <td>
                        {{item.dt_txt.split('--')[0]}}
                        <br>
                        {{item.dt_txt.split('--')[1]}}
                    </td>
                    <td>{{item.main.temp | changeToArDigits}} <sup>C&deg;</sup></td>
                    <td>{{item.main.temp_max | changeToArDigits}} <sup>C&deg;</sup></td>
                    <td>{{item.main.temp_min | changeToArDigits}} <sup>C&deg;</sup></td>
                    <td>{{item.weather[0].description}}</td>
                    <td>{{item.main.humidity | changeToArDigits}} &percnt;</td>
                    <td>{{item.clouds.all | changeToArDigits}} &percnt;</td>
                    <td>{{item.main.pressure | changeToArDigits}}</td>
                    <td>{{item.wind.speed | changeToArDigits}}م/س</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.table-cont {
    margin-top: 20px;
    height: 450px !important;
    overflow: auto;
}
table.weather-table thead {
    position: sticky;
    top: 0;
}
table.weather-table, table.weather-table th, table.weather-table td {
    border: 1px solid rgba(0, 0, 0, 0.17);
    border-collapse: collapse;
    text-align: center;
}
table.weather-table th, table.weather-table td {
    min-width: 100px;
    padding: 10px;
    background: #0000002b;
}
table.weather-table th {
    background:rgba(0, 0, 0, 0.76)
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar:hover {
    width: 15px;
    height: 15px;
}
::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.17); 
}
::-webkit-scrollbar-thumb {
    background: #fff; 
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
    background: rgb(212, 212, 212); 
}
</style>
