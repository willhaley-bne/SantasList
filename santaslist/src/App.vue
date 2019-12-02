<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col><img src="./assets/santa.jpg"></b-col>
        <b-col>
          <b-button v-if="checking_the_list==0" variant="success" size="lg" class="m-5" v-on:click="check_the_list">Found out Now!</b-button>
          <div v-if="checking_the_list==1">
            <h1>Using facial reconition (Santa's hi-tech now y'all)</h1>
            <h3>Smile, taking picture in {{countdown}}</h3>
            <vue-web-cam ref="webcam" width="100%" v-bind:selectFirstDevice="first_device"/>
         </div>
          <div v-if="checking_the_list==2">
            <img :src="img">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                checking_the_list: 0,
                img: null,
                camera: null,
                deviceId: null,
                devices: [],
                countdown: 10,
                first_device: true
            }
        },
        methods: {
            check_the_list: function (event) {
                this.checking_the_list = 1
                var self = this
                setTimeout(function(){
                    if(self.countdown > 0 ){
                      self.tick_tock()
                    }else{
                        self.check_the_list_two()
                    }
                }, 1000)
            },
            check_the_list_two: function(event){
            console.log(this.$refs)
                this.checking_the_list = 2;
                this.img = this.$refs.webcam.capture()
                console.log(this.img)
            },
            tick_tock: function(){
                console.log('asdf')
                this.countdown--
                this.check_the_list()
            }
        },
        mounted: function(){
        }
    }
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
