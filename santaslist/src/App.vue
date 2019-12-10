<template>
  <div id="app">
    <b-container v-if="admin">
      <b-button @click="set_decision_status('random')"> Random</b-button>
      <b-button @click="set_decision_status('nice')" variant="success"> Nice</b-button>
      <b-button @click="set_decision_status('naughty')" variant="warning"> Naughty</b-button>
    </b-container>
    <b-container v-if="!admin">
      <b-row>
        <b-col md="6">
          <span v-if="checking_the_list<2">
            <img src="./assets/santa.jpg">
          </span>
          <span v-if="checking_the_list==2">
            <h1>Congratulations!<br/>  You're on the nice list!</h1>
            <img src="./assets/santa-claus-christmas.png" class="img-responsive" width="517px">
          </span>
          <span v-if="checking_the_list==3">
            <h1>Oh NO!<br/>  You're on the naughty list!</h1>
            <img src="./assets/coal.jpg" class="img-responsive">
          </span>
        </b-col>
        <b-col md="6">
          <b-button v-if="checking_the_list==0" variant="success" size="lg" class="m-5"
                    style="padding: 50px; font-size: 50px;" v-on:click="check_the_list">
            Find Out Now{{state_queue}}
          </b-button>
          <span v-if="checking_the_list==1">
            <h1>Using facial recognition,<br/> we'll check the list... twice</h1>
            <h3>Smile, taking picture in {{countdown}}</h3>
            <vue-web-cam ref="webcam" width="100%" v-bind:selectFirstDevice="first_device"/>
            <h3>(Santa is High Tech Y'all)</h3>
          </span>
          <span v-if="checking_the_list==2">
            <img :src="img" class="img-rounded">
            {{number}}
          </span>
          <span v-if="checking_the_list==3">
            <img :src="img" class="img-rounded">
          </span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

    export default {
        name: 'App',
        mounted: function () {
            var temp = new URLSearchParams(window.location.search)
            this.get_decision_state()
            if (temp.get('admin')) {
                this.admin = true
            } else {
              setInterval(this.get_decision_state, 10000)
            }
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                checking_the_list: 0,
                img: null,
                camera: null,
                deviceId: null,
                devices: [],
                countdown: 5,
                first_device: true,
                number: 0,
                decision_state: 'random',
                admin: false,
                state_queue: null,
                decision_id:null
            }
        },
        methods: {
            set_decision_status: function(new_state){
                this.$http.put('https://santaslist-ca30.restdb.io/rest/appstate/'+this.decision_id, {"state": new_state})
                    .then(response=>{
                        console.log(response)
                    }, response=>{
                        console.log(response)
                    })
            },
            get_decision_state: function () {
                console.log(this.decision_id)
                this.$http.get('https://santaslist-ca30.restdb.io/rest/appstate').then(response => {
                    this.decision_id = response.body[0]._id
                    this.decision_state = response.body[0].state
                    if (this.decision_state.includes('random')) {
                        this.state_queue = ''
                    }
                    if (this.decision_state.includes('nice')) {
                        this.state_queue = '!'
                    }
                    if (this.decision_state.includes('naughty')) {
                        this.state_queue = '?'
                    }
                })
            },
            check_the_list: function (event) {
                if (this.decision_state.includes('random')) {
                    this.state_queue = null
                }
                if (this.decision_state.includes('nice')) {
                    this.state_queue = '!'
                }
                if (this.decision_state.includes('naughty')) {
                    this.state_queue = '?'
                }
                this.checking_the_list = 1
                var self = this;
                setTimeout(function () {
                    if (self.countdown > 0) {
                        self.tick_tock()
                    } else {

                        if (self.decision_state == 'nice') {
                            self.check_the_list_two()
                            return
                        }

                        if (self.decision_state == 'naughty') {
                            self.check_the_list_three()
                            return
                        }

                        self.number = Math.floor(Math.random() * 11);
                        if (self.number == 9) {
                            self.check_the_list_three()
                        } else {
                            self.check_the_list_two()
                        }
                    }
                }, 1000)
            },
            check_the_list_two: function () {
                this.checking_the_list = 2;
                this.img = this.$refs.webcam.capture()
                this.confetti_yall()
                var self = this;
                setTimeout(function () {
                    self.checking_the_list = 0;
                    self.countdown = 5;
                    self.$confetti.stop();
                }, 10000)
            },
            check_the_list_three: function () {
                this.checking_the_list = 3;
                this.img = this.$refs.webcam.capture()

                var self = this;
                setTimeout(function () {
                    self.checking_the_list = 0;
                    self.countdown = 5;
                }, 10000)
            },
            tick_tock: function () {
                this.countdown--
                this.check_the_list()
            },
            confetti_yall: function () {
                this.$confetti.start({
                    particles: [
                        {
                            type: 'image',
                            url: 'https://ud.mybne.com/hardees-star.png'
                        },
                        {
                            type: 'image',
                            url: 'https://ud.mybne.com/hamburger.png'
                        },
                        {
                            type: 'image',
                            url: 'https://ud.mybne.com/santa-hat.png'
                        },

                    ],
                    defaultSize: 25,
                    defaultDropRate: 8,
                    particlesPerFrame: 1
                });

            }
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
