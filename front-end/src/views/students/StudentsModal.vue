<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="green"
        fab
        dark
        class="mb-2"
        small
        depressed
        v-bind="attrs"
        v-on="on"
      >
        <v-icon dark>mdi-account-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-form
        ref="studentForm"
        v-model="valid"
        lazy-validation
        @submit.prevent="studentFormSubmit"
      >
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="student.name"
                  label="Name"
                  :rules="[(v) => !!v || 'Name is required']"
                  dense
                  required
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.examNumber"
                  :rules="examNumberRules"
                  label="Exam number"
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.rollNumber"
                  :rules="rollNumberRules"
                  label="Roll number"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.email"
                  :rules="emailRules"
                  label="E-mail"
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.phoneNumber"
                  :rules="[(v) => !!v || 'Phone number is required']"
                  label="Phone no."
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="gender"
                  :rules="[(v) => !!v || 'Gender is required']"
                  label="Gender"
                  dense
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.batch"
                  :rules="batchRules"
                  label="Batch"
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="student.gpa"
                  :rules="[(v) => !!v || 'GPA is required']"
                  label="GPA"
                  dense
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="items"
                  :rules="[(v) => !!v || 'Program is required']"
                  label="Program"
                  dense
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="items"
                  :rules="[(v) => !!v || 'Group is required']"
                  label="GRPID"
                  dense
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" text @click="close"> Cancel </v-btn>
          <v-btn color="primary" text type="submit"> Save </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>