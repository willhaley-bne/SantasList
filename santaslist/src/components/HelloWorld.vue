<template>
  <div class="hello">
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        checking_the_list: false
    }
  },
    methods:{
      check_the_list: function(event){
          this.checking_the_list = true
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
