<template>
  <v-app>
    <v-card
      v-if="currentRouteName"
      height="100%"
      width="210"
      class="app-navbar float-left d-none d-md-block"
    >
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-list-item-subtitle class="text-center mt-2">
              CHBEA | Exam
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn color="primary" block> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-card>

    <v-row justify="center" class="d-block d-md-none">
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-toolbar class="pl-2">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on" />
            <v-spacer></v-spacer>
            <div class="overline">CHBEA | Exam</div>
            <v-spacer></v-spacer>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-toolbar>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <div class="pa-2">
              <v-btn color="white" class="black--text" depressed rounded>
                Logout
              </v-btn>
            </div>
          </v-toolbar>
          <v-list dense nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
              @click="dialog = false"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>

    <v-main :class="currentRouteName ? 'main-component' : 'login-component'">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      dialog: false,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          link: "/",
        },
        {
          title: "Students",
          icon: "mdi-account-multiple-outline",
          link: "/students",
        },
        {
          title: "Results",
          icon: "mdi-library",
          link: "/results",
        },
      ],
      right: null,
    };
  },
  computed: {
    currentRouteName() {
      if (this.$route.name !== "Login") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-navbar {
  position: fixed;
}

.main-component {
  margin-top: 40px;

  @media (min-width: 960px) {
    width: calc(100% - 210px);
    margin-left: 210px;
  }
}
</style>