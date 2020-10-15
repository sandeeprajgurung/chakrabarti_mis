<template>
  <v-dialog
    v-model="openResultViewModal"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar flat dark color="primary">
        <v-btn icon dark @click.native="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click.native="close"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text>
        <v-list>
          <!-- <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              label="Item"
              required
            ></v-select>
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              label="Item"
              required
            ></v-select>
            <v-text-field
              v-model="name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="select"
              :items="items"
              label="Item"
              required
            ></v-select>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
              Reset Form
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
              Reset Validation
            </v-btn>
          </v-form> -->
        </v-list>
      </v-card-text>
      <div style="flex: 1 1 auto"></div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
   props: {
    openResultViewModal: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // resultViewModal: false,
    };
  },

  methods: {
    resetValidation() {},
    reset() {},
    
    close() {
      this.$emit("update:openResultViewModal", false);
    },

  }
};
</script>
