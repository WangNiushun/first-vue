<template>
  <div>
    <button @click="count++">点击了{{count}}次</button>
    <h2>神龙摆尾</h2>
  </div>
</template>

<script>
export default {
  name:"",
  data() {
    return {
      count:0
    }
  },
}
</script>

<style>
 h2{
   color:tomato ;
 }
</style>