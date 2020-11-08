<template>
  <v-form
    ref="marksForm"
    v-model="valid"
    @submit.prevent="marksFormSubmit"
    lazy-validation
  >
    <v-card>
      <v-card-text>
        <v-row v-if="studentDetails.GRPID === 1">
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
              v-model="marks.ComparativeStudy"
              :counter="3"
              :rules="numberRule"
              label="Comperative Study of Legal Systems"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.NepaleseStudy"
              :counter="3"
              :rules="numberRule"
              label="Nepalese Laws on Gender & Accessibility to Justice"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.CivilPolitical"
              :counter="3"
              :rules="numberRule"
              label="Civil Political, Economic, Social, Cultural Rights and Thematic Mechanism for Enforcement of Human Rights"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 2">
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
              v-model="marks.ComparativeStudy"
              :counter="3"
              :rules="numberRule"
              label="Comperative Study of Legal Systems"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ContractLaw"
              :counter="3"
              :rules="numberRule"
              label="Contract Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.IntellectualProperty"
              :counter="3"
              :rules="numberRule"
              label="Law of Intellectual Property"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 3">
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
              v-model="marks.ComparativeStudy"
              :counter="3"
              :rules="numberRule"
              label="Comperative Study of Legal System"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.CriminalLaw"
              :counter="3"
              :rules="numberRule"
              label="Criminal Law Cases & Materials"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Forensic"
              :counter="3"
              :rules="numberRule"
              label="Forensic Jurisprudence"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.JuvinalJustice"
              :counter="3"
              :rules="numberRule"
              label="Juvenile Justice (Children in Conflict of Law)"
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
        this.marks.group = `${this.studentDetails.GRPID}`;
        await api.postLlmStudentMarks(this.marks);
        this.resetAll();
        this.close();
        let msg = {
          status: "true",
          text: "Marks added successfully",
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
