<template>
  <div>
    <v-bottom-navigation v-model="tabValue" color="teal" grow class="no-print">
      <v-btn tabValue="0" @click="selectCategory('results')">
        <span>View Result</span>
        <v-icon>mdi-library</v-icon>
      </v-btn>
      <v-btn v-if="show" tabValue="1" @click="selectCategory('login')">
        <span>Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-container>
      <v-card v-if="tabValue === 0" outlined class="mt-5 pa-10 no-print">
        <v-card-title class="pa-0">View Result</v-card-title>
        <v-form
          ref="viewResultsForm"
          v-model="valid"
          @submit.prevent="resultFormSubmit"
          lazy-validation
        >
          <v-row>
            <v-col cols="12" sm="4">
              <v-select
                v-model="result.academic"
                :items="academics"
                item-text="name"
                item-value="id"
                @change="selectedAcademic"
                :rules="[(v) => !!v || 'Academics is required']"
                label="Academics*"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                v-model="result.program"
                :items="programs"
                item-text="name"
                item-value="id"
                :rules="[(v) => !!v || 'Program is required']"
                label="Program*"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="result.symbolNo"
                :counter="10"
                :rules="[(v) => !!v || 'Symbol Number is required']"
                label="Symbol No.*"
                required
              />
            </v-col>
          </v-row>
          <v-btn class="mr-4" type="submit" color="primary"> Search </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </v-form>
      </v-card>

      <v-card v-if="tabValue === 1" outlined class="mt-5 pa-10">
        <v-card-title class="pa-0">Login</v-card-title>
        <v-form
          ref="loginForm"
          v-model="valid"
          lazy-validation
          @submit.prevent="loginSubmit"
        >
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="model.username"
                :rules="[(v) => !!v || 'Username is required']"
                type="text"
                label="Username"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="model.password"
                :rules="[(v) => !!v || 'Password is required']"
                type="password"
                label="Password"
              />
            </v-col>
          </v-row>
          <v-btn class="mr-4" type="submit" color="primary"> Submit </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </v-form>
      </v-card>

      <marksheet v-if="marks.length > 0" :studentMarks="marks" />
    </v-container>
  </div>
</template>

<script>
import api from "@/api";
import Marksheet from "./partials/Marksheet.vue";

var jwt = require("jsonwebtoken");

export default {
  components: {
    Marksheet,
  },
  data: () => ({
    valid: true,
    name: "",
    email: "",
    symbolNumber: "",
    username: "",
    password: "",
    result: {},
    select: null,
    programs: [],
    marks: [],
    graduate: [
      { id: "6", name: "LL.M First Year" },
      { id: "7", name: "LL.M Second Year" },
    ],
    academics: [
      { name: "Undergraduate", id: "1" },
      { name: "Graduate", id: "2" },
    ],
    undergraduate: [
      { id: "1", name: "BA.LL.B First Year" },
      { id: "2", name: "BA.LL.B Second Year" },
      { id: "3", name: "BA.LL.B Third Year" },
      { id: "4", name: "BA.LL.B Fourth Year" },
      { id: "5", name: "BA.LL.B Fifth Year" },
    ],
    checkbox: null,
    tabValue: 0,
    show: true,
    model: {},
  }),

  async created() {
    this.load();
  },

  methods: {
    load() {
      const token = localStorage.getItem("token");
      if (!token) {
        return (this.show = true);
      }
      return (this.show = false);
    },

    async resultFormSubmit() {
      this.$refs.viewResultsForm.validate();
      this.marks = await api.getStudentMarks(this.result);
      console.log(this.marks);
    },

    selectedAcademic() {
      if (this.result.academic === "2") {
        return (this.programs = this.graduate);
      }
      return (this.programs = this.undergraduate);
    },

    selectCategory($category) {
      if ($category === "login") {
        return (this.tabValue = 1);
      }
      return (this.tabValue = 0);
    },

    resultSubmit() {},

    clear() {
      this.$refs.viewResultsForm.reset();
    },

    async loginSubmit() {
      this.$refs.loginForm.validate();
      if (this.model) {
        await api.login(this.model);
        const token = jwt.sign({ Auth: this.model }, "chakrabarti2020");
        localStorage.setItem("token", token);
        this.$router.push("/");
      }
      this.model = {};
    },
  },
};
</script>
