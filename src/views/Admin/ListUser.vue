<template>
    <div>

        <v-table>
            <thead>
                <tr>
                    <th>
                        Profile Picture
                    </th>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td><v-avatar :image="user.avatar"></v-avatar></td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td><v-chip class="ma-2" :color="user.isAdmin ? 'green' : 'blue'" text-color="white">
                            {{ user.isAdmin ? "Admin" : "User" }}
                        </v-chip> </td>
                    <td v-show="!user.isAdmin"> <v-btn @click.stop="deleteUser(user.id, user.userId)" color="red-lighten-1"
                            icon="mdi-delete" variant="text"></v-btn>
                        <v-btn :to="'/edit-user/' + user.id" color="blue-lighten-1" icon="mdi-pencil"
                            variant="text"></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>

    </div>
</template>
<script setup>
import { onMounted, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
onMounted(() => {
    store.dispatch("fetchUsers")
    users.value = store.state.users
})
const users = computed(() => store.state.users)
const deleteUser = function (id) {
    store.dispatch("deleteUser", id)
}
</script>