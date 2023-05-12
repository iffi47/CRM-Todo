<template>
    <div>
        <v-sheet rounded="lg">
            <v-list rounded="lg">
                <template v-for="link in links" :key="link.name">
                    <v-list-item :to="link.to" link>
                        <v-list-item-title>
                            {{ link.name }}
                        </v-list-item-title>
                    </v-list-item>
                </template>
                <v-divider class="my-2"></v-divider>

                <v-list-item link color="error" @click="logout">
                    <v-list-item-title>
                        Logout
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </div>
</template>
<script setup>
import { defineProps } from "vue"
import { useStore } from "vuex"
// import { useRouter } from "vue-router";
const store = useStore()
// const router = useRouter()
const props = defineProps({
    links: {
        type: Array,
        required: true,
        default: () => []
    }
})
// onMounted(() => {
//     if (localStorage.getItem("token") === null && localStorage.getItem("user") === null) {
//         router.push({ name: "Login" })

//     } else if (localStorage.getItem("token") === "admin") {
//         links.value = Adminlinks.value
//     } else {
//         links.value = Userlinks.value
//     }
// })

const logout = () => {
    store.dispatch("logout")
}
</script>