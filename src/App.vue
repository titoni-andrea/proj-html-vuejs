<script>
import MyAppHeader from './components/MyAppHeader.vue';
import MyAppMain from './components/MyAppMain.vue';
import MyAppFooter from './components/MyAppFooter.vue';
import store from "./data/store.js"
export default{
  components:{
    MyAppFooter,
    MyAppHeader,
    MyAppMain
  },
  data(){
    return{
      store,
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<template>
  <MyAppHeader />
  <MyAppMain />
  <MyAppFooter />
</template>

<style scoped>
</style>
