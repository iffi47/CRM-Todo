<template>
    <v-container>
        <div class="d-flex align-center justify-center" style="height: 100vh">
            <v-sheet width="400" class="mx-auto">
                <v-form fast-fail @submit.prevent="signup">
                    <v-text-field v-model="signupForm.email" label="Enter Email"></v-text-field>
                    <v-text-field v-model="signupForm.password" label="Enter Password"></v-text-field>
                    <!-- <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a> -->
                    <v-btn type="submit" color="blue-accent-4" block class="mt-2">Sign in</v-btn>
                </v-form>
                <div class="mt-2">
                    <p class="text-body-2">Go back to login <a href="#" @click="gotoLogin">login</a></p>
                </div>
            </v-sheet>
        </div>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { useStore } from "vuex"
const router = useRouter()
const store = useStore()
const signupForm = ref({})
const gotoLogin = () => {
    router.push({ name: "Login" })
}
const signup = () => {
    store.dispatch("signup", signupForm.value)
}
</script>