<template>
  <v-card>
    <v-card-title>
      Students
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table :headers="headers" :items="students" :search="search">
      <template v-slot:[`item.RESULT`]="{ item }">
        <v-icon v-if="item.PERCENT || resultAddedTrue" color="green">
          mdi-checkbox-marked-circle
        </v-icon>
      </template>

      <template v-slot:[`item.ACTIONS`]="{ item }">
        <v-icon color="primary" class="mr-2" @click.prevent="addMarks(item)">
          mdi-plus-circle
        </v-icon>
        <v-icon
          color="primary"
          class="mr-2"
          @click.prevent="openResultViewModal = true"
        >
          mdi-information
        </v-icon>
        <v-icon color="error" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>

    <add-results-modal
      :studentInfo="studentDetails"
      :openPostResultModal="openPostResultModal"
      @resultStatus="resultAdded"
      @closePostResultModal="closePostResultModalStatus"
    />

    <result-view-modal :openResultViewModal.sync="openResultViewModal" />
  </v-card>
</template>

<script>
import AddResultsModal from "./AddResultsModal.vue";
import ResultViewModal from "./ResultViewModal.vue";

export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },

  components: {
    AddResultsModal,
    ResultViewModal,
  },

  data() {
    return {
      programId: 0,
      id: 0,
      sound: true,
      widgets: false,
      openResultViewModal: false,
      openPostResultModal: false,
      studentDetails: {},
      search: "",
      resultAddedTrue: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "SNAME",
        },
        { text: "Roll no.", value: "ROLL_NO" },
        { text: "Batch", value: "BATCH" },
        { text: "Result", value: "RESULT" },
        { text: "Action", value: "ACTIONS" },
      ],
    };
  },

  methods: {
    addMarks(item) {
      this.studentDetails = Object.assign({}, item);
      // this.id = this.studentDetails;
      // this.programId = this.studentDetails.PRGID;
      this.openPostResultModal = true;
    },

     closePostResultModalStatus(value) {
      this.openPostResultModal = value;
    },

    resultAdded(value) {
      this.resultAddedTrue = value;
    },
  },
};
</script>
