<template>
<div>
<b-container class="bv-example-row">
  <b-row>
    
    <b-col sm="12">
     
      <!-- Main box -->
      <div class="main-box">
        <b-row class="justify-content-sm-center" align-v="center">
          <b-col col sm="12" md="auto" @click=goToPiton>
            <div>smarenkov</div>
            <img src="../assets/Snake_Logo.png" width="300" height="300">
          </b-col>

          <b-col col sm="12" md="auto">
            <div class="rp2g-title">RolePlay2Gamers</div>
            <img src="../assets/DuetOfDead-Quadro.png" width="350" height="350">
          </b-col>

          <b-col col sm="12" md="auto" @click=goToWolf>
            <div>artwolfff</div>
            <img src="../assets/Wolf_Logo.png" width="300" height="300">
          </b-col>
        </b-row>
      </div>

      <!-- Current Development -->
      <div class="current-development">
        <b-row>
          <b-col col  md="4"></b-col>
          <b-col>
            <div>Current development</div>
          </b-col>
          <b-col col  md="4"></b-col>
        </b-row>

        <!-- Space Colony Platforms -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col  md="1"></b-col>
          <b-col col  md="4">
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
          <b-col col  md="1"></b-col>
        </b-row>

        <!-- Party Hunt -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col  md="1"></b-col>
          <b-col col  md="4">
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
          <b-col col  md="1"></b-col>
        </b-row>

          <!-- Station 7 Sins -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col  md="1"></b-col>
          <b-col col  md="4">
            <img src="../assets/img/station-7s_player.png" width="100">
          </b-col>
          <b-col>
            <div class="rp2g-title">
              Station 7 Sins 
            </div>
            <div>
              Metroidvania
            </div>
          </b-col>
          <b-col col  md="1"></b-col>
        </b-row>
    
        <!-- Monster Runner -->
        <b-row class="justify-content-md-center game-description" align-v="center"> 
          <b-col col  md="1"></b-col>
          <b-col col  md="4">
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
          <b-col col  md="1"></b-col>
        </b-row>

      </div>

    </b-col>
    
  </b-row>
  </b-container>

</div>
</template>

<script>
export default {
  name: 'HomePage',

  data(){
    return {
      pitonUrl: "https://github.com/smarenkov",
      wolfUrl: "https://github.com/artwolfffrpg"
    }
    },

    methods: {
      goToPiton: function () {
        window.open(this.pitonUrl,'_blank');
    },
      goToWolf: function () {
        window.open(this.wolfUrl,'_blank');
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
