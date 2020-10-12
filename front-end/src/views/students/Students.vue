<template>
    <section>
        <StudentsTable />
    </section>
</template>

<script>
import StudentsTable from './StudentsTable.vue'
    export default {
        components: {
            StudentsTable
        },
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

<style lang="scss" scoped>

</style>