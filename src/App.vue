<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">SPECT8<span class="brand-white">.live</span></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <!-- <li class="nav-item">
                  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="User Photo" class="user-photo">
              </li> -->
              <li class="nav-item">
                <router-link v-if="currentUser" to="/user" class="nav-link">
                  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="User Photo" class="user-photo">
                </router-link>
              </li>
              <!--<li class="nav-item">
                  <a class="nav-link" href="javascript:;">{{ currentUser.email }}</a>
              </li>-->
              <div v-if="currentUser" class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/videos" class="nav-link">
                  {{ currentUser.email }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href @click.prevent="logOut">
                Logout
                </a>
              </li>
            </div>
          </ul>
        </div>
    </nav>
    <div v-if="currentUser" id="icon-bar">
      <router-link active-class="active" :to="{ name: 'Videos'}"><i class="fa fa-home"></i></router-link>
      <router-link to="/about"><i class="fa fa-bell"></i></router-link>
      <router-link to="/about"><i class="fa fa-envelope"></i></router-link>
      <router-link to="/about"><i class="fa fa-cog"></i></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from "vuex-class";
const Auth = namespace("Auth");
//import AppNavbar from './components/AppNavbar.vue';

@Component
export default class App extends Vue {
  @Auth.State("user")
  private currentUser!: any;

  @Auth.Action
  private signOut!: () => void;

  logOut() {
    this.signOut();
    this.$router.push("/login");
  }
}
</script>

<style>
/* Side nav */

#icon-bar {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#icon-bar a{
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
  background: #FF6114
}

#icon-bar a:hover {
  background: #9C3A09;
}

#icon-bar a:active{
  background-color: #9C3A09;
}

#icon-bar .active {
  background-color: #9C3A09;
}

</style>

