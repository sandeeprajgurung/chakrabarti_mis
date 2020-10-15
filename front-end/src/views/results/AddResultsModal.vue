<template>
  <v-row justify="center">
    <v-dialog v-model="openPostResultModal" persistent max-width="900">
      <v-card>
        <v-card-title class="headline px-3">
          First Year <v-spacer></v-spacer>
          <v-btn icon color="pink" @click="close">
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-card-title>
        <first-year
          v-if="program === 1"
          :SId="studentId"
          :programId="program"
          @openModalStatus="closePostResultModal"
        />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import FirstYear from "./subjectsForm/llb/FirstYear.vue";

export default {
  props: {
    openPostResultModal: {
      type: Boolean,
      default: false,
    },
    studentId: {
      type: Number,
      required: true,
    },
    program: {
      type: Number,
      required: true,
    },
  },

  components: {
    FirstYear,
  },

  data() {
    return {
      openModal: true,
    };
  },

  methods: {
    close() {
      this.$emit("closePostResultModal", false);
    },

    closePostResultModal(value) {
      this.$emit("closePostResultModal", value);
    },
  },
};
</script>
