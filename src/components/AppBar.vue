<template>
    <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
            <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32" :image="user.avatar"></v-avatar>
            <v-spacer></v-spacer>
            <v-responsive max-width="260">
                <v-text-field density="compact" hide-details variant="solo"> {{ user.name }}</v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>
</template>
<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
const store = useStore()
const user = computed(() => store.state.user)
</script>