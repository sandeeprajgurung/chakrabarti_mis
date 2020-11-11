<template>
  <section>
    <v-row>
      <v-col md="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Total Students</div>
            <p class="display-2 text--primary">700</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Total Students Appeared in exam</div>
            <p class="display-2 text--primary">600</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div>Total Passed Students</div>
            <p class="display-2 text--primary">550</p>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col md="6">
                <bar-chart :chart-data="datacollection"></bar-chart>
                <button @click="fillData()">Randomize</button>
            </v-col> -->
    </v-row>
  </section>
</template>

<script>
// import BarChart from './BarChart.js'

// export default {
//     components: {
//         BarChart
//     },
//     data() {
//         return {
//             datacollection: null
//         }
//     },
//     mounted() {
//         this.fillData()
//     },
//     methods: {
//         fillData() {
//             this.datacollection = {
//                 labels: ['2020 Batch', '2019 Batch'],
//                 datasets: [{
//                     label: 'Pass',
//                     backgroundColor: '#9AD0F5',
//                     data: [this.getRandomInt(), this.getRandomInt()]
//                 }, {
//                     label: 'Fail',
//                     backgroundColor: '#f87979',
//                     data: [this.getRandomInt(), this.getRandomInt()]
//                 }]
//             }
//         },
//         getRandomInt() {
//             return Math.floor(Math.random() * (50 - 5 + 1)) + 5
//         }
//     }
// }
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>