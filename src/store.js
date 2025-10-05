import { createStore } from 'vuex'
import axios from 'axios'
import router from './router'
import { API_URL } from './api'
const store = createStore({
  state: {
    // Your state properties go here
    user: null,
    token: null,
    tasks: [],
    task: {},
    users: [],
    singleUser: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    CLEAR_USER(state) {
      state.user = null
    },
    CLEAR_TOKEN(state) {
      state.token = null
    },
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    },
    SET_TASK(state, task) {
      state.task = task
    },
    SET_USERS(state, users) {
      state.users = users
    },
    SET_SINGLE_USER(state, user) {
      state.singleUser = user
    }
  },
  getters: {
    wathchUser(state) {
      return state.user
    },
    getTasks(state) {
      return state.tasks
    },
    getTask(state) {
      return state.task
    },
    getUsers(state) {
      return state.users
    },
    getSingleUser(state) {
      return state.singleUser
    }
  },
  actions: {
    // Your action functions go here
    //Authentication actions start
    async login({ commit }, { email, password }) {
      const response = await axios.get(`${API_URL}users?email=${email}&password=${password}`)
      if (response.status === 200 && response.data.length > 0) {
        console.log(response)
        
        const user = response.data[0]
        commit('SET_USER', user)
        commit('SET_TOKEN', user.authToken)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', user.isAdmin ? 'admin' : 'user')
        router.push({ name: 'Home' })
      } else {
        console.log(response)
        alert(response)
      }
    },

    logout({ commit }) {
      commit('CLEAR_USER')
      commit('CLEAR_TOKEN')
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      router.push({ name: 'Login' })
    },
    //authentication actions end
    //task actions start
    async fetchTasks({ commit }, id) {
      const response = await axios.get(`${API_URL}users/${id}/tasks`)
      if (response.status === 200) {
        commit('SET_TASKS', response.data)
        // console.log(response.data)
      } else {
        alert(response)
      }
    },
    async fetchSingleTask({ commit }, { id, userId }) {
      const response = await axios.get(`${API_URL}users/${userId}/tasks/${id}`)
      if (response.status === 200) {
        commit('SET_TASK', response.data)
      } else {
        alert(response)
      }
    },
    async addTask({ _ }, { id, title, status }) {
      const response = await axios.post(`${API_URL}users/${id}/tasks`, { title, status })
      if (response.status === 201) {
        store.dispatch('fetchTasks', id)
      } else {
        alert(response)
      }
    },
    async doneTask({ _ }, { id, status, userId, dateTime }) {
      const response = await axios.put(`${API_URL}users/${userId}/tasks/${id}`, {
        status,
        dateTime
      })
      if (response.status === 200) {
        store.dispatch('fetchTasks', userId)
      } else {
        alert(response.status)
      }
    },
    async editTask({ _ }, { id, title, userId }) {
      const response = await axios.put(`${API_URL}users/${userId}/tasks/${id}`, {
        title
      })
      if (response.status === 200) {
        store.dispatch('fetchTasks', userId)
      } else {
        alert(response.status)
      }
    },
    async deleteTask({ _ }, { id, userId }) {
      const response = await axios.delete(`${API_URL}users/${userId}/tasks/${id}`)
      if (response.status === 200) {
        store.dispatch('fetchTasks', userId)
      } else {
        alert(response.status)
      }
    },
    //Tasks actions end
    //  USERS ACTIONS START
    async fetchUsers({ commit }) {
      const response = await axios.get(`${API_URL}users`)
      if (response.status === 200) {
        commit('SET_USERS', response.data)
      } else {
        alert(response.status)
      }
    },
    async fetchSingleUser({ commit }, id) {
      const response = await axios.get(`${API_URL}users/${id}`)
      if (response.status === 200) {
        commit('SET_SINGLE_USER', response.data)
        console.log(response.data)
      } else {
        alert(response.status)
      }
    },
    async addUser({ _ }, { name, email, password, isAdmin }) {
      const response = await axios.post(`${API_URL}users`, {
        name,
        email,
        password,
        isAdmin
      })
      if (response.status === 201) {
        store.dispatch('fetchUsers')
      } else {
        alert(response.status)
      }
    },
    async editUser({ _ }, { id, name, email, password }) {
      const response = await axios.put(`${API_URL}users/${id}`, { name, email, password })
      if (response.status === 200) {
        store.dispatch('fetchUsers')
      } else {
        alert(response.status)
      }
    },
    async deleteUser({ _ }, id) {
      const response = await axios.delete(`${API_URL}users/${id}`)
      if (response.status === 200) {
        store.dispatch('fetchUsers')
      } else {
        alert(response.status)
      }
    }
    //USers actions end
  }
})
export default store
