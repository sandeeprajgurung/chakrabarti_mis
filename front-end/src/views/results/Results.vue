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
              :rules="[(v) => !!v || 'Program is required']"
              label="Programme"
              outlined
              dense
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-if="visible"
              v-model="student.GrpId"
              :items="group"
              :rules="[(v) => !!v || 'Group is required']"
              item-text="grpname"
              item-value="grpid"
              label="Group id"
              dense
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-btn class="mr-4" type="submit" color="primary"> Search </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </v-form>
    </v-card>

    <result-students-table
      v-if="getStudents.length > 0"
      :students="getStudents"
    />
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
    students: {},
    group: [],
    values: ["foo", "bar"],
    value: null,
    programmes: [],
    valid: true,
    visible: false,
    getStudents: [],
  }),

  async created() {
    this.programmes = await api.getProgramme();
  },

  methods: {
    async selectedProgram() {
      if (this.student.PrgId > 5) {
        this.visible = true;
        this.group = await api.getLlmGroup();
      } else if (this.student.PrgId > 3) {
        this.visible = true;
        this.group = await api.getLlbGroup();
      } else {
        this.visible = false;
        this.group = [];
      }
    },

    async searchFormSubmit() {
      if (this.$refs.searchStudents.validate() === true) {
        console.log(this.student);
        if (this.student.PrgId <= 3) {
          return (this.getStudents = await api.searchLlbStudents(this.student));
        }
        if (this.student.PrgId >= 6) {
          return (this.getStudents = await api.searchLlmStudents(this.student));
        }
        return (this.getStudents = await api.searchLlbStudents(this.student));
      }
    },

    clear() {
      this.$refs.searchStudents.reset();
      this.$refs.searchStudents.resetValidation();
    },
  },
};
</script>
