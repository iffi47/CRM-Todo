<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <v-card>
                        <v-card-title>
                            <h1 class="text-center">Edit Task</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field v-model="task.title" label="Task Title"></v-text-field>
                            
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="editTask(task.id, task.userId)">Edit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import { onMounted, computed } from "vue"
import { useRoute, } from "vue-router"
import { useStore } from "vuex"
import router from "../../router";
const store = useStore()
const route = useRoute()
const task = computed(() => store.getters.getTask)
onMounted(() => {
    const taskId = route.params.id
    const userId = route.params.userId
    store.dispatch("fetchSingleTask", { id: taskId, userId: userId })
    // task.value = store.state.task
    // console.log(task.value);
})
const editTask = (id, userId) => {
    store.dispatch("editTask", { id: id, title: task.value.title, userId: userId })
    router.push("/tasks")
}
</script>