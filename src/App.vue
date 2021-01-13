<template>
    <Users/>
  <router-view/>
</template>

<script>
import {users} from './store/user'
import {provide} from 'vue'
import Users from "@/components/Users"
export default {
    setup() {
        provide('users', users)
    },
    components: {Users}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
