<template>
  <v-form
    ref="marksForm"
    v-model="valid"
    @submit.prevent="marksFormSubmit"
    lazy-validation
  >
    <v-card>
      <v-card-text>
        <v-alert dense text type="info">
          Please enter <strong>'I'</strong> for abscent students.
        </v-alert>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalHumanRight"
              :counter="3"
              :rules="validRule"
              label="International Human Rights Law"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Interpretation"
              :counter="3"
              :rules="validRule"
              label="Principles of Interpretation"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LawEvidence"
              :counter="3"
              :rules="validRule"
              label="Law of Evidence"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalLaw"
              :counter="3"
              :rules="validRule"
              label="Public International Law"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ConstitutionalLaw"
              :counter="3"
              :rules="validRule"
              label="Constitutional Law & Constitutionalism"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LegalResearch"
              :counter="3"
              :rules="validRule"
              label="Legal Research"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ProfessionalEthics"
              :counter="3"
              :rules="validRule"
              label="Professional Ethics"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalLegalEducation"
              :counter="3"
              :rules="validRule"
              label="Clinical Legal Education: Effective Legal Writing Civil Case"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalWork"
              :counter="3"
              :rules="validRule"
              label="Clinical Work" 
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
    validRule: [
      (v) => !!v || "Required",
      (v) => v.length <= 3 || "Marks must be less than 3 Digits",
    ],
  }),

  methods: {
    async marksFormSubmit() {
      if (this.$refs.marksForm.validate() === true) {
        this.marks.SId = `${this.studentDetails.ID}`;
        this.marks.program = `${this.studentDetails.PROGRAMMEID}`;
        await api.postLlbStudentMarks(this.marks);
        this.resetAll();
        this.close();
        let msg = {
          status: "true",
          text: "Marks added successfully",
          studentId: this.marks.SId,
        };
        this.$emit("childToParent", msg);
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
input[type="string"] {
  -moz-appearance: textfield;
}
</style>
