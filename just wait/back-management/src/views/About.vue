<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ test111 }}</h2>
    <button @click="click">test</button>
  </div>
</template>

<script>
import { test } from "../api/api.js";
export default {
  data() {
    return {
      test111: ""
    };
  },
  methods: {
    click() {
      test().then(res => {
        this.test111 = res;
        console.log(res);
      });
    }
  }
};
</script>
