<template>
  <div>
    <h1>
      <img data-processing-test="testProcessing" src="../assets/loading_2.gif" alt>
    </h1>
  </div>
</template>

<script>
export default {
  name: "Processing",
  data() {
    return {};
  },
  props: {
    myStatus: String
  },
  methods: {
    checkInput(data) {
      this.processApi(data);
    },
    processApi(data) {
      let processed = null;
      this.$http
        .post("http://localhost:8081/api/test/post", data)
        .then(response => {
          this.$emit("postback", response.body);
        });
    }
  },
  watch: {
    myStatus(data) {
      this.checkInput(data);
    }
  }
};
</script>

<style>
</style>
