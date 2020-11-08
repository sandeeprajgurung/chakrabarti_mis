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
              :rules="numberRule"
              label="Feminist Jurisprudence"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.WomenHumanRights"
              :counter="3"
              :rules="numberRule"
              label="Women's Human Rights"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.EconomicSocialCulture"
              :counter="3"
              :rules="numberRule"
              label="Economic, Social & Culture Rights"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Dissertation"
              :counter="3"
              :rules="numberRule"
              label="Dissertation"
              type="number"
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
              :rules="numberRule"
              label="Banking Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.CorporateManagement"
              :counter="3"
              :rules="numberRule"
              label="Laws on Corporate Management"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.TradeLaw"
              :counter="3"
              :rules="numberRule"
              label="International Trade Law & Arbitration"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Taxation"
              :counter="3"
              :rules="numberRule"
              label="Taxation (Income Tax & Value Added Tax)"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Insurance"
              :counter="3"
              :rules="numberRule"
              label="Insurance"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Dissertation"
              :counter="3"
              :rules="numberRule"
              label="Dissertation"
              type="number"
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
              :rules="numberRule"
              label="Criminology & Penology"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.FairTrail"
              :counter="3"
              :rules="numberRule"
              label="Fair Trail (International Human Rights Law in Relation to Criminal Procedure)"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.WhiteCollar"
              :counter="3"
              :rules="numberRule"
              label="White Collar Crime"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Dissertation"
              :counter="3"
              :rules="numberRule"
              label="Dissertation"
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
