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
              v-model="marks.ContractLaw"
              :counter="3"
              :rules="validRule"
              label="Contract Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.CompanyLaw"
              :counter="3"
              :rules="validRule"
              label="Company Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.AdministativeLaw"
              :counter="3"
              :rules="validRule"
              label="Administrative Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.AdvanceJurisprudence"
              :counter="3"
              :rules="validRule"
              label="Advanced Jurisprudence"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationDisputes"
              :counter="3"
              :rules="validRule"
              label="Settlement of International Disputes"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalEducation"
              :counter="3"
              :rules="validRule"
              label="Clinical Education: Community Outreach and Rural Law Advocacy Service"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalLegalEducation"
              :counter="3"
              :rules="validRule"
              label="Clinical Leagal Education: Effective Legal Writing Criminal Case"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <hr />
        <div class="mt-4 mb-1 text-subtitle-2 grey--text text--darken-2">
          Optional Subject
        </div>
        <v-row v-if="studentDetails.GRPID === 1">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Criminology"
              :counter="3"
              :rules="validRule"
              label="Criminology and Ponology"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Forensic"
              :counter="3"
              :rules="validRule"
              label="Forensic Science and Medical Jurisprudence"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 2">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.BankingInsurance"
              :counter="3"
              :rules="validRule"
              label="Banking and Insurance Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalTrade"
              :counter="3"
              :rules="validRule"
              label="International Trade Law and Arbitration"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 3">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.GoodGovernance"
              :counter="3"
              :rules="validRule"
              label="Law on Good Governance"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ElectroalLaw"
              :counter="3"
              :rules="validRule"
              label="Electoral Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 4">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.EnvironmentLaw"
              :counter="3"
              :rules="validRule"
              label="Environmental Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.WaterRiver"
              :counter="3"
              :rules="validRule"
              label="Water and River Law"
              type="string"
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
        this.marks.SId = `${this.studentDetails.SID}`;
        this.marks.program = `${this.studentDetails.PRGID}`;
        this.marks.group = `${this.studentDetails.GRPID}`;
        await api.postLlbStudentMarks(this.marks);
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
