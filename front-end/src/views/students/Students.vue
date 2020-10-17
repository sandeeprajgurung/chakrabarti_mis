<template>
  <section>
    <students-table v-on:childToParent="onChildClick" />

    <template>
      <div class="text-center">
        <v-snackbar
          class="white--text"
          color="green darken-2"
          v-model="snackbar"
          :timeout="timeout"
        >
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </template>
  </section>
</template>

<script>
import StudentsTable from "./StudentsTable.vue";

export default {
  components: {
    StudentsTable,
  },
  data: () => ({
    name: "",
    email: "",
    select: null,
    errors: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    snackbar: false,
    text: "",
    timeout: 3000,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    onChildClick(value) {
      this.snackbar = value.status;
      this.text = value.text;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>