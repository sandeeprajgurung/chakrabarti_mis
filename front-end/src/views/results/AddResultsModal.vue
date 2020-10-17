<template>
  <v-row justify="center">
    <v-dialog v-model="openPostResultModal" persistent max-width="900">
      <v-card>
        <v-card-title class="headline px-3">
          {{ programYear(studentInfo.PRGID) }}
          <v-spacer></v-spacer>
          <v-btn icon color="pink" @click="close">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-card-title>
        <div class="grey--text text--darken-2 text-subtitle-2 ml-3 mb-3">
          Name: {{ studentInfo.SNAME }}
        </div>
        <first-year
          v-if="studentInfo.PRGID === 1"
          :studentDetails="studentInfo"
          v-on:childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
        <second-year
          v-if="studentInfo.PRGID === 2"
          :studentDetails="studentInfo"
          v-on:childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
        <third-year
          v-if="studentInfo.PRGID === 3"
          :studentDetails="studentInfo"
          v-on:childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
        <fourth-year
          v-if="studentInfo.PRGID === 4"
          :studentDetails="studentInfo"
          v-on:childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
        <fifth-year
          v-if="studentInfo.PRGID === 5"
          :studentDetails="studentInfo"
          v-on:childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
        <llm-first-year
          v-if="studentInfo.PRGID === 6"
          :studentDetails="studentInfo"
          v-on:childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
        <llm-second-year
          v-if="studentInfo.PRGID === 7"
          :studentDetails="studentInfo"
          @childToParent="onChildClick"
          @openModalStatus="closePostResultModal"
        />
      </v-card>
    </v-dialog>
    <v-snackbar
      class="white--text"
      color="green darken-2"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
import FirstYear from "./subjectsForm/llb/FirstYear.vue";
import SecondYear from './subjectsForm/llb/SecondYear.vue';
import ThirdYear from './subjectsForm/llb/ThirdYear.vue';
import FourthYear from "./subjectsForm/llb/FourthYear.vue";
import FifthYear from './subjectsForm/llb/FifthYear.vue';

import LlmFirstYear from './subjectsForm/llm/FirstYear.vue';
import LlmSecondYear from './subjectsForm/llm/SecondYear.vue';

export default {
  props: {
    openPostResultModal: {
      type: Boolean,
      default: false,
    },
    studentInfo: {
      type: Object,
      required: true,
    },
  },

  components: {
    FirstYear,
    SecondYear,
    ThirdYear,
    FourthYear,
    FifthYear,
    LlmFirstYear,
    LlmSecondYear
  },

  data() {
    return {
      openModal: true,
      snackbar: false,
      text: "",
      timeout: 3000,
    };
  },

  methods: {
    programYear(programId) {
      if (programId === 1 || programId === 6) {
        return "First Year";
      }
      if (programId === 2 || programId === 7) {
        return "Second Year";
      }
      if (programId === 4) {
        return "Fourth Year";
      }
      if (programId === 5) {
        return "Fifth Year";
      }
      return "Third Year";
    },

    close() {
      this.$emit("closePostResultModal", false);
    },

    closePostResultModal(value) {
      this.$emit("closePostResultModal", value);
    },

    onChildClick(value) {
      this.snackbar = value.status;
      this.text = value.text;
      this.$emit("resultStatus", value);
    },
  },
};
</script>
