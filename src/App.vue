<template>
  <el-container id="app">
    <Aside/>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./components/Aside";
export default {
  name: 'App',
  components:{
    Aside
  }
}
</script>

<style>

#app{
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

body{
  margin: 0;
  padding: 0;
}

html,body{
  height: 100%;
}
</style>
