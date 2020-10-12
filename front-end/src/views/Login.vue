<template>
    <div>
        <v-bottom-navigation v-model="tabValue" color="teal" grow>
            <v-btn tabValue="0" @click="selectCategory('results')">
                <span>View Result</span>
                <v-icon>mdi-library</v-icon>
            </v-btn>
            <v-btn tabValue="1" @click="selectCategory('login')">
                <span>Login</span>
                <v-icon>mdi-login</v-icon>
            </v-btn>
        </v-bottom-navigation>

        <v-container>
            <v-card v-if="tabValue === 0" outlined class="mt-5 pa-10">
                <v-card-title class="pa-0">View Result</v-card-title>
                <form>
                    <v-row>
                        <v-col md="6">
                            <v-text-field v-model="symbolNumber" :counter="10" :error-messages="errors"
                                label="Symbol No." required />
                        </v-col>
                        <v-col md="6">
                            <v-select v-model="select" :items="items" label="Standard"></v-select>
                        </v-col>
                    </v-row>
                    <v-btn class="mr-4" @click="submit">
                        Search
                    </v-btn>
                    <v-btn @click="clear">
                        clear
                    </v-btn>
                </form>
            </v-card>

            <v-card v-if="tabValue === 1" outlined class="mt-5 pa-10">
                <v-card-title class="pa-0">Login</v-card-title>
                <form>
                    <v-row>
                        <v-col md="6">
                            <v-text-field v-model="username" :error-messages="errors" type="text" label="Username"
                                required />
                        </v-col>
                        <v-col md="6">
                            <v-text-field v-model="password" :error-messages="errors" type="password" label="Password"
                                required />
                        </v-col>
                    </v-row>
                    <v-btn class="mr-4" @click="submit">
                        Submit
                    </v-btn>
                    <v-btn @click="clear">
                        clear
                    </v-btn>
                </form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            name: '',
            email: '',
            symbolNumber: '',
            username: '',
            password: '',
            select: null,
            errors: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: null,
            tabValue: 0
        }),

        methods: {
            submit() {
                this.$refs.observer.validate()
            },
            clear() {
                this.symbolNumber = ''
                this.username = ''
                this.password = ''
                this.select = null
            },
            selectCategory($category) {
                if ($category === 'login') {
                    return this.tabValue = 1;
                }
                return this.tabValue = 0;
            }
        },
    }
</script>