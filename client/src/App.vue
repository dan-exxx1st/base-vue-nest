<template>
  <header>
    <HelloWorld :msg="msg" />
  </header>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'
import axios from 'axios'
import gql from 'graphql-tag'

export default defineComponent({
  components: { HelloWorld },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    async loadMsg() {
      // Can load msg by axios from http endpoint
      const res = await axios.get('/api')
      this.msg = res.data
    }
  },
  apollo: {
    // And can load msg by graphql query
    msg: gql`
      query {
        msg
      }
    `
  },
  created() {
    this.loadMsg()
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
