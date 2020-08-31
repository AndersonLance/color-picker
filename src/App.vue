<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

// Reset all paddings and margins
* {
  padding: 0;
  margin: 0;
}

html {
  background-color: $neutral-1-200;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
    padding: 12px 15px;
    border-radius: $border-radius;
    margin-right: 15px;
    color: $neutral-1-050;
    background-color: $neutral-1-800;
    border: solid 1px $neutral-1-500;
}

.btn:hover {
  background-color: $neutral-1-600;
  cursor: pointer;
}

</style>
