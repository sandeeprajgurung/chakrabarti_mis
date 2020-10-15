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

      <v-card v-if="tabValue === 0" outlined class="mt-5 pa-10">
        <div class="d-flex justify-center align-center">
          <v-card-title class="pa-0">
            <v-row>
              <v-img
                lazy-src="../assets/result-logo.png"
                max-height="100px"
                max-width="100px"
                src="../assets/result-logo.png"
              ></v-img>
              <v-list class="justify-center align-center">
                  Chakrabarti HaBi Education Academy (College of law)<br/>
                  Department of Examination<br/>
                  Bijulibazar, Kathmandu
              </v-list>
            </v-row>
          </v-card-title>
        </div>

        <v-card-title class="pa-0">
          <v-row>
            <v-col></v-col>
            <v-col></v-col>
              Pre-Board Examination 2020
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
        </v-card-title>        
        
        <v-card-title class="pa-0">
          <v-row>
            <v-col>
              Name: Churi How
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>
              Roll No.: 36
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-title class="pa-0">
          <v-row>
            <v-col>
              Level: Majdur
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>
              Program: Machha palan
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-title class="pa-0">
          <v-row>
            <v-col>
              Year: tannai
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
            <v-col>
              Group: Adhbaise
            </v-col>
          </v-row>
        </v-card-title>

        <br/>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Name
                </th>
                <th class="text-center">
                  Full Marks
                </th>
                <th class="text-center">
                  Pass Marks
                </th>
                <th class="text-center">
                  Marks Obtained
                </th>
                <th class="text-center">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody class="result-tbody">
              <tr
                v-for="item in marks"
                :key="item.name"
                class="text-center"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.full }}</td>
                <td>{{ item.pass }}</td>
                <td>{{ item.obtained }}</td>
                <td>{{ item.remarks }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>        

        <br/>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <th class="text-center">
              ________________________
              </th>
              <th class="text-center">
              ________________________
              </th>
              <th class="text-center">
              ________________________
              </th>
              <th class="text-center">
              ________________________
              </th>
            </thead>
            <tbody class="result-tbody">
              <tr>
                <th class="text-center">
                  Prepared By
                </th>
                <th class="text-center">
                  Checked By
                </th>
                <th class="text-center">
                  Verified By
                </th>
                <th class="text-center">
                  Chairman
                </th>
              </tr>
            </tbody>
          </template>
        </v-simple-table> 

        <br/>
        <v-btn elevation="6" small class="mr-4" type="" color="primary"> Print </v-btn>
      
      </v-card>
    </v-container>
  </div>
</template>

<script>
import api from "@/api";

export default {
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
    marks: [
          {
            name: 'Subject 1',
            full: 80,
            pass: 35,
            obtained: 10,
            remarks: '*',
          },
          {
            name: 'Subject 2',
            full: 80,
            pass: 35,
            obtained: 40,
            remarks: '',
          },
          {
            name: 'Subject 3',
            full: 80,
            pass: 35,
            obtained: '-',
            remarks: 'Abscent',
          },
          {
            name: 'Subject 4',
            full: 80,
            pass: 35,
            obtained: 20,
            remarks: '*',
          },
          {
            name: 'Subject 5',
            full: 80,
            pass: 35,
            obtained: 60,
            remarks: '',
          },
        ],
    checkbox: null,
    tabValue: 0,
    model: {},
  }),

  methods: {
    resultFormSubmit() {
      this.$refs.viewResultsForm.validate();
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
      this.$refs.viewResultsForm.reset()
    },

    async loginSubmit() {
      this.$refs.loginForm.validate();
      if (this.model) {
        await api.login(this.model);
      }
      this.model = {};
    },
  },
};
</script>
