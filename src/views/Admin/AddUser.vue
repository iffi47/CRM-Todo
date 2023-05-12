<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <v-card>
                        <v-card-title>
                            <h1 class="text-center">{{ mode ? "Add User" : "Edit User" }}</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field v-model="user.name" :label="mode ? 'Add User' : 'Edit User'"></v-text-field>
                            <v-text-field v-model="user.email" :label="mode ? 'Add Email' : 'Edit Email'"></v-text-field>
                            <v-text-field v-model="user.password"
                                :label="mode ? 'Enter Strong Password' : 'Edit Password'"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" v-show="!mode" @click="editUser(user.id)">Edit</v-btn>
                            <v-btn color="primary" v-show="mode" @click="addUser()">Add</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute, } from "vue-router"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
const router = useRouter()
const store = useStore()
const route = useRoute()
const mode = ref(false)
const user = computed(() => store.getters.getSingleUser)
onMounted(() => {
    if (route.path === "/add-user") {
        mode.value = true
    } else {
        mode.value = false
        const userId = route.params.id
        store.dispatch("fetchSingleUser", userId)
    }

})
const editUser = (id) => {
    store.dispatch("editUser", { id: id, name: user.value.name, email: user.value.email, password: user.value.password })
    router.push("/users")
}
const addUser = () => {
    store.dispatch("addUser", { name: user.value.name, email: user.value.email, password: user.value.password, isAdmin: false })
    router.push("/users")
    user.value = null
}

</script>