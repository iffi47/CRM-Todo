<template>
    <v-container>

        <div class="d-flex align-center justify-center" style="height: 100vh">
            <v-sheet width="400" class="mx-auto">
                <v-form fast-fail @submit.prevent="login" @keyup.enter="login">
                    <v-text-field v-model="loginForm.email" label="Enter Email"></v-text-field>

                    <v-text-field v-model="loginForm.password" label="Enter Password"></v-text-field>
                    <!-- <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a> -->

                    <v-btn type="submit" color="blue-accent-4" block class="mt-2">Sign in</v-btn>

                </v-form>
                <!-- <div class="mt-2">
                    <p class="text-body-2">Don't have an account? <a href="#" @click="gotoSignUp()">Sign Up</a></p>
                </div> -->
            </v-sheet>
        </div>




    </v-container>
</template>
<script setup>
import { ref } from 'vue'
// import { useRouter } from "vue-router"
import { useStore } from "vuex"
// const router = useRouter()
const store = useStore()
const loginForm = ref({})
// const gotoSignUp = () => {
//     router.push({ name: "Signup" })
// }
const login = () => {
    store.dispatch("login", loginForm.value)
}

</script>