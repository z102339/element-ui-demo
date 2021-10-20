<template>
  <el-aside class="aside">
    <el-menu ref="menu" @open="open" @close="close" :router="true">
      <el-submenu index="1">
        <template slot="title">
          <div class="header" :class="{headerActive:activeState['1']}"></div>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">
            <div class="header" :class="{headerActive:activeState['1-4']}"></div>
            <span>选项4</span>
          </template>
          <el-menu-item :route="{path:'home'}" index="1-4-1">选项1</el-menu-item>
          <el-menu-item :route="{path:'home'}" index="1-4-2">选项2</el-menu-item>
          <el-submenu index="1-4-3">
            <template v-slot:title>
              <div class="header" :class="{headerActive:activeState['1-4-3']}"></div>
              <span>选项3</span>
            </template>
              <el-menu-item index="1-4-3-1">选项1</el-menu-item>
              <el-menu-item index="1-4-3-2">选项2</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <div class="header" :class="{headerActive:activeState['2']}"></div>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>

// import changeState from '../utils/utils'

export default {
  name: "Aside",
  methods: {
    open(index) {
      // for (const path of indexPath) {
      //   this.activeState[path]=true
      // }
      this.activeState[index] = true
      // console.log('open', index, indexPath)
      // changeState(this.activeState,indexPath,0,true)

    },
    close(index) {
      console.log("closing")
      // const last=indexPath[indexPath.length-1]
      this.activeState[index] = false

  const beClosed= Object.keys(this.activeState).filter((path) => {
        return this.activeState[path]&&new RegExp(`^${index}-`).test(path)
      }).map((path)=>{
        this.activeState[path]=false
        return path
  }).sort((a, b) => b.length - a.length)
      console.log(beClosed)
      for (const path of beClosed) {
        console.log(path)
        this.$refs.menu.closeMenu(path)
      }
      // console.log(beClosed)
      // const last=beClosed.pop()
      // if(last){
      //   this.$refs.menu.closeMenu(last)
      // }
      // for (const path of beClosed) {
      //   this.$refs.menu.closeMenu(path)
      // }





      // this.activeState[indexPath[indexPath.length-1]=false
      //changeState(this.activeState,indexPath,0,false)
      // console.log(index,indexPath)
    }
  },


  data() {
    return {
      route: {
        path: "home",
      },
      activeState: {
        '1': false,
        '1-4': false,
        '1-4-3':false,
        '2': false
      }

    }
  }
}
</script>

<style scoped>

.header {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
  background-color: rgb(161, 161, 161);
}

.headerNotActive {
  background-color: rgb(161, 161, 161);
}

.headerActive {
  background-color: #2c3e50;
}


.aside {
  width: 300px;
  color: white;
  background-color: #2c3e50;
}

.nav {
  width: 100%;
  height: 200px;
  background-color: white;
}
</style>