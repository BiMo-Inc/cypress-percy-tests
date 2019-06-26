<template>
  <div class="status">
    <h2 id="status-display" data-input-test="testValue">CURRENT STATUS: {{ currentStatus }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Status',
    data() {
    return {
      currentStatus: "",
    };
  },
  props: {
    myStatus: String
  },
   watch: {
    myStatus(data) {
       this.currentStatus=data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
