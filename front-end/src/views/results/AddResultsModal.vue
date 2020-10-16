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
          @openModalStatus="closePostResultModal"
        />
        <fourth-year
          v-if="studentInfo.PRGID === 4"
          :studentDetails="studentInfo"
          @openModalStatus="closePostResultModal"
        />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import FirstYear from "./subjectsForm/llb/FirstYear.vue";
import FourthYear from "./subjectsForm/llb/FourthYear.vue";

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
    FourthYear,
  },

  data() {
    return {
      openModal: true,
    };
  },

  methods: {
    programYear(programId) {
      if (programId === 1) {
        return "First Year";
      }
      if (programId === 4) {
        return "Fourth Year";
      }
      return;
    },
    close() {
      this.$emit("closePostResultModal", false);
    },

    closePostResultModal(value) {
      this.$emit("closePostResultModal", value);
    },
  },
};
</script>
