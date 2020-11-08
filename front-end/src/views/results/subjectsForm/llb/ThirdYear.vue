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
              v-model="marks.InternationalHumanRight"
              :counter="3"
              :rules="numberRule"
              label="International Human Rights Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Interpretation"
              :counter="3"
              :rules="numberRule"
              label="Principles of Interpretation"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LawEvidence"
              :counter="3"
              :rules="numberRule"
              label="Law of Evidence"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalLaw"
              :counter="3"
              :rules="numberRule"
              label="Public International Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ConstitutionalLaw"
              :counter="3"
              :rules="numberRule"
              label="Constitutional Law & Constitutionalism"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LegalResearch"
              :counter="3"
              :rules="numberRule"
              label="Legal Research"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ProfessionalEthics"
              :counter="3"
              :rules="numberRule"
              label="Professional Ethics"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalLegalEducation"
              :counter="3"
              :rules="numberRule"
              label="Clinical Legal Education: Effective Legal Writing Civil Case"
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
              label="Clinical Work"
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
    studentDetails: {
      type: Object,
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
        this.marks.SId = `${this.studentDetails.SID}`;
        this.marks.program = `${this.studentDetails.PRGID}`;
        await api.postLlbStudentMarks(this.marks);
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
