<template>
  <section>
    <v-card class="mt-5 pa-10">
      <v-card-title class="pa-0 mb-3">Add Result</v-card-title>
      <v-form
        ref="searchStudents"
        v-model="valid"
        @submit.prevent="resultFormSubmit"
        lazy-validation
      >
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              :items="programmes"
              item-text="PRGNAME"
              item-value="PRGID"
              @change="selectedProgram"
              :rules="[(v) => !!v || 'PRGID is required']"
              label="Programme"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="items" label="Group id" dense outlined></v-select>
          </v-col>
        </v-row>
        <v-btn class="mr-4" type="submit" color="primary"> Search </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-form>
    </v-card>
  </section>
</template>

<script>
import api from "@/api";

export default {
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    values: ["foo", "bar"],
    value: null,
    programmes: [],
  }),

  async created() {
    this.programmes = await api.getProgramme();
  },
};
</script>