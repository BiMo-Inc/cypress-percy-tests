<template>
  <div id="app">
    <h1>I Am Parent Component</h1>
    <Landing class="p-component" v-show="!isProcessing"/>
    <Processing
      v-show="isProcessing"
      class="p-component"
      v-on:postback="postback"
      :myStatus="submitValue"
    />
    <Status class="s-component" v-show="value!==null" :myStatus="''+value+''"/>
    <br>
    <br>
    <br>
    <input
      id="input-status"
      autofocus
      data-input-test="testValue"
      v-model="currentStatus"
      type="text"
    >
    <button @click="submit()" id="btn-submit">SUBMIT</button>
  </div>
</template>

<script>
import Status from "./components/Status.vue";
import Processing from "./components/Processing.vue";
import Landing from "./components/Landing.vue";
export default {
  name: "app",
  components: {
    Status,
    Processing,
    Landing
  },
  data() {
    return {
      currentStatus: "",
      value: null,
      submitValue: null,
      isProcessing: false
    };
  },
  methods: {
    postback(data) {
      this.value = data;
      this.isProcessing = false;
    },
    submit() {
      this.isProcessing = true;
      this.submitValue = this.currentStatus;
      this.currentStatus = "";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.s-component {
  width: 100%;
  height: 30px;
}
.p-component {
  width: 100%;
  height: 30px;
}
</style>
