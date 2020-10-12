<template>
    <form>
        <v-text-field v-model="name" :counter="10" :error-messages="errors" label="Name" required>
        </v-text-field>

        <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>

        <v-select v-model="select" :items="items" :error-messages="errors" label="Select" data-vv-name="select"
            required></v-select>

        <v-checkbox v-model="checkbox" :error-messages="errors" value="1" label="Option" type="checkbox" required>
        </v-checkbox>

        <v-btn class="mr-4" @click="submit">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>
</template>

<script>
    export default {
        data: () => ({
            name: '',
            email: '',
            select: null,
            errors: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: null,
        }),

        methods: {
            submit() {
                this.$refs.observer.validate()
            },
            clear() {
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = null
                this.$refs.observer.reset()
            },
        },
    }
</script>