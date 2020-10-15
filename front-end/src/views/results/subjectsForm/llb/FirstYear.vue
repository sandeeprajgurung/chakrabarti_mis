<template>
  <v-form
    ref="marksForm"
    v-model="valid"
    @submit.prevent="marksFormSubmit"
    lazy-validation
  >
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Economic"
              :counter="3"
              :rules="numberRule"
              label="Economics"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Socology"
              :counter="3"
              :rules="numberRule"
              label="Sociology"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalWork"
              :counter="3"
              :rules="numberRule"
              label="Clinical Works"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.HistoryOfNepal"
              :counter="3"
              :rules="numberRule"
              label="History of Nepal"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.PrincipleOfLaw"
              :counter="3"
              :rules="numberRule"
              label="General Principles of Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ConceptOfLaw"
              :counter="3"
              :rules="numberRule"
              label="General Concept of Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Political"
              :counter="3"
              :rules="numberRule"
              label="Political Theory Thoughts"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LogicLegalReasoning"
              :counter="3"
              :rules="numberRule"
              label="Theories of Logic & Legal Reasoning"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" type="submit">
            <v-icon left>mdi-content-save</v-icon> Save
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
import api from "@/api";

export default {
  props: {
    SId: {
      type: Number,
      required: true,
    },
    programId: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    marks: {},
    valid: false,
    numberRule: [
      (v) => !!v || "Required",
      (v) =>
        Number.isInteger(Number(v)) || "The value must be an integer number",
      (v) => (v >= 0 && v <= 999) || "Number has to be between 0 and 999",
    ],
  }),

  methods: {
    async marksFormSubmit() {
      if (this.$refs.marksForm.validate() === true) {
        this.marks.SId = `${this.SId}`;
        this.marks.program = `${this.programId}`;
        await api.postLlmStudentMarks(this.marks);
        this.resetAll();
        this.close();
      }
    },

    close() {
      this.$emit("openModalStatus", false);
    },

    resetAll() {
      this.$refs.marksForm.reset();
      this.$refs.marksForm.resetValidation();
    },
  },
};
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
