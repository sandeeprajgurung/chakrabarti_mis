<template>
    <section>
        <v-row>
            <v-col md="6">
                <bar-chart :chart-data="datacollection"></bar-chart>
                <button @click="fillData()">Randomize</button>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import BarChart from './BarChart.js'

    export default {
        components: {
            BarChart
        },
        data() {
            return {
                datacollection: null
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: ['2020 Batch', '2019 Batch'],
                    datasets: [{
                        label: 'Pass',
                        backgroundColor: '#9AD0F5',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }, {
                        label: 'Fail',
                        backgroundColor: '#f87979',
                        data: [this.getRandomInt(), this.getRandomInt()]
                    }]
                }
            },
            getRandomInt() {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin: 150px auto;
    }
</style>