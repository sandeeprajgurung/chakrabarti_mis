<template>
  <div>
    <v-bottom-navigation v-model="tabValue" color="teal" grow>
      <v-btn tabValue="0" @click="selectCategory('results')">
        <span>View Result</span>
        <v-icon>mdi-library</v-icon>
      </v-btn>
      <v-btn tabValue="1" @click="selectCategory('login')">
        <span>Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-container>
      <v-card v-if="tabValue === 0" outlined class="mt-5 pa-10">
        <v-card-title class="pa-0">View Result</v-card-title>
        <v-form ref="viewResultsForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="symbolNumber"
                :counter="10"
                :rules="[(v) => !!v || 'Symbol Number is required']"
                :error-messages="errors"
                label="Symbol No."
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Standard"
              ></v-select>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="resultSubmit" color="primary">
            Search
          </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </v-form>
      </v-card>

      <v-card v-if="tabValue === 1" outlined class="mt-5 pa-10">
        <v-card-title class="pa-0">Login</v-card-title>
        <v-form ref="loginForm" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="username"
                :rules="[(v) => !!v || 'Username is required']"
                type="text"
                label="Username"
                required
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="password"
                :rules="[(v) => !!v || 'Password is required']"
                type="password"
                label="Password"
                required
              />
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="loginSubmit" color="primary">
            Submit
          </v-btn>
          <v-btn @click="clear"> clear </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    symbolNumber: "",
    username: "",
    password: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
    tabValue: 0,
  }),

  methods: {
    clear() {
        this.$refs.viewResultsForm.reset();
        this.$refs.loginForm.reset();
    //   this.symbolNumber = "";
    //   this.username = "";
    //   this.password = "";
    //   this.select = null;
    },
    selectCategory($category) {
      if ($category === "login") {
        return (this.tabValue = 1);
      }
      return (this.tabValue = 0);
    },
    loginSubmit() {
      this.$refs.loginForm.validate();
      console.log(this.username);
      console.log(this.password);
    },
    resultSubmit() {
      this.$refs.viewResultsForm.validate();
    },
  },
};
</script>