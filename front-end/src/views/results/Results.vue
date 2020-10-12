<template>
    <section>
        <v-card>
            <v-container fluid>
                <v-row>
                    <v-col md="6">
                        <v-autocomplete v-model="values" :items="items" outlined label="Search students">
                        </v-autocomplete>
                    </v-col>
                    <v-col md="6">
                        <v-select :items="items" label="Select programs" outlined></v-select>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </section>
</template>

<script>
    export default {
        data: () => ({
            items: ['foo', 'bar', 'fizz', 'buzz'],
            values: ['foo', 'bar'],
            value: null,
        }),
    }
</script>