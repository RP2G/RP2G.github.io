<template>
<div>
  <b-container>

      <!-- Main box -->
      <div class="main-box">
        <b-row class="justify-content-center" align-v="center">
          <b-col col order="2" order-sm="2" order-md="1" order-lg="1" order-xl="1"
            cols="6" sm="6" md="3" lg="3" xl="3" 
            @click=goToPiton>

            <div>smarenkov</div>
            <img src="../assets/Snake_Logo.png" width=100%>
          </b-col>

          <b-col col order="1" order-sm="1" order-md="2" order-lg="2" order-xl="2"
            cols="10" sm="10" md="5" lg="5" xl="5">
            <div class="rp2g-title">RolePlay2Gamers</div>
            <img src="../assets/DuetOfDead-Quadro.png" width=100%>
          </b-col>

          <b-col col order="3" order-sm="3" order-md="3" order-lg="3" order-xl="3"
            cols="6" sm="6" md="3" lg="3" xl="3" 
            @click=goToWolf>
            
            <div>artwolfff</div>
            <img src="../assets/Wolf_Logo.png" width=100%>
          </b-col>
        </b-row>
      </div>
    
    </b-container>

    <b-container fluid="md">

      <!-- Current Development -->
      <div class="current-development">
        <b-row>
          <b-col col sm="12">
            <div>Current development</div>
          </b-col>
        </b-row>

        <!-- Space Colony Platforms -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col sm="3" md="4">
            <img src="../assets/img/space_colony_platforms_player.png" width="100">
          </b-col>
          <b-col>
            <div class="rp2g-title">
              Space Colony Platforms 
            </div>
            <div>
              Platformer
            </div>
          </b-col>
        </b-row>

        <!-- Party Hunt -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col sm="3" md="4">
            <img src="../assets/img/party_hunt_player.png" width="100">
          </b-col>
          <b-col>
            <div class="rp2g-title">
              Party Hunt
            </div>
            <div>
              RPG
            </div>
          </b-col>
        </b-row>

          <!-- Station 7 Sins -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col sm="3" md="4" @click=play>
            <div v-if="!playGif && !gifEnd">
              <img src="../assets/img/Sprite-0006.png" width="100">
            </div>
            <div v-if="playGif">
              <img src="../assets/img/Sprite-0005.gif" width="100">
            </div>
            <div v-if="gifEnd">
              <img src="../assets/img/Sprite-0007.png" width="100">
            </div>
          </b-col>
          <b-col>
            <div class="rp2g-title">
              Station 7 Sins 
            </div>
            <div>
              Metroidvania
            </div>
          </b-col>
        </b-row>
    
        <!-- Monster Runner -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col sm="3" md="4">
              <img src="../assets/img/monster_runner_player.png" width="100">
          </b-col>
          <b-col>
            <div class="rp2g-title">
              Monster Runner
            </div>
            <div>
              runner
            </div>
          </b-col>
        </b-row>

      </div>

  </b-container>

</div>
</template>

<script>
export default {
  name: 'HomePage',

  data(){
    return {
      pitonUrl: "https://github.com/smarenkov",
      wolfUrl: "https://github.com/artwolfffrpg",

      playGif: false,
      gifEnd: false,
    }
    },

    methods: {
      goToPiton: function () {
        window.open(this.pitonUrl,'_blank');
      },
      goToWolf: function () {
        window.open(this.wolfUrl,'_blank');
      },

      play: function () {
        if(!this.gifEnd) {
          this.playGif = true;
          setTimeout(this.setGifDisable, 1550);
        }
      },

      setGifDisable: function () {
        this.playGif = false;
        this.gifEnd = true;
      }
    }
}



</script>

<style>
  @import '../css/style.css';
  body {
    background: rgb(69,203,230);
    background: linear-gradient(90deg, rgba(69,203,230,1) 0%, rgba(161,51,204,1) 100%);
  }
</style>
