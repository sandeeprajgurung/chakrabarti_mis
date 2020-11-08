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
              v-model="marks.LegalPhilosophy"
              :counter="3"
              :rules="validRule"
              label="Legal Philosophy"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Agrarian"
              :counter="3"
              :rules="validRule"
              label="Agrarian Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Labour"
              :counter="3"
              :rules="validRule"
              label="Labour Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalHumanitarian"
              :counter="3"
              :rules="validRule"
              label="International Humanitarian Law & Conflict Resolution"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ConservationLaw"
              :counter="3"
              :rules="validRule"
              label="Conservation Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalLaw"
              :counter="3"
              :rules="validRule"
              label="Private International Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.PreTrialPresentation"
              :counter="3"
              :rules="validRule"
              label="Pre-Trial Presentation, Trial Advocacy & Appellate Advocacy"
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
              label="Clinical Education: Legal Professionalism Development"
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
        <hr />
        <div class="mt-4 mb-1 text-subtitle-2 grey--text text--darken-2">
          Optional Subject
        </div>
        <v-row v-if="studentDetails.GRPID === 1">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.OrganizedCrime"
              :counter="3"
              :rules="validRule"
              label="Law Against Organized Crime"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.FiscalCrime"
              :counter="3"
              :rules="validRule"
              label="Forensic Crime Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 2">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.IntellectualProperty"
              :counter="3"
              :rules="validRule"
              label="Intellectual Property"
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
              label="Taxation Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 3">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LawOfEquity"
              :counter="3"
              :rules="validRule"
              label="Law of Equity, Torts and Consumer Production"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LawOfGender"
              :counter="3"
              :rules="validRule"
              label="Law on Gender and Disadvantaged Sections of Population"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row v-if="studentDetails.GRPID === 4">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.EnergyLaw"
              :counter="3"
              :rules="validRule"
              label="Energy Law"
              type="string"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.CivilAviation"
              :counter="3"
              :rules="validRule"
              label="Civil Aviation & Tourism Law"
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
