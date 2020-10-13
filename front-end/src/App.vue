<template>
  <v-app>
    <v-card v-if="currentRouteName" height="100%" width="210" class="app-navbar float-left">
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
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
            <v-btn color="primary" block>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-card>
    <v-main :class="currentRouteName? 'main-component': 'login-component'">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data() {
      return {
        items: [{
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            link: '/'
          },
          {
            title: 'Students',
            icon: 'mdi-account-multiple-outline',
            link: '/students'
          },
          {
            title: 'Results',
            icon: 'mdi-library',
            link: '/results'
          }
        ],
        right: null,
      }
    },
    computed: {
      currentRouteName() {
        if(this.$route.name !== 'Login') {
          return true;
        }
        return false;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .app-navbar {
    position: fixed;
  }

  .main-component {
    width: calc(100% - 210px);
    margin-left: 210px;
    margin-top: 40px;
  }
</style>