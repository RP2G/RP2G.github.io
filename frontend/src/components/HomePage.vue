<template>
  <div>
    
    <div class="main-box">
      <b-row class="justify-content-md-center" align-v="center">
        <b-col col  md="3">
          <div>smarenkov</div>
          <img src="../assets/Snake_Logo.png" width="400" height="400">
        </b-col>

        <b-col col  md="auto">
          <div class="rp2g-title">RolePlay2Gamers</div>
          <img src="../assets/DuetOfDead-Quadro.png" width="500" height="500">
        </b-col>

        <b-col col  md="3">
          <div>artwolfffrpg</div>
          <img src="../assets/Wolf_Logo.png" width="400" height="400">
        </b-col>
      </b-row>
    </div>

    <div class="current-development">
      <b-row>
        <b-col col  md="4"></b-col>
        <b-col>
          <div>Current development</div>
        </b-col>
        <b-col col  md="4"></b-col>
      </b-row>

      <b-row class="justify-content-md-center" align-v="center"> 
        <b-col col  md="1"></b-col>
        <b-col col  md="4">
          <img src="../assets/player-man.png" width="100">
        </b-col>
        <b-col>
          <div class="rp2g-title">
            Space Colony Platforms 
          </div>
          <div>
            2D platformer
          </div>
        </b-col>
        <b-col col  md="1"></b-col>
      </b-row>
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
  @import '../css/style.css';
  body {
    background: rgb(69,203,230);
    background: linear-gradient(90deg, rgba(69,203,230,1) 0%, rgba(161,51,204,1) 100%);
  }
</style>
