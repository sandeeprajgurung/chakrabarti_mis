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
              v-model="marks.FeministJurisprudence"
              :counter="3"
              :rules="validRule"
              label="Feminist Jurisprudence"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.WomenHumanRights"
              :counter="3"
              :rules="validRule"
              label="Women's Human Rights"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.EconomicSocialCulture"
              :counter="3"
              :rules="validRule"
              label="Economic, Social & Culture Rights"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Dissertation"
              :counter="3"
              :rules="validRule"
              label="Dissertation"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 2">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.BankingLaw"
              :counter="3"
              :rules="validRule"
              label="Banking Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.CorporateManagement"
              :counter="3"
              :rules="validRule"
              label="Laws on Corporate Management"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.TradeLaw"
              :counter="3"
              :rules="validRule"
              label="International Trade Law & Arbitration"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Taxation"
              :counter="3"
              :rules="validRule"
              label="Taxation (Income Tax & Value Added Tax)"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Insurance"
              :counter="3"
              :rules="validRule"
              label="Insurance"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Dissertation"
              :counter="3"
              :rules="validRule"
              label="Dissertation"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 3">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Criminology"
              :counter="3"
              :rules="validRule"
              label="Criminology & Penology"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.FairTrail"
              :counter="3"
              :rules="validRule"
              label="Fair Trail (International Human Rights Law in Relation to Criminal Procedure)"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.WhiteCollar"
              :counter="3"
              :rules="validRule"
              label="White Collar Crime"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Dissertation"
              :counter="3"
              :rules="validRule"
              label="Dissertation"
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