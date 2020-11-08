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
              :rules="numberRule"
              label="Legal Philosophy"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Agrarian"
              :counter="3"
              :rules="numberRule"
              label="Agrarian Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.Labour"
              :counter="3"
              :rules="numberRule"
              label="Labour Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.InternationalHumanitarian"
              :counter="3"
              :rules="numberRule"
              label="International Humanitarian Law & Conflict Resolution"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ConservationLaw"
              :counter="3"
              :rules="numberRule"
              label="Conservation Law"
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
              label="Private International Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.PreTrialPresentation"
              :counter="3"
              :rules="numberRule"
              label="Pre-Trial Presentation, Trial Advocacy & Appellate Advocacy"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.ClinicalEducation"
              :counter="3"
              :rules="numberRule"
              label="Clinical Education: Legal Professionalism Development"
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
        <hr />
        <div class="mt-4 mb-1 text-subtitle-2 grey--text text--darken-2">
          Optional Subject
        </div>
        <v-row v-if="studentDetails.GRPID === 1">
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.OrganizedCrime"
              :counter="3"
              :rules="numberRule"
              label="Law Against Organized Crime"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.FiscalCrime"
              :counter="3"
              :rules="numberRule"
              label="Forensic Crime Law"
              type="number"
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
              :rules="numberRule"
              label="Intellectual Property"
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
              label="Taxation Law"
              type="number"
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
              :rules="numberRule"
              label="Law of Equity, Torts and Consumer Production"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.LawOfGender"
              :counter="3"
              :rules="numberRule"
              label="Law on Gender and Disadvantaged Sections of Population"
              type="number"
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
              :rules="numberRule"
              label="Environmental Law"
              type="number"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="marks.WaterRiver"
              :counter="3"
              :rules="numberRule"
              label="Water and River Law"
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
