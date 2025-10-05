<template>
  <!-- App.vue -->
  <!-- <router-view :to="/auth"></router-view> -->
  <v-app id="app">
    <div v-show="state">
      <!--App bar-->
      <AppBar v-if="state"></AppBar>
      <v-main class="bg-grey-lighten-3">
        <v-container>
          <v-row>
            <v-col class="ma-4" cols="2">
              <!--Side Nav-->
              <SideNav v-if="state" :links="links"></SideNav>
            </v-col>
            <v-col>
              <!--Main Content-->
              <v-sheet min-height="70vh" rounded="lg">
                <!--  -->
                <HomePage></HomePage>
                <!-- <component v-for="(component, index) in links" :key="index" :is="component.component"></component> -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
    <div v-if="!state">
      <RouterView v-if="!state"></RouterView>
    </div>
  </v-app>
</template>
<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue"
const router = useRouter()
const store = useStore()
import SideNav from './components/SideNav.vue';
import AppBar from './components/AppBar.vue';
import HomePage from './views/HomePage.vue';
const state = computed(() => store.state.user)
onMounted(() => {
  if (localStorage.getItem("token") === null && localStorage.getItem("user") === null) {
    router.push({ name: "Login" })

  } else if (localStorage.getItem("token") === "admin") {
    // store.commit("SET_USER", localStorage.getItem("user"))
    // store.commit("SET_TOKEN", localStorage.getItem("token"))
    links.value = Adminlinks.value
    // console.log(links.value, Adminlinks.value);
  } else {
    links.value = Userlinks.value

    // store.commit("SET_USER", localStorage.getItem("user"))
    // store.commit("SET_TOKEN", localStorage.getItem("token"))
  }
})
const links = ref([])
const Adminlinks = ref([

  { name: "Users", to: "/users" },
  { name: "Add Users", to: "/add-user" },


])
const Userlinks = ref([
  { name: "Tasks", to: "/tasks" },
])


</script>
<style scoped></style>
