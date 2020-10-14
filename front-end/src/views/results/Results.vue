<template>
  <section>
    <v-card class="mt-5 mb-5 pa-10">
      <v-card-title class="pa-0 mb-3">Add Result</v-card-title>
      <v-form
        ref="searchStudents"
        v-model="valid"
        @submit.prevent="searchFormSubmit"
        lazy-validation
      >
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="student.PrgId"
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
            <v-select
              v-model="student.GrpId"
              :items="group"
              item-text="grpname"
              item-value="grpid"
              label="Group id"
              :disabled="disable"
              dense
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-btn class="mr-4" type="submit" color="primary"> Search </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-form>
    </v-card>

    <result-students-table />
  </section>
</template>

<script>
import api from "@/api";
import ResultStudentsTable from "./ResultStudentsTable.vue";

export default {
  components: {
    ResultStudentsTable,
  },
  data: () => ({
    student: {},
    group: [],
    values: ["foo", "bar"],
    value: null,
    programmes: [],
    valid: null,
    disable: true,
  }),

  async created() {
    this.programmes = await api.getProgramme();
  },

  methods: {
    async selectedProgram() {
      if (this.student.PrgId > 5) {
        this.disable = false;
        this.group = await api.getLlmGroup();
      } else if (this.student.PrgId > 3) {
        this.disable = false;
        this.group = await api.getLlbGroup();
      } else {
        this.disable = true;
        this.group = [];
      }
    },

    async searchFormSubmit() {

    },

    clear() {

    },
  },
};
</script>