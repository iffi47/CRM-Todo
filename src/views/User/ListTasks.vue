<template>
    <div>
        <v-text-field v-model="taskTitle" class="pa-3" variant="outlined" clearable="true" hide-details label="Add Tasks"
            append-inner-icon="mdi-plus" @click:append-inner="addTask()" @keyup.enter="addTask()"></v-text-field>
        <v-list lines="two" select-strategy="classic">
            <div v-for="task in tasks" :key="task.id">
                <v-list-item @click="doneTask(task.id, task.userId, !task.status)"
                    :class="{ 'blue-lighten-5': classColor }">
                    <template v-slot:prepend>
                        <v-list-item-action>
                            <v-checkbox-btn :model-value="task.status"></v-checkbox-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-text :class="{ 'text-decoration-line-through': task.status }">{{ task.title
                            }}</v-list-item-text>
                        </v-list-item-content>
                    </template>
                    <template v-slot:append>
                        <v-btn @click.stop="deleteTask(task.id, task.userId)" color="red-lighten-1" icon="mdi-delete"
                            variant="text"></v-btn>
                        <v-btn :to="'/edit-task/' + task.id + '/' + task.userId" color="blue-lighten-1" icon="mdi-pencil"
                            variant="text"></v-btn>
                    </template>
                    <!-- <v-spacer></v-spacer> -->
                </v-list-item>
                <v-divider></v-divider>
            </div>
        </v-list>
    </div>
</template>
<script  setup>

import { ref, onMounted, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const taskTitle = ref("")
const userId = ref("")
onMounted(() => {
    const localStorageUser = localStorage.getItem("user")
    const parsedUser = JSON.parse(localStorageUser)
    // console.log(parsedUser.id);
    userId.value = parsedUser.id
    store.dispatch("fetchTasks", parsedUser.id)

    tasks.value = store.state.tasks
    // console.log(tasks.value);
})
const doneTask = function (id, userId, status) {
    store.dispatch("doneTask", { id: id, status: status, userId: userId })
}
const addTask = function () {
    store.dispatch("addTask", { id: userId.value, title: taskTitle.value, status: false, dateTime: Date.now() })
    taskTitle.value = ""
}

const tasks = computed(() => store.getters.getTasks)
const deleteTask = function (id, userId) {
    store.dispatch("deleteTask", { id: id, userId: userId })
}
</script>